<template>
    <div class="d-flex flex-column">
        <a class="navbar-brand" href="#">
            <mdicon size="40" name="CarLightFog" />
        </a>
        <a class="navbar-brand" href="#">
            <mdicon class="icons-on" size="40" name="CarLightDimmed" />
        </a>
        <a class="navbar-brand" href="#">
            <mdicon class="icons-off" size="40" name="HazardLights" />
        </a>
    </div>
</template>

<script setup>

</script>

<style scoped>
.icons-on {
    color: var(--bs-success);
}

.icons-off {
    color: var(--bs-danger);
}
</style>