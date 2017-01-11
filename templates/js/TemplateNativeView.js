import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'

const DFPBannerAd = requireNativeComponent('{{template}}', null)

type Props = {|
  exampleProp: any
|}

class {{template}}View extends Component {
  props: Props

  render (): React.Element<any> {
    return <{{template}} {...this.props} />
  }
}

{{template}}View.propTypes = {
  exampleProp: React.PropTypes.any
}

export default {{template}}View
