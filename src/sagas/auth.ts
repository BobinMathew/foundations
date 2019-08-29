import { takeLatest, put, call, all } from '@redux-saga/core/effects'
import ActionTypes from '../constants/action-types'
import { authLoginSuccess, authLoginFailure, authLogoutSuccess, AuthLoginParams } from '../actions/auth'
import { Action } from '@/types/core.ts'
import { removeLoginSession, setLoginSession } from '../utils/session'
import { history } from '../core/router'
import Routes from '../constants/routes'
import {
  COGNITO_API_BASE_URL,
  COGNITO_HEADERS,
  deserializeIdToken,
  LoginSession,
  LoginType,
  fetcher
} from '@reapit/elements'

export const doLogin = function*({ data }: Action<AuthLoginParams>) {
  try {
    const { email: userName, password, loginType } = data

    const loginDetails: Partial<LoginSession> | undefined = yield call(fetcher, {
      api: COGNITO_API_BASE_URL,
      url: `/login`,
      method: 'POST',
      body: { userName, password },
      headers: COGNITO_HEADERS
    })

    if (loginDetails) {
      const loginIdentity = deserializeIdToken(loginDetails)
      if (
        (loginType === 'CLIENT' && !!loginIdentity.clientId) ||
        (loginType === 'DEVELOPER' && !!loginIdentity.developerId) ||
        (loginType === 'ADMIN' && !!loginIdentity.adminId)
      ) {
        const detailsWithLoginType = { ...loginDetails, loginType, userName, loginIdentity } as LoginSession
        yield call(setLoginSession, detailsWithLoginType)
        yield put(authLoginSuccess(detailsWithLoginType))
      } else {
        yield put(authLoginFailure())
      }
    } else {
      yield put(authLoginFailure())
    }
  } catch (err) {
    console.error(err.message)
    yield put(authLoginFailure())
  }
}

export const doLogout = function*({ data }: Action<LoginType>) {
  try {
    yield removeLoginSession()
    yield put(authLogoutSuccess())
    yield history.push(data !== 'ADMIN' ? Routes.LOGIN : Routes.ADMIN_LOGIN)
  } catch (err) {
    console.error(err.message)
  }
}

export const loginListen = function*() {
  yield takeLatest(ActionTypes.AUTH_LOGIN, doLogin)
}

export const logoutListen = function*() {
  yield takeLatest(ActionTypes.AUTH_LOGOUT, doLogout)
}

const authSaga = function*() {
  yield all([loginListen(), logoutListen()])
}

export default authSaga