import authReducer, { defaultState } from '../auth'
import { ActionType } from '../../types/core'
import ActionTypes from '../../constants/action-types'
import { LoginType } from '@reapit/elements'

describe('auth reducer', () => {
  it('should return default state if action not matched', () => {
    const newState = authReducer(undefined, { type: 'UNKNOWN' as ActionType, data: undefined })
    expect(newState).toEqual(defaultState())
  })

  it('should reset the state to default when AUTH_LOGIN action is called', () => {
    const newState = authReducer(undefined, { type: ActionTypes.AUTH_LOGIN as ActionType, data: undefined })
    const expected = defaultState()
    expect(newState).toEqual(expected)
  })

  it('should set isLogin to true when AUTH_LOGIN_SUCCESS action is called', () => {
    const data = {
      loginType: 'CLIENT' as LoginType,
      userName: 'bob@acme.com',
      accessToken: '',
      refreshToken: '',
      sessionExpiry: 1
    }
    const newState = authReducer(undefined, { type: ActionTypes.AUTH_LOGIN_SUCCESS as ActionType, data })
    const expected = { ...defaultState(), isLogin: true, loginSession: data }
    expect(newState).toEqual(expected)
  })

  it('should set error to false when AUTH_LOGIN_FAILURE action is called', () => {
    const newState = authReducer(undefined, { type: ActionTypes.AUTH_LOGIN_FAILURE as ActionType, data: undefined })
    const expected = { ...defaultState(), error: true }
    expect(newState).toEqual(expected)
  })

  it('should reset the state to default when AUTH_LOGOUT_SUCCESS action is called', () => {
    const newState = authReducer(undefined, { type: ActionTypes.AUTH_LOGOUT_SUCCESS as ActionType, data: undefined })
    const expected = defaultState()
    expect(newState).toEqual(expected)
  })

  it('should update the loginType state when the AUTH_CHANGE_LOGIN_TYPE action is called', () => {
    const newState = authReducer(undefined, {
      type: ActionTypes.AUTH_CHANGE_LOGIN_TYPE as ActionType,
      data: 'DEVELOPER'
    })
    const expected = {
      ...defaultState(),
      loginType: 'DEVELOPER'
    }
    expect(newState).toEqual(expected)
  })

  it('should set the desktopSession state when the AUTH_SET_DESKTOP_SESSION is called', () => {
    const data = {
      loginType: 'CLIENT' as LoginType,
      refreshToken: 'REFRESH_TOKEN',
      userName: 'bob@acme.com'
    }
    const newState = authReducer(undefined, { type: ActionTypes.AUTH_SET_DESKTOP_SESSION as ActionType, data })
    expect(newState.desktopSession).toEqual(data)
  })
})