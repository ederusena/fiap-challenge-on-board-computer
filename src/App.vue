<template>
  <div class="container-fluid vh-100">
    <!-- Row -->
    <div class="row justify-content-center vh-100">
      <div class="col-5" style="background-color: #d1d1d1">
        <PanelLights />
        <img
          class="model-car"
          src="./assets/image/prisma-removebg-preview.png"
          alt="tesla"
        />
      </div>
      <div class="col-7" style="background-color: #f1f1f5">
        <GoogleMaps />
      </div>
    </div>
  </div>
  <navbar />
  <ModalOpenDoor />
  <ModalLightHandle />
</template>

<script setup>
  import Navbar from "./components/Navbar.vue";
  import GoogleMaps from "./components/GoogleMaps.vue";
  import PanelLights from "./components/PanelLights.vue";
  import ModalOpenDoor from "./components/modals/ModalOpenDoor.vue";
  import ModalLightHandle from "./components/modals/ModalLightHandle.vue";
  </script>

<style scoped>
.model-car {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 40%;
}
</style>
