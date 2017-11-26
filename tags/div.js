import {createVnode} from './createVnode'

export const div = (props, children) => createVnode('div')(props, children)
