<template>
    <button class="socialLogin"
    v-bind:style="{backgroundColor: socialBtnColor}"
    >
        <div>
            <i v-bind:class="socialIcon"></i>
            {{socialLoginLabel}}
        </div>
    </button>
</template>

<script>
export default {
    name: "socialLoginBtn",
    
    props: {
        socialBtnColor: {
            type: String
        },
        socialIcon: {
            type: String,
            required: true
        },
        socialLoginLabel: {
            type: String
        }
    },
}
</script>

<style lang="scss" scoped>
.socialLogin{
    width: 100%;
    height: 38px;
    width: 100%;
    margin-bottom: .5rem;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1em;

    &:hover{
        filter: brightness(.925);
    }

    i{margin-right: .5rem;}
}
</style>