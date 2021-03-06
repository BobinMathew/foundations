import * as React from 'react'
import { mount } from 'enzyme'
import Accounts from '../accounts'
import { MessageProvider } from '../../../../context/message-context'

jest.mock('@reapit/connect-session', () => ({
  ReapitConnectBrowserSession: jest.fn(),
  useReapitConnect: () => ({
    connectSession: {
      loginIdentity: {
        developerId: 'SOME_ID',
      },
    },
  }),
}))

describe('Accounts', () => {
  it('should match a snapshot', () => {
    expect(
      mount(
        <MessageProvider>
          <Accounts />
        </MessageProvider>,
      ),
    ).toMatchSnapshot()
  })
})
