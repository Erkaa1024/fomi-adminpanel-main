<template>
    <div class="breadCrumb">
        <breadSlice
        v-for="breadSlice in breadSlices"
        :key="breadSlice"
        :sliceLink="breadSlice.sliceLink"
        :sliceStatus="breadSlice.sliceStatus"
        :sliceLabel="breadSlice.sliceLabel"
        />
    </div>
</template>

<script>
import breadSlice from "./breadSlice.vue"

export default {
    name: "breadCrumb",
    components: {
        breadSlice
    },

    data () {
        return{
            breadSlices: [
                {
                    sliceLink: "/dashboard",
                    sliceStatus: "active",
                    sliceLabel: "Home"
                },
                {
                    sliceLink: "/dashboard",
                    sliceLabel: "Dashboard"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.breadCrumb{
    font-size: 90%;
    white-space: nowrap;
    display: inline-block;
}
</style>