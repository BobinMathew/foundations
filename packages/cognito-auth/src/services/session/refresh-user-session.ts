import { LoginSession, LoginType } from '../../core/types'
import { getNewUser, getLoginSession } from '../../utils/cognito'
import errorStrings from '../../constants/error-strings'
import { fetcher } from '@reapit/elements'

const TIME_NOW = Math.round(new Date().getTime() / 1000)
const ONE_MINUTE_SECS = 60

export const tokenRefreshUserSessionService = async (
  userName: string,
  refreshToken: string,
  cognitoClientId: string,
): Promise<Partial<LoginSession>> => {
  return new Promise((resolve, reject) => {
    const refreshTokenObject = {
      getToken: () => refreshToken,
    }
    const cognitoUser = getNewUser(userName, cognitoClientId)

    cognitoUser.refreshSession(refreshTokenObject, (err, session) => {
      if (!err && session) {
        return resolve({ ...getLoginSession(session), cognitoClientId })
      }
      return reject(`${errorStrings.TOKEN_REFRESH_SESSION_SERVICE_ERROR} ${JSON.stringify(err)}`)
    })
  })
}

export const codeRefreshUserSessionService = async (
  authorizationCode: string,
  redirectUri: string,
  cognitoClientId: string,
  loginType: LoginType = 'CLIENT',
): Promise<Partial<LoginSession>> => {
  const session = await fetcher({
    method: 'POST',
    api: window.reapit.config.cognitoOAuthUrl,
    url:
      `/token?grant_type=authorization_code&client_id=${cognitoClientId}` +
      `&code=${authorizationCode}&redirect_uri=${redirectUri}&state=${loginType}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })

  if (session) {
    const { expires_in, access_token, refresh_token, id_token } = session
    // Expire time from API, less a minute to allow for latency
    const tokenExpiry = TIME_NOW + expires_in - ONE_MINUTE_SECS
    return {
      accessToken: access_token,
      accessTokenExpiry: tokenExpiry,
      idToken: id_token,
      idTokenExpiry: tokenExpiry,
      refreshToken: refresh_token,
      cognitoClientId,
      loginType,
    }
  }

  throw new Error(`${errorStrings.CODE_REFRESH_SESSION_SERVICE_ERROR}`)
}
