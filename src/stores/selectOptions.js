import { defineStore } from 'pinia'

import selectOptions from '../json/selectOptions.json'

export const useSelectStore = defineStore('select', {

    state: () => {
        return {
            select_options: false,
        }
    },

    actions: {
        getSelectOptions() {
            this.select_options = selectOptions
        },
    },


})