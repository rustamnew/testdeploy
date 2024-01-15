<script setup>
import LoginPanel from "components/LoginPanel.vue";
</script>

<template>
  <q-page class="flex flex-center">
    <LoginPanel />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginPage",
});
</script>
