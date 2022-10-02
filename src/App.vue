<script setup>
import Navbar from "./components/Navbar.vue"
import GoogleMaps from "./components/GoogleMaps.vue";
</script>

<template>
    <div class="container-fluid vh-100">
        <!-- Row -->
        <div class="row justify-content-center vh-100">
            <!-- This div takes 3 out of
                12 columns in the grid -->
            <div class="col-5" style="background-color: #d1d1d1">
             ae
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
