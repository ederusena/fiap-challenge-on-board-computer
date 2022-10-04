<template>
  <div class="d-flex offcanvas-body small">
    <OpenDoor />

    <LightHandle />

    <a class="navbar-brand" href="#">
      <mdicon size="40" name="CarLightFog" />
    </a>

    <a class="navbar-brand" href="#">
      <mdicon size="40" name="CarLightDimmed" />
    </a>
    <a class="navbar-brand" href="#">
      <mdicon size="40" name="HazardLights" />
    </a>
  </div>
</template>

<script setup lang="ts">
import OpenDoor from "./apps/OpenDoor.vue";
import LightHandle from "./apps/LightHandle.vue";
</script>

<style scoped></style>
