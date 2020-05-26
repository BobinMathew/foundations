import * as React from 'react'
import ErrorBoundary from '@/components/hocs/error-boundary'
import { FlexContainerBasic } from '@reapit/elements'

const ElementsPage: React.SFC = () => (
  <ErrorBoundary>
    <FlexContainerBasic flexColumn hasPadding isFullHeight>
      <FlexContainerBasic isFullHeight className="container">
        <iframe
          style={{ border: 'none', height: '100%' }}
          scrolling="no"
          src={window.reapit.config.elementDocumentUrl}
          width="100%"
          height="100%"
        />
      </FlexContainerBasic>
    </FlexContainerBasic>
  </ErrorBoundary>
)

export default ElementsPage
