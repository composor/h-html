import {createVnode} from './createVnode'

export const tr = (props, children) => createVnode('tr')(props, children)
