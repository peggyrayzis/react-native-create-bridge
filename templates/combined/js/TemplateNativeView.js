//  Created by react-native-create-bridge

import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'

const {{template}} = requireNativeComponent('{{template}}', {{template}}View)

export default class {{template}}View extends Component {
  render () {
    return <{{template}} {...this.props} />
  }
}

{{template}}View.propTypes = {
  exampleProp: React.PropTypes.any
}
