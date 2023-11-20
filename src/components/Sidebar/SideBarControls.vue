<script setup>
import SelectInput from '../Inputs/SelectInput.vue'
import LogoutIcon from '../../assets/icons/LogoutIcon.svg'
</script>

<template>
    <div class="controls">
        <button class="logout">
            <LogoutIcon />

            <span>Выйти</span>
        </button>

        <div class="lang-switcher">
            <SelectInput :input_type="'language'" :options_id="'language'" :default_value="{name: 'Русский'}"/>
        </div>
    </div>
</template>

