import { writable } from 'svelte/store'
import { ThemeBookingClasses } from '../../../../common/styles/types'

export const themeStore = writable<ThemeBookingClasses | null>({
  globalStyles: '',
  primaryHeading: '',
  secondaryHeading: '',
  primaryStrapline: '',
  secondaryStrapline: '',
  selectedItem: '',
  bodyText: '',
  featureButton: '',
  button: '',
  input: '',
  resultItem: '',
  searchBox: '',
  offerBanner: '',
  pagination: '',
  paginationActive: '',
  formError: '',
  timeCell: '',
  svgNavigation: '',
  timeCellsContainer: '',
  dateCellHeader: '',
  formBlock: '',
  formInput: '',
  formHeader: '',
  formLabel: '',
  formSeparator: '',
  formButtonPrimary: '',
  formButtonSecondary: '',
  featureLabel: '',
})
