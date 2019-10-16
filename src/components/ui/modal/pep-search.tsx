import React from 'react'
import { Formik, Form } from 'formik'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { FaSpinner, FaRegTimesCircle } from 'react-icons/fa'
import { oc } from 'ts-optchain'
import { Input, Button } from '@reapit/elements'
import { ReduxState } from '@/types/core'
import dayjs from 'dayjs'
import styles from '@/styles/pages/checklist-detail.scss?mod'
import {
  checkListDetailShowModal,
  checkListDetailSearchPep,
  checkListDetailHideModal
} from '@/actions/checklist-detail'
import { STEPS } from './modal'

export const renderLoading = () => {
  return (
    <div className={styles.pepSearchLoading}>
      <div>
        <FaSpinner />
      </div>
      <div>Please wait ...</div>
    </div>
  )
}

export const renderNoResult = name => {
  const currentDateTime = dayjs().format('DD MMMM YY HH:mmA')
  return (
    <div className="ml-8">
      <div>Results</div>
      <div className={styles.noResultContainer}>
        <div className="mr-8">
          <FaRegTimesCircle />
        </div>
        <div>
          No Result Found for '{name}'. Search conducted for '{name}' on {currentDateTime}
        </div>
      </div>
    </div>
  )
}

export const renderForm = ({
  onPrevHandler,
  onNextHandler,
  isSubmitting,
  pepSearchResultData,
  pepSearchParam
}) => () => {
  return (
    <Form>
      <div className={styles.pepSearchInputContainer}>
        <Input type="text" name="name" id="name" labelText="Enter a name" />
        <Button type="submit" variant="primary" className="mt-3">
          Search
        </Button>
      </div>
      {isSubmitting ? renderLoading() : null}
      {pepSearchResultData && pepSearchResultData.length === 0 ? renderNoResult(pepSearchParam) : null}
      <div className="flex justify-end">
        <Button
          disabled={isSubmitting}
          type="button"
          variant="primary"
          className="mr-2"
          dataTest="prev-btn"
          onClick={onPrevHandler}
        >
          Prev
        </Button>
        <Button disabled={isSubmitting} type="button" variant="primary" dataTest="next-btn" onClick={onNextHandler}>
          Finish
        </Button>
      </div>
    </Form>
  )
}

export type PepSearchProps = StateProps & DispatchProps

export const PepSearch: React.FC<PepSearchProps> = ({
  handleSubmit,
  onPrevHandler,
  onNextHandler,
  isSubmitting,
  pepSearchResultData,
  pepSearchParam
}) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: pepSearchParam
        }}
        onSubmit={handleSubmit}
        render={renderForm({ onPrevHandler, onNextHandler, isSubmitting, pepSearchResultData, pepSearchParam })}
      />
    </div>
  )
}

export type StateProps = {
  isSubmitting: boolean
  pepSearchResultData: any
  pepSearchParam: string
}

export type OwnProps = {
  id: string
}

export const mapStateToProps = (state: ReduxState) => {
  return {
    isSubmitting: oc(state).checklistDetail.isSubmitting(false),
    pepSearchResultData: oc(state).checklistDetail.pepSearchResultData(null),
    pepSearchParam: oc(state).checklistDetail.pepSearchParam('')
  }
}

export type DispatchProps = {
  handleSubmit: (values: any) => void
  onNextHandler: () => void
  onPrevHandler: () => void
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleSubmit: values => {
      dispatch(checkListDetailSearchPep(values.name))
    },
    onPrevHandler: () => dispatch(checkListDetailShowModal(STEPS.DECLARATION_RISK_MANAGEMENT)),
    onNextHandler: () => dispatch(checkListDetailHideModal())
  }
}

const PepSearchWithRedux = connect<StateProps, DispatchProps, OwnProps, ReduxState>(
  mapStateToProps,
  mapDispatchToProps
)(PepSearch)

PepSearchWithRedux.displayName = 'PepSearchWithRedux'

export default PepSearchWithRedux