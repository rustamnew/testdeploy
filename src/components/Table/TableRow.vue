<script setup>
import DateInput from '../Inputs/DateInput.vue'
import SelectInput from '../Inputs/SelectInput.vue'
import TextareaInput from '../Inputs/TextareaInput.vue'

</script>

<template>
    <tr :row_id="id">
        <td>
            <DateInput 
                :transparent="true"
                :date="date"/>
        </td>
        <td>
            <SelectInput 
                :default_value="status" 
                :options_id="'status'"
                :input_type="'status'"/>
        </td>
        <td>
            <TextareaInput 
                :transparent="true"
                :text="module"/>
        </td>
        <td>
            <SelectInput 
                :options_id="'type'"
                :transparent="true"
                :default_value="type"/>
        </td>
        <td>
            <SelectInput 
                :multiple="true" 
                :transparent="true"
                minWidth="260px"
                :options_id="'room'"
                :default_value="room"/>
        </td>
        <td>
            <SelectInput 
            :options_id="'group'"
            :transparent="true"
            :default_value="group"/>
        </td>
    </tr>
    
</template>

<script>
    export default {
        props: {
            id: Number,
            date: Array,
            status: Array,
            module: String,
            type: Array,
            room: Array,
            group: Array,
        },

        data() {
            return {
                
            }
        },

        mounted() {
            
        }
    }
    
</script>
