<template>
    <div class="header">
        <div class="menuBtns">
            <router-link to="/dashboard">Dashboard</router-link>
        </div>

        <div class="right">
            <div class="search">
                <notification />
                <message />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bodyHeader",
    }
</script>

<style lang="scss" scoped>
    .header {
        position: relative;
        z-index: 100;
        height: 56px;
        width: 100%;
        background-color: #fff;
        padding: 1rem;
        color: #7F7F7F;
        display: flex;
        align-items: center;
        box-shadow: 0 0 2px 1px #DFDFDF;
        z-index: 10000;

        .menuBtns {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            i {
                margin-right: 1rem;
            }

            a {
                margin: 0;
                color: inherit;
                text-decoration: none;
            }
        }
    }
</style>