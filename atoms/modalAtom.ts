import { DocumentData } from 'firebase/firestore'
import { atom } from 'recoil'
import { Show } from '../typings'

export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const movieState = atom<Show | DocumentData | null | undefined>({
  key: 'movieState',
  default: null,
})