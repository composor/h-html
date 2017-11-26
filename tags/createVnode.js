import { h } from "composi"

export const createVnode = tag => (props, children) => {
  return typeof props === "object" && !Array.isArray(props)
    ? h(tag, props, children)
    : h(tag, {}, props)
}
