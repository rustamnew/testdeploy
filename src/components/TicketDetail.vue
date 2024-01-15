<script setup>
import { useTicketStore } from "stores/ticket";

const props = defineProps({
  ticketId: String,
});
</script>

<template>
  <div class="q-pa-md row items-start q-gutter-md fit">
    <q-card class="my-card bg-blue text-white fit">
      <q-card-section v-if="ticketInfo">
        <div class="text-h4">{{ ticketInfo.title }}</div>
        <div class="text-h6">{{ ticketInfo.date }}</div>
        <div class="text-subtitle1">{{ ticketInfo.author }}</div>
        <div class="text-subtitle1">{{ ticketInfo.description }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TicketDetail",
  computed: {
    ticketInfo() {
      const ticketStore = useTicketStore();
      if (!ticketStore.tickets.length) {
        ticketStore.fetchTickets();
      }

      return ticketStore.getById(this.ticketId);
    },
  },
});
</script>
