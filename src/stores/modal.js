import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {

    state: () => {
        
        return {
            modalStore: useModalStore(),
            active_modal: ''
        }
    },

    actions: {
        activateModal(modal) {
            this.active_modal = modal
        },
        closeModal() {
            this.active_modal = ''
        }

    },


})