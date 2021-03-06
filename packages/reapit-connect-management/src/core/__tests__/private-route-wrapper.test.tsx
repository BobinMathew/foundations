import * as React from 'react'
import { shallow } from 'enzyme'
import * as ReactRouterDom from 'react-router-dom'
import { PrivateRouteWrapper } from '../private-route-wrapper'

const locationMock = { pathname: '/test' }

jest.mock('react-router', () => ({
  ...(jest.requireActual('react-router') as typeof ReactRouterDom),
  useLocation: jest.fn(() => locationMock),
}))

jest.mock('@reapit/connect-session', () => ({
  ReapitConnectBrowserSession: jest.fn(),
  useReapitConnect: () => ({
    connectSession: {
      loginIdentity: {
        groups: ['OrganisationAdmin'],
      },
    },
    connectInternalRedirect: '',
  }),
}))

describe('PrivateRouter', () => {
  it('should match a snapshot', () => {
    expect(shallow(<PrivateRouteWrapper />)).toMatchSnapshot()
  })
})
