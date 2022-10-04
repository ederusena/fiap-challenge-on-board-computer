<template>
  <div class="d-flex offcanvas-body small">
    <nav class="navbar navbar-light bg-light">
      <form class="form-inline">
        <OpenDoor />

        <LightHandle />

        <a
          @click="handleMessageToast('Luzes de neblina')"
          class="navbar-brand"
          href="#"
        >
          <mdicon size="40" name="CarLightFog" />
        </a>

        <a
          @click="handleMessageToast('Luzes principais')"
          class="navbar-brand"
          href="#"
        >
          <mdicon size="40" name="CarLightDimmed" />
        </a>
        <a
          @click="handleMessageToast('Luzes de avisos')"
          class="navbar-brand"
          href="#"
        >
          <mdicon size="40" name="HazardLights" />
        </a>
      </form>
    </nav>
  </div>
</template>

<script setup lang="ts">
import OpenDoor from "./apps/OpenDoor.vue";
import LightHandle from "./apps/LightHandle.vue";

import { useToast } from "vue-toastification";
const toast = useToast();

const handleMessageToast = (value) => {
  toast.success(value, {
    timeout: 2000,
  });
};
</script>

<style scoped></style>
