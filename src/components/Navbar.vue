<template>
  <nav class="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <mdicon size="40" name="car" />
      </a>

      <Volume />

      <a class="navbar-brand" href="#">
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
      <a class="navbar-brand" href="#">
        <mdicon size="40" color="green" name="spotify" />
      </a>
      <a class="navbar-brand" href="#">
        <mdicon size="40" name="message" />
      </a>

      <a class="navbar-brand" href="#">
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

  <div
    class="modal fade"
    id="openDoor"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Abrir portão!</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">Deseja realmente abrir o portão?</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Não
          </button>
          <button
            type="button"
            data-bs-dismiss="modal"
            @click="confirmarPortao"
            class="btn btn-primary"
          >
            Abrir portão
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Volume from "./Volume.vue";
import Aplicativos from "./Aplicativos.vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const confirmarPortao = () => {
  toast.success("My toast content", {
    timeout: 2000,
  });
};
</script>

<style lang="scss" scoped></style>
