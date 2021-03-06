import { ReapitConnectBrowserSession } from '@reapit/connect-session'

// Needs to be a singleton as the class is stateful
export const reapitConnectBrowserSession = new ReapitConnectBrowserSession({
  connectClientId: window.reapit.config.connectClientId,
  connectOAuthUrl: window.reapit.config.connectOAuthUrl,
  connectLoginRedirectPath: '/installed',
  connectUserPoolId: window.reapit.config.connectUserPoolId,
})
