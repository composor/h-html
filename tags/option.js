import {createVnode} from './createVnode'

export const option = (props, children) => createVnode('option')(props, children)
