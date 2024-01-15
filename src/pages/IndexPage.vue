<script setup>
import TicketTable from "components/TicketTable.vue";
</script>

<template>
  <q-page class="flex flex-center">
    <h1>Главная</h1>

    <TicketTable />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
