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
                <a class="navbar-brand" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                    aria-controls="offcanvasBottom">
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

    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasBottomLabel">Aplicativos</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="d-flex offcanvas-body small">
            <a class="navbar-brand" href="#">
                <mdicon  size="40" name="door" />
            </a>
            <a class="navbar-brand" href="#">
                <mdicon size="40" name="LightbulbOnOutlin" />
            </a>

            <a class="navbar-brand" href="#">
                <mdicon size="40" name="CarLightFog" />
            </a>

            <a class="navbar-brand" href="#">
                <mdicon size="40" name="CarLightDimmed" />
            </a>
            <a class="navbar-brand" href="#">
                <mdicon size="40" name="HazardLights" />
            </a>
        </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Volume from './Volume.vue';

</script>

<style lang="scss" scoped>

</style>