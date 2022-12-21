import create from 'zustand'
import { createFishSlice } from './slices/createFishSlice'
import { createBearSlice } from './slices/createBearSlice'

import type { StoreType } from './store.types'

export const useStore = create<StoreType>()((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
}))
