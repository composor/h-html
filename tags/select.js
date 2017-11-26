import {createVnode} from './createVnode'

export const select = (props, children) => createVnode('select')(props, children)
