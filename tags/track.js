import {createVnode} from './createVnode'

export const track = (props, children) => createVnode('track')(props, children)
