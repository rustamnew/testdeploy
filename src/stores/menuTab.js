import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuTabStore = defineStore('menu', {

    state: () => {
        
        return {
            menuTabStore: useMenuTabStore(),
            tab: 'Учебные сессии'
        }
    },

    actions: {



    },


})