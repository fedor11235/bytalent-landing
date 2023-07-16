import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', {
  state: (): HomeStore => ({
    uploadProject: false,
    popupOrder: false,
    secondPage: false,
  })
})

type HomeStore = {
  uploadProject: boolean
  popupOrder: boolean
  secondPage: boolean
}
