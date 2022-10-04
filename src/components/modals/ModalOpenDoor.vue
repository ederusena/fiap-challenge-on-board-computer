<template>
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
const doorStatus = ref(false);
const toast = useToast();

const messageHandle = computed (() => {
  if (doorStatus.value) {
    return  "Deseja Fechar o portão da garagem?";
  } else {
    return "Deseja Abrir o portão da garagem?";
  }
});

const confirmarPortao = () => {
  if (!doorStatus.value) {
    doorStatus.value = !doorStatus.value;
    toast.success("Portão abrindo!", {
      timeout: 2000,
    });
  } else {
    doorStatus.value = !doorStatus.value;
    toast.success("Portão fechando!", {
      timeout: 2000,
    });
  }
};
</script>