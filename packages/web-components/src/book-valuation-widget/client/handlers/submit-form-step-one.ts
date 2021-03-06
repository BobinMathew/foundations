import { get } from 'svelte/store'
import { FormOneDataStore, formOneStore } from '../core/store/form-store'
import { validateEmail } from '../utils/validator'

export const handleSubmitFormStepOne = (handleNextStep: () => void) => () => {
  const formDataStore: FormOneDataStore = get(formOneStore)
  const validObj = validateFormStepOne(formDataStore)
  formOneStore.update((prev: FormOneDataStore) => {
    const { lookingFor: prevLookingFor, email: prevEmail, postCode: prevPostCode } = prev
    return {
      lookingFor: { ...prevLookingFor, valid: validObj.lookingFor },
      email: { ...prevEmail, valid: validObj.email },
      postCode: { ...prevPostCode, valid: validObj.postCode },
    }
  })
  if (Object.values(validObj).every(fieldIsValid => fieldIsValid) && typeof handleNextStep === 'function') {
    handleNextStep()
  }
}

export const validateFormStepOne = (
  formDataStore: FormOneDataStore,
): { email: boolean; postCode: boolean; lookingFor: boolean } => {
  const email = validateEmail(formDataStore.email.value)
  // TODO PostCode valid format validation
  const postCode = !!formDataStore.postCode.value
  const lookingFor = ['sell', 'let'].includes(formDataStore.lookingFor.value)
  return {
    email,
    postCode,
    lookingFor,
  }
}
