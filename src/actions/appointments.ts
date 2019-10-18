import { actionCreator } from '../utils/actions'
import ActionTypes from '../constants/action-types'
import { AppointmentsData, AppointmentsTime } from '../reducers/appointments'
import { AppointmentModel } from '@/types/appointments'

export interface AppointmentRequestParams {
  time: AppointmentsTime
}

export const appointmentsRequestData = actionCreator<AppointmentRequestParams>(ActionTypes.APPOINTMENTS_REQUEST_DATA)
export const appointmentsRequestDataFailure = actionCreator<void>(ActionTypes.APPOINTMENTS_REQUEST_FAILURE)
export const appointmentsLoading = actionCreator<boolean>(ActionTypes.APPOINTMENTS_LOADING)
export const appointmentsReceiveData = actionCreator<AppointmentsData>(ActionTypes.APPOINTMENTS_RECEIVE_DATA)
export const appointmentsClearData = actionCreator<null>(ActionTypes.APPOINTMENTS_CLEAR_DATA)
export const setSelectedAppointment = actionCreator<AppointmentModel | null>(ActionTypes.SET_SELECTED_APPOINTMENT)