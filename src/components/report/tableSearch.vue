<template>
    <div class="tableSearch">
        <input type="search" placeholder="Search">
        <button>
            <i class="fa fa-search"></i>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.tableSearch{
    width: 100%;
    float: right;
    display: flex;
    border: 1px solid #DFDFDF;
    color: #000;
    border-radius: .25rem;
    overflow: hidden;

    input{
        padding: .5rem;
        border: none;
        background-color: transparent;
        color: #000;
        &::placeholder{
            color: #939BAB;
        }
        &:focus{
            outline: none;
        }
    }
    button{
        width: 33px;
        padding: .5rem;
        border: none;
        background-color: #F8F9FA;
        border-left: 1px solid #DFDFDF;
    }
}
</style>