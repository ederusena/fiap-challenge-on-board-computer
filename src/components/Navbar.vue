<template>
  <nav class="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
      <a  @click="handleMessageToast('Carro Ligando!')" class="navbar-brand" href="#">
        <mdicon size="40" name="car" />
      </a>

      <Volume />

      <a  @click="handleMessageToast('Calendário Aberto!')" class="navbar-brand" href="#">
        <mdicon size="40" name="calendar" />
      </a>
      <div class="d-flex">
        <a
          class="navbar-brand"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
        >
          <mdicon size="40" name="menu" />
        </a>
      </div>
      <a  @click="handleMessageToast('Spotify tocando!')" class="navbar-brand" href="#">
        <mdicon size="40" color="green" name="spotify" />
      </a>
      <a  @click="handleMessageToast('lista de Mensagens!')" class="navbar-brand" href="#">
        <mdicon size="40" name="message" />
      </a>

      <a  @click="handleMessageToast('Ajuste de Volume!')" class="navbar-brand" href="#">
        <mdicon size="40" name="volume-high" />
      </a>
    </div>
  </nav>

  <div
    class="offcanvas offcanvas-bottom"
    tabindex="-1"
    id="offcanvasBottom"
    aria-labelledby="offcanvasBottomLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasBottomLabel">Aplicativos</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <Aplicativos />
  </div>
</template>

<script setup>
import Volume from "./Volume.vue";
import Aplicativos from "./Aplicativos.vue";

import { useToast } from "vue-toastification";
const toast = useToast();

const handleMessageToast = (value) => {
    toast.success(value, {
      timeout: 2000,
    });
};


</script>

<style lang="scss" scoped></style>
