<script setup>
const linksList = [
  {
    title: "Главная",
    icon: "la la-home",
    link: "/",
  },
  {
    title: "Профиль",
    icon: "la la-user",
    link: "/profile",
  },
  {
    title: "Тикеты",
    icon: "la la-file-alt",
    link: "/tickets",
  },
];
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer()"
        />

        <q-toolbar-title> Тестовое задание </q-toolbar-title>
      </q-toolbar>

      <q-toolbar>
        <Breadcrumbs />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list class="flex column">
        <q-item-label header> Меню </q-item-label>

        <q-item
          clickable
          v-ripple
          v-for="link in linksList"
          :to="link.link"
          :key="link.title"
        >
          <q-item-section avatar top>
            <q-avatar :icon="link.icon" color="primary" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">{{ link.title }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-btn
          padding
          class="q-mt-md q-mx-auto"
          unelevated
          color="primary"
          label="Выйти"
          @click="logout()"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

import { useUserStore } from "stores/user";
import { useTicketStore } from "stores/ticket";

import Breadcrumbs from "components/Breadcrumbs.vue";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
    };
  },

  methods: {
    logout() {
      const userStore = useUserStore();
      const ticketStore = useTicketStore();

      userStore.clearData();
      ticketStore.clearData();

      this.$router.replace("/login");
    },
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },
});
</script>

<style>
h1 {
  font-size: 5rem;
}
</style>
