import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

const storage = useStorage('config')

export const useConfigStore = defineStore('config', {
    state: () => {
        return {
            config: {
                todoAddForm: true
            },
        }
    },

    actions: {
        loadData() {
            if (storage.value) {
                this.config = JSON.parse(storage.value)
            }
        },
        saveData() {
            storage.value = JSON.stringify(this.config) 
        }
    }
})
