import Routes from '@/constants/routes'
import api from '../fixtures/routes'

const SettingsMetaData = {
  url: Routes.SETTINGS,
  selectors: {
    companyName: 'input[data-test="company-name"]',
    fullName: 'input[data-test="name"]',
    jobTitle: 'input[data-test="job-title"]',
    telephone: 'input[data-test="telephone"]',
    submitButton: 'button[type="submit"][data-test="save-changes"]',
  },
  apiRoute: `${api.developers}/**`,
}

const SettingsAppPage = {
  ...SettingsMetaData,
}

export default SettingsAppPage
