import { deleteAsync } from 'del'

import { path } from '../../config/index.js'

export const clean = () => {
  return deleteAsync([path.distFolder])
}
