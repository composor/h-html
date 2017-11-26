import {createVnode} from './createVnode'

export const button = (props, children) => createVnode('button')(props, children)
