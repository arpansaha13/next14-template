import { type FishSlice } from './slices/createFishSlice'
import { type BearSlice } from './slices/createBearSlice'

export interface StoreType extends BearSlice, FishSlice {}
