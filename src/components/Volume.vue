<template>
    <a class="navbar-brand" href="#">
        <mdicon  size="50" @click="decrement" name="ChevronLeft" />
        <strong class="display-6">{{ volume }}</strong>
        <mdicon size="50"  @click="increment" name="ChevronRight" />
    </a>
</template>

<script setup>
import { ref } from 'vue';

const volume = ref(0);

const increment = () => {
    if (volume.value < 100) {
        volume.value++;
    }
}

const decrement = () => {
    if (volume.value > 0) {
        volume.value--;
    }
}

</script>

<style lang="scss" scoped>

</style>