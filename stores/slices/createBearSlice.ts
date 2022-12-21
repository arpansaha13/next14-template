import { type StateCreator } from 'zustand'
import type { StoreType } from '../store.types'

export interface BearSlice {
  bears: number
  addBear: () => void
  eatFish: () => void
}

export const createBearSlice: StateCreator<StoreType, [], [], BearSlice> = set => ({
  bears: 0,
  addBear: () => set(state => ({ bears: state.bears + 1 })),
  eatFish: () => set(state => ({ fishes: state.fishes - 1 })),
})
