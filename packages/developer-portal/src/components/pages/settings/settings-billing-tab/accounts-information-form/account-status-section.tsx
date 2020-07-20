import * as React from 'react'
import { GridItem, Input, Content } from '@reapit/elements'
import formFields from './form-schema/form-fields'

const { statusField } = formFields

type AccountStatusSectionProps = {
  initialStatus?: string
  isSubmittedDebit: boolean
  hasReapitAccountsRef: string
}

const AccountStatusSection: React.FC<AccountStatusSectionProps> = ({
  initialStatus,
  isSubmittedDebit,
  hasReapitAccountsRef,
}) => {
  const isPending = initialStatus === 'pending'

  // when get data from server, if status is pending and REAPIT ACCOUNTS REF is no, show general thank message
  const shouldThankInGeneral = isPending && hasReapitAccountsRef === 'no'

  // when user submit debit info in iframe -> show thank for setting up debit message
  const shouldThankSettingDebit = hasReapitAccountsRef === 'no' && isSubmittedDebit

  return (
    <GridItem>
      {shouldThankInGeneral && (
        <Content className="is-italic">
          Thank you for submitting your Account Information and setting up a Direct Debit, we just need to validate your
          information with our Accounts Department. One this has been completed your account will be set to ‘Active’ and
          you can procced with any subscriptions.
        </Content>
      )}

      {shouldThankSettingDebit && (
        <Content className="is-italic">
          Thank you for setting up a Direct Debit, to continue please click ‘Save’ below
        </Content>
      )}

      {/* hidden input to store "initialStatus" field */}
      <Input type="hidden" id={statusField.name} name={statusField.name} />

      <Content>
        <b>ACCOUNT STATUS:</b> <i>{initialStatus}</i>
      </Content>
    </GridItem>
  )
}

export default AccountStatusSection