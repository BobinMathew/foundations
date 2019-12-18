import { StringMap } from '../types/core'

export const CONTACTS_HEADERS = {
  'Content-Type': 'application/json'
} as StringMap

export const COGNITO_HEADERS = {
  'Content-Type': 'application/json'
} as StringMap

export const URLS = {
  idChecks: '/identitychecks',
  contacts: '/contacts',
  configuration: '/configuration'
}
