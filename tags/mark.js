import {createVnode} from './createVnode'

export const mark = (props, children) => createVnode('mark')(props, children)
