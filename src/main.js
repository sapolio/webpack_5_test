import ClapprCore, { Loader } from '@clappr/core'
import { Plugins, Vendor } from '@clappr/plugins'
import HLS from '@clappr/hlsjs-playback'

for (let plugin of Object.values(Plugins))
  Loader.registerPlugin(plugin)
Loader.registerPlayback(HLS)

export default {
  ...ClapprCore,
  ...Plugins,
  Vendor,
  HLS
}
