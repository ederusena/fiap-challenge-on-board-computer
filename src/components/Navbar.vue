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
            <a class="navbar-brand" href="#">
                <mdicon size="40" name="menu" /> 
            </a>
            <a class="navbar-brand" href="#">
                <mdicon size="40" color="green" name="spotify" /> 
            </a>
            <a class="navbar-brand" href="#">
                <mdicon size="40" name="message" /> 
            </a>
            <Volume />
            <a class="navbar-brand" href="#">
                <mdicon size="40" name="volume-high" /> 
            </a>
        </div>
    </nav>
</template>

<script setup>
import Volume from './Volume.vue';

</script>

<style lang="scss" scoped>

</style>