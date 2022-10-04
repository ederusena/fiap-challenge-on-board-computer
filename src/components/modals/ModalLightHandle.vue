<template>
  <div
    class="modal fade"
    id="lightHandle"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Luzes garagem!
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">{{ messageHandle }}</div>
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
            Sim
          </button>
        </div>
      </div>
    </div>
  </div>
  s
</template>

<script setup lang="ts">
import { useToast } from "vue-toastification";
import { ref, computed } from "vue";
const lightStatus = ref(false);
const toast = useToast();

const messageHandle = computed (() => {
  if (lightStatus.value) {
    return  "Deseja desligar as luzes da garagem?";
  } else {
    return "Deseja ligar as luzes da garagem?";
  }
});

const confirmarPortao = () => {
  if (!lightStatus.value) {
    lightStatus.value = !lightStatus.value;
    toast.success("Luzes Ligadas!", {
      timeout: 2000,
    });
  } else {
    lightStatus.value = !lightStatus.value;
    toast.success("Luzes Desligadas!", {
      timeout: 2000,
    });
  }
};
</script>
