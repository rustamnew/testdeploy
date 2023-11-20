<script setup>
    import { ref } from 'vue';
    import SearchIcon from '../../assets/icons/SearchIcon.svg'

    import { useTableStore } from '../../stores/tableItems';
</script>

<template>
    <div class="search">
        <SearchIcon />
        <input type="text" placeholder="Поиск" v-model="search" @keyup="searchInTable()"/>
    </div>
    
    
</template>

<script>
    export default {
        
        data() {
            let search = ref()
            let tableStore = useTableStore()

            return {
                search,
                tableStore
            }
        },
        setup() {

        },
        mounted() {
            
        },
        methods: {
            searchInTable() {
                if (this.search !== '') {
                    this.tableStore.search('module', this.search)
                } else {
                    this.tableStore.clearSearch()
                }
            }
        }
    }
    
</script>

