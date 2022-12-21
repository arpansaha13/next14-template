import { type StateCreator } from 'zustand'
import type { StoreType } from '../store.types'

export interface FishSlice {
  fishes: number
  addFish: () => void
}

export const createFishSlice: StateCreator<StoreType, [], [], FishSlice> = set => ({
  fishes: 0,
  addFish: () => set(state => ({ fishes: state.fishes + 1 })),
})
