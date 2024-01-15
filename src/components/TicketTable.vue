<script setup>
import { useTicketStore } from "stores/ticket";

const ticketStore = useTicketStore();
</script>

<template>
  <div class="q-pa-md row items-start q-gutter-md fit">
    <q-table
      title="Тикеты"
      :rows="ticketStore.tickets"
      :filter="search"
      :columns="columns"
      row-key="name"
      class="fit"
    >
      <template v-slot:top-right>
        <q-input dense label="Поиск" color="primary" v-model="search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">
            {{ props.row.id }}
          </q-td>
          <q-td key="title" :props="props">
            {{ props.row.title }}
          </q-td>
          <q-td key="author" :props="props">
            <q-btn unelevated :label="props.row.author" to="/profile" />
          </q-td>
          <q-td key="date" :props="props">
            {{ props.row.date }}
          </q-td>
          <q-td key="description" :props="props">
            {{ limitText(props.row.description, 20) }}
          </q-td>
          <q-td key="description" :props="props">
            <q-btn label="Подробнее" :to="`/tickets/${props.row.id}`" />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { defineComponent } from "vue";

const columns = [
  {
    name: "id",
    label: "Id",
    field: "id",
    align: "left",
    sortable: true,
  },
  {
    name: "title",
    label: "Заголовок",
    field: "title",
    align: "left",
    sortable: true,
  },
  {
    name: "author",
    label: "Автор",
    field: "author",
    align: "left",
    sortable: true,
  },
  {
    name: "date",
    label: "Дата",
    field: "date",
    align: "left",
    sortable: true,
  },
  {
    name: "description",
    label: "Описание",
    field: "description",
    align: "left",
    sortable: true,
  },
  {
    name: "",
    label: "",
    field: "",
    align: "left",
  },
];
export default defineComponent({
  name: "TicketTable",
  setup() {
    return {
      columns,
    };
  },
  data() {
    return {
      search: "",
    };
  },

  created() {
    const ticketStore = useTicketStore();
    ticketStore.fetchTickets();
  },
  methods: {
    limitText(text, length) {
      if (!text) return "";
      text = text.toString();

      if (text.length <= length) {
        return text;
      }
      return text.substr(0, length) + "...";
    },
  },
});
</script>
