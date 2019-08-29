import { fetcher } from '@reapit/elements'
import { URLS, MARKETPLACE_HEADERS, REAPIT_API_BASE_URL } from '../constants/api'
import { submitRevisionSetFormState } from '../actions/submit-revision'
import { put, fork, all, call, takeLatest, select } from '@redux-saga/core/effects'
import ActionTypes from '../constants/action-types'
import { Action, ReduxState } from '../types/core'
import { errorThrownServer } from '../actions/error'
import errorMessages from '../constants/error-messages'
import { CreateAppRevisionModel } from '@/types/marketplace-api-schema'
import { appDetailRequestData } from '@/actions/app-detail'

export const submitRevision = function*({ data }: Action<CreateAppRevisionModel & { id: string }>) {
  yield put(submitRevisionSetFormState('SUBMITTING'))
  try {
    const { id, ...body } = data
    const regResponse: true | undefined = yield call(fetcher, {
      url: `${URLS.apps}/${id}/revisions`,
      api: REAPIT_API_BASE_URL,
      method: 'POST',
      body,
      headers: MARKETPLACE_HEADERS
    })
    const status = regResponse ? 'SUCCESS' : 'ERROR'
    if (status === 'SUCCESS') {
      yield put(appDetailRequestData({ id }))
    }
    yield put(submitRevisionSetFormState(status))
  } catch (err) {
    console.error(err.message)
    yield put(
      errorThrownServer({
        type: 'SERVER',
        message: errorMessages.DEFAULT_SERVER_ERROR
      })
    )
    yield put(submitRevisionSetFormState('ERROR'))
  }
}

export const submitRevisionDataListen = function*() {
  yield takeLatest<Action<CreateAppRevisionModel & { id: string }>>(
    ActionTypes.DEVELOPER_SUBMIT_REVISION,
    submitRevision
  )
}

export const submitRevisionSagas = function*() {
  yield all([fork(submitRevisionDataListen)])
}

export default submitRevisionSagas