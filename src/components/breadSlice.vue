<template>
    <span>
        <router-link v-bind:to="sliceLink" :class="sliceStatus">
            {{sliceLabel}}
        </router-link>
    </span>
</template>

<script>
export default {
    name: 'bread-slice',
    props: {
        sliceLink: {
            type: String,
            required: true
        },
        sliceStatus: {
            type: String
        },
        sliceLabel: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
span{
    position: relative;
    margin: 0;
    margin-right: .5rem;

    a{
        color: #ADB5BD;
        text-decoration: none;
    }

    .active{
        color: #167BFF;
    }

    &:not(:last-child):after{
        content: '/';
        margin-left: .5rem;
    }
}
</style>