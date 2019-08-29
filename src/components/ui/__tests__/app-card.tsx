import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AppCard, { AppCardProps } from '../app-card'

const props: AppCardProps = {
  app: {
    id: '09043eb8-9e5e-4650-b7f1-f0cb62699027',
    developerId: '28c9ea52-7f73-4814-9e00-4e3714b8adeb',
    name: 'test',
    summary:
      'nXXT2zaK807ysWgy8F0WEhIYRP3TgosAtfuiLtQCImoSx0kynxbIF0nkGHU36Oz13kM3DG0Bcsicr8L6eWFKLBg4axlmiOEWcvwHAbBP9LRvoFkCl58k1wjhOExnpaZItEyOT1AXVKv8PE44aMGtVz',
    developer: "Pete's Proptech World Ltd",
    homePage: 'http://google.com/abc',
    iconUri: 'https://reapit-app-store-app-media.s3.eu-west-2.amazonaws.com/d10e790c-2bf2-40ae-9c43-82c1534bde31.png',
    links: [
      {
        rel: 'self',
        href: 'http://platformdemo.reapit.net/marketplace/apps/09043eb8-9e5e-4650-b7f1-f0cb62699027',
        action: 'GET'
      },
      {
        rel: 'developer',
        href: 'http://platformdemo.reapit.net/marketplace/developers/28c9ea52-7f73-4814-9e00-4e3714b8adeb',
        action: 'GET'
      }
    ]
  }
}

describe('AppCard', () => {
  it('should match a snapshot', () => {
    expect(toJson(shallow(<AppCard {...props} />))).toMatchSnapshot()
  })
})

describe('Should allow pass custom CSS classes', () => {
  it('should match a snapshot', () => {
    const wrapper = shallow(<AppCard {...props} className="addition css className" />)
    expect(wrapper.find('.addition.css.className')).toHaveLength(1)
  })
})