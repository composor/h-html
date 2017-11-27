import {h} from "./h"

export const createVnode = tag => (props, children) => {
  return undefined !== props && !props.apply && !Array.isArray(props)
    ? h(tag, props, children)
    : h(tag, {}, props)
}
