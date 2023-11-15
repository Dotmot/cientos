import { useLogger } from '@tresjs/core'
import { DirectionalLightHelper, PointLightHelper, SpotLightHelper, HemisphereLightHelper } from 'three'
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js'

const { logWarning } = useLogger()

export const vLightHelper = {
  mounted: (el: any) => {
    if (!el.isLight) {
      logWarning(`${el.type} is not a light`)
      return
    }
    currentHelper = helpers[el.type]
    el.parent.add(new currentHelper(el))
  },
  updated: (el: any) => {
    currentInstance = el.parent.children.find((child: any) => child instanceof currentHelper)
    if (currentInstance instanceof RectAreaLightHelper) return
    currentInstance.update()

  },
  unmounted: (el: any) => {
    if (!el.isLight) {
      logWarning(`${el.type} is not a light`)
      return
    }
    currentInstance = el.parent.children.find((child: any) => child instanceof currentHelper)
    currentInstance.dispose()
    el.parent.remove(currentInstance)
  },
}
let currentHelper: any
let currentInstance: any
const helpers = {
  DirectionalLight: DirectionalLightHelper,
  PointLight: PointLightHelper,
  SpotLight: SpotLightHelper,
  HemisphereLight: HemisphereLightHelper,
  RectAreaLight: RectAreaLightHelper,
}
