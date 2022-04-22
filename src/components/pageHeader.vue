<template>
    <div class="page-header">
        <p class="page-title">
            Dashboard
        </p>

        <div class="bread">
            <breadCrumb />
        </div>
    </div>
</template>

<script>
import breadCrumb from './breadCrumb.vue'

export default {
    name: "page-header",
    components: {
        breadCrumb
    }
}
</script>

<style lang="scss" scoped>
.page-header{
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    p{
        margin: 0;
    }

    .page-title{
        font-size: 130%;
        display: inline-block;
    }

    .bread{
        float: right;
    }
}
</style>