import { Action } from '@/types/core'
import { isType } from '@/utils/actions'
import {
  fetchApps,
  fetchAppsSuccess,
  fetchAppsFailed,
  fetchAppsInfiniteSuccess,
  fetchDeveloperApps,
} from '@/actions/apps'
import { AppSummaryModelPagedResult, AppSummaryModel } from '@reapit/foundations-ts-definitions'
import { mergeAppsWithoutDuplicateId } from '@/utils/browse-app'
import { fetchDeveloperAppsSuccess } from '../../actions/apps/apps'

export type AppsListState = AppSummaryModelPagedResult & {
  isLoading: boolean
  isLoadingDeveloper: boolean
  errorMessage: string
  developerApps: AppSummaryModel[]
}

export const defaultAppsListState: AppsListState = {
  data: [],
  pageNumber: 0,
  pageSize: 0,
  pageCount: 0,
  totalCount: 0,
  isLoading: false,
  isLoadingDeveloper: false,
  errorMessage: '',
  developerApps: [],
}

export const appsListReducer = (state: AppsListState = defaultAppsListState, action: Action<any>): AppsListState => {
  if (isType(action, fetchApps)) {
    return {
      ...state,
      data: action.data.isInfinite && action.data.pageNumber && action.data.pageNumber > 1 ? state.data : [],
      isLoading: true,
      errorMessage: '',
    }
  }

  if (isType(action, fetchDeveloperApps)) {
    return {
      ...state,
      errorMessage: '',
      isLoadingDeveloper: true,
    }
  }

  if (isType(action, fetchAppsSuccess)) {
    return {
      ...state,
      ...action.data,
      isLoading: false,
      errorMessage: '',
    }
  }

  if (isType(action, fetchAppsFailed)) {
    return {
      ...state,
      isLoading: false,
      errorMessage: action.data,
    }
  }

  if (isType(action, fetchDeveloperAppsSuccess)) {
    const {
      data: { data: developerApps },
    } = action

    const { data: oldAppsList } = state

    const uniqueAppsList = mergeAppsWithoutDuplicateId(developerApps || [], oldAppsList, [])
    return {
      ...state,
      data: uniqueAppsList,
      isLoadingDeveloper: false,
      developerApps: action.data.data || [],
    }
  }

  if (isType(action, fetchAppsInfiniteSuccess)) {
    const {
      data: { data: newAppsList, ...rest },
    } = action

    const { data: oldAppsList, developerApps } = state

    const uniqueAppsList = mergeAppsWithoutDuplicateId(developerApps, oldAppsList, newAppsList)

    return {
      ...state,
      ...rest,
      data: uniqueAppsList,
      isLoading: false,
      errorMessage: '',
    }
  }

  return state
}
