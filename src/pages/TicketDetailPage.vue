<script setup>
import TicketDetail from "components/TicketDetail.vue";
</script>

<template>
  <q-page class="flex flex-center column">
    <h1>Тикет</h1>

    <TicketDetail v-if="ticketId" :ticketId="ticketId" />

    <q-btn label="Назад" to="/tickets" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TicketDetailPage",
  computed: {
    ticketId() {
      if (this.$route.params.ticketId) {
        return this.$route.params.ticketId;
      } else {
        return false;
      }
    },
  },
});
</script>
