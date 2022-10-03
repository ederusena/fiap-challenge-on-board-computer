<script setup>
import Navbar from "./components/Navbar.vue"
import GoogleMaps from "./components/GoogleMaps.vue";
import PanelLights from "./components/PanelLights.vue";
</script>

<template>
  <div class="container-fluid vh-100">
    <!-- Row -->
    <div class="row justify-content-center vh-100">
      <!-- This div takes 3 out of
                12 columns in the grid -->
      <div class="col-5" style="background-color: #d1d1d1">
        <PanelLights />
        <img class="model-car" src="./assets/image/prisma-removebg-preview.png" alt="tesla" />
      </div>
      <!--This column takes 9 out of 12
            columns available-->
      <div class="col-7" style="background-color: #f1f1f5">
        <GoogleMaps />
      </div>
    </div>
  </div>
  <navbar />

</template>

<style scoped>
.model-car {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 40%;
}
</style>

