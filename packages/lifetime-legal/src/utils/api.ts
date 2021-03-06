import { getAccessToken } from './session'
import { CONTACTS_HEADERS, API_VERSION } from '../constants/api'

export const initAuthorizedRequestHeaders = async () => ({
  ...CONTACTS_HEADERS,
  Authorization: `Bearer ${await getAccessToken()}`,
  'api-version': API_VERSION,
})
