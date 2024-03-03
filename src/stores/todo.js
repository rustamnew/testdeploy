import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

const storage = useStorage('todo')

export const useTodoStore = defineStore('todo', {
    state: () => {
        return {
            items: [],
        }
    },

    actions: {
        loadData() {
            if (storage.value) {
                this.items = JSON.parse(storage.value)
            }
        },
        saveData() {
            storage.value = JSON.stringify(this.items) 
        },
        createItem() {
            const item = {
                title: '',
                text: '',
                steps: [],
            }
            this.items.push(item)
        },
        saveItem(item, index) {
            this.items[index] = item
            this.saveData()
        },
        removeItem(index) {
            this.items.splice(index, 1)
            this.saveData()
        }
    }
})
