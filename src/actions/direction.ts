import { actionCreator } from '@/utils/actions'
import ActionTypes from '@/constants/action-types'
import { AppointmentModel } from '@/types/appointments'

export const setDestination = actionCreator<AppointmentModel | null>(ActionTypes.SET_DESTINATION)