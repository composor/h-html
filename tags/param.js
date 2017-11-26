import {createVnode} from './createVnode'

export const param = (props, children) => createVnode('param')(props, children)
