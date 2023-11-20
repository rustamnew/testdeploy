import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import tableRows from '../json/tableRows.json'

export const useTableStore = defineStore('table', {

    state: () => {
        return {
            tableStore: useTableStore(),
            items: tableRows,
            rows_per_page: 10,
            pages: {},
            index_start: 0,
            current_page: 1,
            current_page_items: [],
            pages_loaded: false,
            search_filtered_rows: false,
            sort_desc: false
        }
    },

    actions: {
        getPages() {
            let array = [];
            this.items.forEach( (item) => array.push(item) )

            let pages_count = Math.ceil(array.length / this.rows_per_page)
            
            for (let i = 1; i <= pages_count; i++) {
                let page_rows = array.splice(this.index_start, this.rows_per_page)

                this.pages[i] = page_rows

            }
            this.setPage(this.current_page)
        },
        search(type, string) {
            this.search_filtered_rows = this.items.filter( (item) => {
                
                let text = item[type].toLowerCase()
                let search_string = string.toLowerCase()

                return text.includes(search_string)
            })

        },
        clearSearch() {
            this.search_filtered_rows = false
        },
        setPage(page) {
            this.current_page = page
            this.current_page_items = this.tableStore.pages[this.tableStore.current_page]
        },
        addItem(obj) {
            obj.id = this.items.length
            this.items.push(obj)
            this.getPages()

        },

        sort(field, desc) {
            desc = this.sort_desc
            
            this.current_page_items.sort( function (a, b) {
                let a_string = ''

                if (typeof a[field] == 'string') {
                    a_string = a[field]
                } else {
                    a[field].forEach((item) => {
                        if (item.name) {
                            a_string += item.name
                        } else {
                            a_string += item.toString()
                        }
                        
                    })
                }
                

                let b_string = ''
                if (typeof b[field] == 'string') {
                    b_string = b[field]
                } else {
                    b[field].forEach((item) => {
                        if (item.name) {
                            b_string += item.name
                        } else {
                            b_string += item.toString()
                        }
                    })
                }
                
                if (desc == true) {
                    if (a_string < b_string) {
                        return 1
                    }
                    if (a_string > b_string) {
                        return -1
                    } 
                    if (a_string == b_string) {
                        return 0
                    }
                } else {
                    if (a_string > b_string) {
                        return 1
                    }
                    if (a_string < b_string) {
                        return -1
                    } 
                    if (a_string == b_string) {
                        return 0
                    }
                }  
            })
            if (this.sort_desc == true) {
                this.sort_desc = false
            } else {
                this.sort_desc = true
            }
        }
        
    },


})