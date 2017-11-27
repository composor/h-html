import {createVnode} from '../utils/createVnode'

export const select = (props, children) => createVnode('select')(props, children)
