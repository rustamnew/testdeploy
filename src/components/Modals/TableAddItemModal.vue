<script setup>
import {useTableStore} from '../../stores/tableItems'
import {useModalStore} from '../../stores/modal'
import DateInput from '../Inputs/DateInput.vue'
import SelectInput from '../Inputs/SelectInput.vue'
import TextareaInput from '../Inputs/TextareaInput.vue'
</script>

<template>
    <div class="modal" v-if="modalStore.active_modal=='tableAddItem'">

        <div class="modal-content">
            <div class="modal-title">Добавить запись</div>

            <div class="inputs">
                <div class="row">
                    <div class="field-name">Дата и время</div>
                    <div class="field-value">
                        <DateInput
                        @updateValue="updateValue($event, 'date')" />
                    </div>
                    
                </div>

                <div class="row">
                    <div class="field-name">Статус</div>
                    <div class="field-value">
                        <SelectInput
                        @updateValue="updateValue($event, 'status')"
                        :options_id="'status'"
                        :input_type="'status'"/>
                    </div>
                    
                </div>

                <div class="row">
                    <div class="field-name">Название учебного модуля</div>
                    <div class="field-value">
                        <TextareaInput 
                        @updateValue="updateValue($event, 'module')"
                        />
                    </div>
                    
                </div>

                <div class="row">
                    <div class="field-name">Тип сессии</div>
                    <div class="field-value">
                        <SelectInput 
                        @updateValue="updateValue($event, 'type')"
                        :options_id="'type'"/>
                    </div>
                    
                </div>

                <div class="row">
                    <div class="field-name">Комната</div>
                    <div class="field-value">
                        <SelectInput 
                        @updateValue="updateValue($event, 'room')"
                        :multiple="true" 
                        minWidth="260px"
                        :options_id="'room'"/>
                    </div>
                    
                </div>

                <div class="row">
                    <div class="field-name">Группа</div>
                    <div class="field-value">
                        <SelectInput 
                        @updateValue="updateValue($event, 'group')"
                        :options_id="'group'"/>
                    </div>
                    
                </div>

                <div class="row">
                    
                    <button class="modal-submit" @click="submitModal()">Добавить</button>
                    
                    
                </div>
                    
            </div>
        </div>

        <button class="modal-close" @click="closeModal()">x</button>
    </div>
    
</template>

<script>
    export default {
        data() {
            let tableStore = useTableStore()



            let modalStore = useModalStore()
            let fields_value = {
                date: [],
                status: [
                    {name: 'Запланировано', color: '#AFBFF5'}
                ],
                module: '',
                type: [],
                room: [],
                group: [],
            }
            let default_value = fields_value
            return {
                tableStore,
                modalStore,
                fields_value,
                default_value,
                active: false
            }
        },

        methods: {
            submitModal() {

                this.tableStore.addItem(this.fields_value)
                this.restoreDefault()
                this.modalStore.closeModal()
            },
            closeModal() {
                this.modalStore.closeModal()
            },
            updateValue(event, field) {

                if (event.obj.length) {
                    this.fields_value[field] = event.obj
                } else if (field == 'status') {
                    this.fields_value[field] = event.obj
                } else if (typeof event.obj == 'string') {
                    this.fields_value[field] = event.obj
                } else {
                    this.fields_value[field].push(event.obj)
                }
                
            },
            restoreDefault() {
                this.fields_value = this.default_value
            }
        }
    }
</script>

