import { STEPS } from '@/components/ui/modal/modal'
import { Action } from '../types/core'
import { isType } from '../utils/actions'
import {
  checklistDetailLoading,
  checklistDetailReceiveData,
  checkListDetailShowModal,
  checkListDetailHideModal,
  checkListDetailSubmitForm,
  pepSearchResult
} from '../actions/checklist-detail'
import { ContactModel } from '@/types/contact-api-schema'
import {
  isCompletedProfile,
  isCompletedPrimaryID,
  isCompletedSecondaryID,
  isCompletedDeclarationRisk,
  isCompletedAddress
} from '@reapit/elements'

export interface SectionsStatus {
  profile: boolean
  primaryId: boolean
  secondaryId: boolean
  declarationRisk: boolean
  addresses: boolean
  pepSearch: boolean
  experian: boolean
  report: boolean
}

export interface ChecklistDetailState {
  loading: boolean
  isModalVisible: boolean
  modalContentType: string
  checklistDetailData: {
    contact: ContactModel
  } | null
  pepSearchParam: string
  // TODO will replace any when integrate API with pepSearchData
  pepSearchResultData: any[] | null
  isSubmitting: boolean
  status: SectionsStatus
}

export const defaultStatus = {
  profile: false,
  primaryId: false,
  secondaryId: false,
  declarationRisk: false,
  addresses: false,
  pepSearch: false,
  experian: true,
  report: false
}

export const defaultState: ChecklistDetailState = {
  loading: false,
  isModalVisible: false,
  checklistDetailData: null,
  modalContentType: STEPS.PROFILE,
  isSubmitting: false,
  pepSearchParam: '',
  pepSearchResultData: null,
  status: defaultStatus
}

const checklistReducer = (state: ChecklistDetailState = defaultState, action: Action<any>): ChecklistDetailState => {
  if (isType(action, checklistDetailLoading)) {
    return {
      ...state,
      loading: action.data
    }
  }

  if (isType(action, checklistDetailReceiveData)) {
    return {
      ...state,
      loading: false,
      checklistDetailData: action.data,
      status: updateCheckListDetailFormStatus(action.data.contact)
    }
  }

  if (isType(action, checkListDetailShowModal)) {
    return {
      ...state,
      modalContentType: action.data,
      isModalVisible: true
    }
  }

  if (isType(action, checkListDetailHideModal)) {
    return {
      ...state,
      isModalVisible: false
    }
  }

  if (isType(action, checkListDetailSubmitForm)) {
    return {
      ...state,
      isSubmitting: action.data
    }
  }

  if (isType(action, pepSearchResult)) {
    return {
      ...state,
      pepSearchParam: action.data.searchParam,
      pepSearchResultData: action.data.searchResults
    }
  }

  return state
}

/**
 * help to calculate the isComplete status of the forms following the rule
 * TODO: will be implemented when have enough information
 * @param contactModel
 */
export const updateCheckListDetailFormStatus = (contact: ContactModel) => {
  const metadata = contact.metadata

  return {
    profile: metadata ? isCompletedProfile(contact) : false,
    primaryId: metadata ? isCompletedPrimaryID(contact) : false,
    secondaryId: metadata ? isCompletedSecondaryID(contact) : false,
    declarationRisk: metadata ? isCompletedDeclarationRisk(contact) : false,
    addresses: metadata ? isCompletedAddress(contact) : false,
    pepSearch: false,
    experian: true,
    report: false
  }
}

export default checklistReducer