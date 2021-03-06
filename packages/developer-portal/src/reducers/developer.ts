import { Action, FormState } from '../types/core'
import { isType } from '../utils/actions'
import {
  developerSetFormState,
  setMyIdentity,
  fetchBilling,
  fetchBillingSuccess,
  fetchBillingFailure,
  fetchMonthlyBilling,
  fetchMonthlyBillingSuccess,
  fetchMonthlyBillingFailure,
  developerSetWebhookPingStatus,
} from '@/actions/developer'
import {
  DeveloperModel,
  AppDetailModel,
  BillingBreakdownForMonthV2Model,
  BillingOverviewForPeriodV2Model,
} from '@reapit/foundations-ts-definitions'
import { developerAppShowModal } from '@/actions/developer-app-modal'

export type RequestByPeriod = {
  period: string
  periodStart: string
  periodEnd: string
  periodName: string
  requestCount: number
  endpointCount: number
  netAmount: number
  grossAmount: number
  vatAmount: number
}

export type Billing = {
  from: string
  to: string
  requestsByPeriod: RequestByPeriod[]
}

export type WebhookPingTestStatus = 'SUCCESS' | 'FAILED' | 'LOADING' | null

export interface DeveloperState {
  loading: boolean
  formState: FormState
  isVisible: boolean
  myIdentity: DeveloperModel | null
  billing: BillingOverviewForPeriodV2Model | null
  isServiceChartLoading: boolean
  error: unknown
  isMonthlyBillingLoading: boolean
  monthlyBilling: BillingBreakdownForMonthV2Model | null
  webhookPingTestStatus: WebhookPingTestStatus
}

export type AppDetailData = (AppDetailModel & { apiKey?: string }) | null

export const defaultState: DeveloperState = {
  loading: false,
  formState: 'PENDING',
  isVisible: false,
  myIdentity: null,
  billing: null,
  isServiceChartLoading: false,
  error: null,
  isMonthlyBillingLoading: false,
  monthlyBilling: null,
  webhookPingTestStatus: null,
}

const developerReducer = (state: DeveloperState = defaultState, action: Action<any>): DeveloperState => {
  if (isType(action, developerSetFormState)) {
    return {
      ...state,
      formState: action.data,
    }
  }

  if (isType(action, developerAppShowModal)) {
    return {
      ...state,
      isVisible: action.data,
    }
  }

  if (isType(action, setMyIdentity)) {
    return {
      ...state,
      myIdentity: action.data || null,
    }
  }

  if (isType(action, fetchBilling)) {
    return {
      ...state,
      isServiceChartLoading: true,
    }
  }

  if (isType(action, fetchBillingSuccess)) {
    return {
      ...state,
      billing: action.data,
      isServiceChartLoading: false,
    }
  }

  if (isType(action, fetchMonthlyBilling)) {
    return {
      ...state,
      isMonthlyBillingLoading: true,
    }
  }

  if (isType(action, developerSetWebhookPingStatus)) {
    return {
      ...state,
      webhookPingTestStatus: action.data,
    }
  }

  if (isType(action, fetchMonthlyBillingSuccess)) {
    return {
      ...state,
      isMonthlyBillingLoading: false,
      monthlyBilling: action.data || null,
    }
  }

  if (isType(action, fetchBillingFailure)) {
    return {
      ...state,
      isServiceChartLoading: false,
      error: action.data,
    }
  }

  if (isType(action, fetchMonthlyBillingFailure)) {
    return {
      ...state,
      isMonthlyBillingLoading: false,
    }
  }

  return state
}

export default developerReducer
