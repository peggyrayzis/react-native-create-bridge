//  Created by react-native-create-bridge

import { NativeModules } from 'react-native'

const { {{template}} } = NativeModules

export default {
  exampleMethod () {
    return {{template}}.exampleMethod()
  },

  EXAMPLE_CONSTANT: {{template}}.EXAMPLE_CONSTANT
}
