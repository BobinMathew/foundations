import * as React from 'react'
import { H3, Section, SubTitleH5 } from '@reapit/elements'
import ErrorBoundary from '@/components/hocs/error-boundary'
import { connect } from 'react-redux'
import { AuthenticatedState } from '@/reducers/authenticated'
import { ReduxState } from '@/types/core'

export interface AuthenticatedMappedActions { }

export interface AuthenticatedMappedProps {
  authenticatedState: AuthenticatedState
}

export type AuthenticatedProps = AuthenticatedMappedActions & AuthenticatedMappedProps

export const Authenticated: React.FunctionComponent<AuthenticatedProps> = () => {
  return (
    <ErrorBoundary>
      <Section>
        <H3>Welcome To Reapit Foundations</H3>
        <SubTitleH5>You are now authenticated against our sandbox data</SubTitleH5>
      </Section>
    </ErrorBoundary>
  )
}

export const mapStateToProps = (state: ReduxState): AuthenticatedMappedProps => ({
  authenticatedState: state.authenticated,
})

export const mapDispatchToProps = (): AuthenticatedMappedActions => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Authenticated)
