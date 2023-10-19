import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', {

    state: () => {
        
        return {
            state: true,
            callback: 0,
            //callback: () => {},

        }
    },

    actions: {
        showConfirmDialog(callback) {
            this.callback = callback
            this.state = true
        }
    }
})