import developerReducer, { defaultState } from '../developer'
import { ActionType } from '../../types/core'
import ActionTypes from '../../constants/action-types'
import { billing } from '@/sagas/__stubs__/billing'
import { monthlyBillingData } from '@/sagas/__stubs__/monthly-billing'

describe('developer reducer', () => {
  it('should return default state if action not matched', () => {
    const newState = developerReducer(undefined, { type: 'UNKNOWN' as ActionType, data: undefined })
    expect(newState).toEqual(defaultState)
  })

  it('should set formState when DEVELOPER_SET_FORM_STATE is called', () => {
    const newState = developerReducer(undefined, {
      type: ActionTypes.DEVELOPER_SET_FORM_STATE as ActionType,
      data: 'SUCCESS',
    })
    const expected = {
      ...defaultState,
      formState: 'SUCCESS',
    }
    expect(newState).toEqual(expected)
  })

  it('should set formState when DEVELOPER_SHOW_MODAL is called', () => {
    const newState = developerReducer(undefined, {
      type: ActionTypes.DEVELOPER_SHOW_MODAL as ActionType,
      data: true,
    })
    const expected = {
      ...defaultState,
      isVisible: true,
    }
    expect(newState).toEqual(expected)
  })

  it('should set isServiceChartLoading when call DEVELOPER_FETCH_BILLING is called', () => {
    const newState = developerReducer(undefined, {
      type: ActionTypes.DEVELOPER_FETCH_BILLING as ActionType,
      data: null,
    })
    const expected = {
      ...defaultState,
      isServiceChartLoading: true,
    }
    expect(newState).toEqual(expected)
  })

  it('should set billing and isServiceChartLoading when call DEVELOPER_FETCH_BILLING_SUCCESS is called', () => {
    const newState = developerReducer(undefined, {
      type: ActionTypes.DEVELOPER_FETCH_BILLING_SUCCESS as ActionType,
      data: billing,
    })
    const expected = {
      ...defaultState,
      isServiceChartLoading: false,
      billing: billing,
    }
    expect(newState).toEqual(expected)
  })

  it('should set fetchBillingFailure when call DEVELOPER_FETCH_BILLING_FAILED is called', () => {
    const newState = developerReducer(undefined, {
      type: ActionTypes.DEVELOPER_FETCH_BILLING_FAILED as ActionType,
      data: 'error',
    })
    const expected = {
      ...defaultState,
      isServiceChartLoading: false,
      error: 'error',
    }
    expect(newState).toEqual(expected)
  })

  it('should set fetchMonthlyBillingFailure when call DEVELOPER_FETCH_MONTHLY_BILLING_FAILED is called', () => {
    const newState = developerReducer(undefined, {
      type: ActionTypes.DEVELOPER_FETCH_MONTHLY_BILLING_FAILED as ActionType,
      data: null,
    })
    const expected = {
      ...defaultState,
      isMonthlyBillingLoading: false,
    }
    expect(newState).toEqual(expected)
  })

  it('should set fetchMonthlyBilling when call DEVELOPER_FETCH_MONTHLY_BILLING is called', () => {
    const newState = developerReducer(undefined, {
      type: ActionTypes.DEVELOPER_FETCH_MONTHLY_BILLING as ActionType,
      data: null,
    })
    const expected = {
      ...defaultState,
      isMonthlyBillingLoading: true,
    }
    expect(newState).toEqual(expected)
  })
  it('should set fetchMonthlyBillingSuccess when call DEVELOPER_FETCH_MONTHLY_BILLING_SUCCESS is called', () => {
    const newState = developerReducer(undefined, {
      type: ActionTypes.DEVELOPER_FETCH_MONTHLY_BILLING_SUCCESS as ActionType,
      data: monthlyBillingData,
    })
    const expected = {
      ...defaultState,
      monthlyBilling: monthlyBillingData,
      isMonthlyBillingLoading: false,
    }
    expect(newState).toEqual(expected)
  })
  it('should set developerSetWebhookPingStatus when call DEVELOPER_SET_PING_WEBHOOK_STATUS is called', () => {
    const newState = developerReducer(undefined, {
      type: ActionTypes.DEVELOPER_SET_PING_WEBHOOK_STATUS as ActionType,
      data: 'SUCCESS',
    })
    const expected = {
      ...defaultState,
      webhookPingTestStatus: 'SUCCESS',
    }
    expect(newState).toEqual(expected)
  })
})
