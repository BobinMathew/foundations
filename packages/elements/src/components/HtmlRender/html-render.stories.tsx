import React from 'react'
import { storiesOf } from '@storybook/react'
import { HTMLRender } from '.'
import { Section } from '@/components/Layout'

const html = `
    <h1>heading h1</h1>
    <h2>heading h2</h2>
    <b>Bold with entities&nbsp;</b>
    <div>
        <b>bold</b>
    </div>
    <div><i>italic</i></div>
    <div><u>underline</u></div>
    <pre>pre tag</pre>
    <strike>strike</strike>
    <p><a href="http://google.com">Link</a></p>
    <div>
        <ul>
            <li>bullet points</li>
            <li>bullet points</li>
        </ul>
    </div>
`

storiesOf('HTMLRender', module).add('Usage', () => (
  <Section hasPadding={true} style={{ background: '#f5f7f9' }}>
    <HTMLRender html={html} />
  </Section>
))
