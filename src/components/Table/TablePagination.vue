<script setup>

import {useTableStore} from '../../stores/tableItems'

import ArrowIcon from '../../assets/icons/ArrowIcon.svg'
</script>



<template>
    <div class="table-pagination" v-if="!tableStore.search_filtered_rows">
        
        <button class="page prev"><ArrowIcon /></button>
        
        <button 
            v-for="page in pages"
            :data-page="page[0]" 
            class="page" 
            :class="page[0] == tableStore.current_page ? 'active' :''" 
            @click="setPage($event)">{{ page[0] }}
        </button>

        <button class="page next"><ArrowIcon /></button>

    </div>
</template>


<script>
    export default {
        data() {
            let tableStore = useTableStore()
            let pages = []


            return {
                tableStore, 
                pages
            }
        },

        beforeMount() {
            if (!this.tableStore.pages_loaded) {
                this.tableStore.getPages()
            }
            this.pages = Object.entries(this.tableStore.pages)

        },

        methods: {
            setPage(event) {
                let page = event.target.dataset.page
                this.tableStore.current_page = page
                this.tableStore.setPage(page)

                this.$emit('updatePage', {
                    value: page,
                })
            }
        }
    }
</script>
