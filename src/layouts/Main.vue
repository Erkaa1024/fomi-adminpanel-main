<template>
    <navbar></navbar>
    <div class="content-wrap">
        <body-header></body-header>
        <div class="content-body light">
            <router-view />
        </div>
    </div>
</template>

<script>
    import bodyHeader from './bodyHeader.vue'
    import Navbar from './NavMenu.vue'

    export default {
        name: "main-body",
        components: {
            bodyHeader,
            Navbar
        }
    }
</script>

<style lang="scss" scoped>
    .content-wrap {
        position: fixed;
        right: 0;
        bottom: 0;
        width: calc(100% - 260px);
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;

        .content-body {
            position: relative;
            display: table;
            background-color: #F4F6F9;
            color: #000;
            width: 100%;
            min-height: calc(100% - 56px);
            overflow-x: hidden;
        }
    }

    @media (max-width: 1023px) {
    // @media (max-width: 767px) {
        .content-wrap {
            width: calc(100% - 80px);
        }
    }
</style>