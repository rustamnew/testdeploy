

<script setup>
import VueMultiselect from 'vue-multiselect'

import FlagIcon from '../../assets/icons/FlagIcon.svg'
import ArrowDownIcon from '../../assets/icons/ArrowDownIcon.svg'

import { useSelectStore } from '../../stores/selectOptions';
</script>

<template>

    <div class="status" v-if="input_type == 'status'">
        <VueMultiselect 
        v-model="value" 
        :options="options" 
        :searchable="false"
        @update:model-value="updateSelected($event)" 

        placeholder = ''
        selectLabel = ''
        selectedLabel = ''
        deselectLabel = ''>


            <template v-slot:singleLabel="{ option }" v-if="value.name && value.color">
                <div class="multiselect-single-label" :style="'background-color: '+ value.color">
                    {{ option.name }}
                </div>
            </template>
            <template v-slot:singleLabel="{ option }" v-else-if="!value.title">
                <div class="multiselect-single-label" :style="'background-color: '+ option.color">
                    {{ option.name }}
                </div>
            </template>


            <template v-slot:option="{ option }">
                <div class="multiselect__option-custom">
                    {{ option.name }}
                </div>
            </template>

        </VueMultiselect>
    </div>

    <div class="language-select" v-else-if="input_type == 'language'">
        <VueMultiselect 
        v-model="value" 
        :options="options" 
        :searchable="false"
        @update:model-value="updateSelected($event)" 

        placeholder = ''
        selectLabel = ''
        selectedLabel = ''
        deselectLabel = ''>

            <template v-slot:singleLabel="{ option }">
                <div class="option-wrap">
                    <FlagIcon class="option-svg"/>

                    <div class="multiselect-single-label" :style="'background-color: '+ option.color">
                        {{ option.name }}
                    </div>
                </div>
                
                
            </template>

            <template v-slot:option="{ option }">
                <div class="multiselect__option-custom">
                    <FlagIcon class="option-svg"/>
                    {{ option.name }}
                </div>
                    
                
            </template>

        </VueMultiselect>
    </div>

    <div class="simple-select" v-else-if="!input_type" :class="transparent ? 'transparent' : ''" :style="`min-width: ${minWidth}`">
        <VueMultiselect 
        v-model="value" 
        :options="options" 
        :multiple="multiple" 
        :hide-selected="multiple ? true : false"
        :track-by="'name'"
        :searchable="false"
        @update:model-value="updateSelected($event)" 

        placeholder = ''
        selectLabel = ''
        selectedLabel = ''
        deselectLabel = ''>

            <template v-slot:tag="{ option }">
                <div class="multiselect-tag" v-if="option.name !== ''">
                    {{ option.name }}
                </div>
            </template>

            <template v-slot:singleLabel="{ option }">
                <div class="multiselect-single-label">
                    {{ option.name }}
                </div>
            </template>

            <template v-slot:option="{ option }">
                <div class="multiselect__option-custom">
                    {{ option.name }}
                </div>
            </template>

        </VueMultiselect>
    </div>
    
</template>

<script>
    export default {
        components: {
            VueMultiselect
        },
        props: {
            input_type: String,
            default_value: Object,
            multiple: Boolean,
            minWidth: String,
            options_id: String,
            transparent: Boolean
        },
        data() {
            let selectStore = useSelectStore()

            if (!selectStore.select_options) {
                selectStore.getSelectOptions()
            }

            let options = []
            for (let i = 0; i < selectStore.select_options.length; i++) {
                if (selectStore.select_options[i].id == this.options_id) {
                    options = selectStore.select_options[i].options        
                }
            }

            let value = {}

            if (this.default_value) {
                value = this.default_value
            }

            if (this.input_type == 'status') {
                if (!this.default_value) {
                    value = options[0]
                }
            }

            if (this.multiple && !this.default_value) {
                value = []
            }

            return {
                value,
                options

            }
        },
        setup() {

        },
        beforeMount() {
            

        },
        mounted() {


        },
        watch: { 
            default_value: function(newVal, oldVal) { 
                this.value = newVal
            }
        },
        methods: {
            updateSelected(obj) {  
                this.$emit('updateValue', {
                    obj: obj,
                })   
            }
        }
    }
    
</script>