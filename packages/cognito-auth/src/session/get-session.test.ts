import { getSession } from './get-session'
import { LoginSession, RefreshParams } from '../core/types'
import { mockLoginSession } from '../__mocks__/cognito-session'
import { COOKIE_SESSION_KEY } from '../utils/cognito'

jest.mock('./refresh-user-session')

describe('getSession', () => {
  it('should return null if no session or refresh session', async () => {
    expect(await getSession(null, null)).toBeNull()
  })

  it('should the accessToken if not expired', async () => {
    const expiresInSixMins = Math.round(new Date().getTime() / 1000) + 360
    const accessToken = 'MOCK_ACCESS_TOKEN'
    const loginSession = {
      accessToken,
      accessTokenExpiry: expiresInSixMins,
    } as LoginSession

    expect(await getSession(loginSession, null, COOKIE_SESSION_KEY, 'development')).toEqual(loginSession)
  })

  it('should refresh the session if no login session but has a refresh session', async () => {
    const refreshToken = 'MOCK_REFRESH_TOKEN'

    const refreshSession = {
      refreshToken,
    } as RefreshParams

    expect(await getSession(null, refreshSession, COOKIE_SESSION_KEY, 'development')).toEqual(mockLoginSession)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })
})
