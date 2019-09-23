import React, { Fragment } from 'react'
import { Formik, Form } from 'formik'
import { CreateIdentityDocumentModel } from '@/types/contact-api-schema'
import { Button, Input, FileInput, DatePicker } from '@reapit/elements'
import bulma from '@/styles/vendor/bulma'
import SelectIdentity from '../inputs/select-identity'

export type IdentificationFormValues = {
  idType: string
  idRef: string
  expiredDate?: Date
  filePaths?: Array<string>
}

export type IdentificationProps = {
  title: string
  data: CreateIdentityDocumentModel
  loading: boolean
  onSaveHandler: () => void
  onNextHandler: () => void
  onPrevHandler: () => void
}

export const initialFormValues = {
  idType: '',
  idRef: '',
  expiredDate: undefined,
  filePaths: undefined
}

export const renderFormHandler = ({ loading, onNextHandler, onPrevHandler }) => (
  <Form>
    <SelectIdentity id="idType" name="idType" labelText="ID Type" />
    <Input id="idRef" name="idRef" type="text" placeholder="ID Reference" labelText="ID Reference" />
    <DatePicker id="expiredDate" name="expiredDate" labelText="Expired Date" />
    <FileInput id="filePaths" name="filePaths" labelText="Upload File/Take a Pic" />

    <div className="flex justify-between mt-4">
      <div className="flex items-center">
        <span>RPS Ref:</span>
        <span className="ml-1">MS1039475</span>
      </div>

      <div>
        <Button className="mr-2" variant="primary" type="submit" loading={loading}>
          Submit
        </Button>
        <Button className="mr-2" variant="primary" type="button" onClick={onNextHandler} disabled={loading}>
          Next
        </Button>
        <Button variant="primary" type="button" onClick={onPrevHandler} disabled={loading}>
          Previous
        </Button>
      </div>
    </div>
  </Form>
)

export const onSubmitHandler = (values, onSaveHandler) => onSaveHandler(values)

export const Identification: React.FC<IdentificationProps> = ({
  title,
  loading,
  onSaveHandler,
  onNextHandler,
  onPrevHandler
}) => {
  const { subtitle } = bulma
  const initialValues = initialFormValues

  return (
    <Fragment>
      <h3 className={subtitle}>{title}</h3>

      <Formik
        initialValues={initialValues}
        onSubmit={(values: IdentificationFormValues) => onSubmitHandler(values, onSaveHandler)}
        render={() => renderFormHandler({ loading, onNextHandler, onPrevHandler })}
      />
    </Fragment>
  )
}

export default Identification