<script setup>
import TableRow from './TableRow.vue'
import TableHeader from './TableHeader.vue'

import {useTableStore} from '../../stores/tableItems'
import TablePagination from './TablePagination.vue';


let tableStore = useTableStore()
if (!tableStore.pages_loaded) {
    tableStore.getPages()
}
</script>


<template>
    <TableHeader />

    <div class="table-wrapper">
        <table cellspacing="0">
            <thead>
                <tr>
                    <th @click="sortColumn($event,'date')"><span >Дата и время</span></th>
                    <th @click="sortColumn($event,'status')"><span >Статус</span></th>
                    <th @click="sortColumn($event,'module')"><span >Название учебного модуля</span></th>
                    <th @click="sortColumn($event,'type')"><span >Тип сессии</span></th>
                    <th @click="sortColumn($event,'room')"><span >Комната</span></th>
                    <th @click="sortColumn($event,'group')"><span >Группа</span></th>
                </tr>
            </thead>

            <tbody v-if="tableStore.search_filtered_rows">
                <TableRow 
                    v-for="item in tableStore.search_filtered_rows"

                    :date="item.date"
                    :status="item.status"
                    :module="item.module"
                    :type="item.type"
                    :room="item.room"
                    :group="item.group"
                />
            </tbody>
            
            <tbody v-else>
                <TableRow 
                    v-for="item in tableStore.pages[tableStore.current_page]"
                    :id="item.id"
                    :date="item.date"
                    :status="item.status"
                    :module="item.module"
                    :type="item.type"
                    :room="item.room"
                    :group="item.group"
                />
            </tbody>
        </table>

        
    </div>
    
    <TablePagination/>
</template>

<script>
    export default {
        data() {
            let tableStore = useTableStore()

            return {
                tableStore,
            }
        },

        mounted() {

        },
        methods: {
            sortColumn(event, field_type) {
                //Поджимает время поэтому решил использовать querySelector
                document.querySelectorAll('th.sorting').forEach( (item) => {
                    item.classList.remove('sorting')
                })

                let target
                if (event.target.nodeName !== 'TH') {
                    target = event.target.closest('th')
                } else {
                    target = event.target
                }
                target.classList.add('sorting')

                if (this.tableStore.sort_desc) {
                    target.classList.add('sort-reversed')
                } else {
                    target.classList.remove('sort-reversed')
                }

                this.tableStore.sort(field_type)
            }
        }
    }
</script>

