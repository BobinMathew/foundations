import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'
import { helpGuideContent } from './__styles__/styles'

export const FADE_TIMEOUT = 1000

export type FadeProps = {
  in: boolean
  timeout?: number
  children: React.ReactNode[] | React.ReactNode
} & CSSTransitionProps

export const Fade: React.FC<FadeProps> = (props: FadeProps) => {
  const nodeRef = React.useRef(null)
  return (
    <div className={helpGuideContent}>
      <CSSTransition classNames="fade" {...props} nodeRef={nodeRef}>
        <div ref={nodeRef}>{props.children}</div>
      </CSSTransition>
    </div>
  )
}
const defaultProps = {
  in: false,
  timeout: FADE_TIMEOUT,
}

Fade.defaultProps = defaultProps

export default Fade
