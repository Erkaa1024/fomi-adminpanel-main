<template>
    <div class="menu-item" :class="{ expanded: expanded }">
        <div class="label"
        @click="toggleMenu()"
        :style="{
            paddingLeft: depth * 20 + 20 + 'px'
        }"
        >
            <div class="left">
                <i v-if="icon" v-bind:class="icon"></i>
                <span>{{ label }}</span>
            </div>
            <div v-if="data" class="right">
            <i class="material-icons expand" :class="{ expanded: expanded}">expand_more</i>
            </div>
        </div>
        <div
        v-show="showChildren"
        class="items-container"
        ref="container"
        :style="{ height: containerHeight }"
        >
        
            <router-link
            v-for="(item, index) in data"
            :key="index"
            :to="item.path"
            tag="div">
                <menu-item
                :label="item.label"
                :icon="item.icon"
                :depth="depth + 1"
                :data="item.children"
                />
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "menu-item",
    data: () => ({
        showChildren: false,
        expanded: false,
        containerHeight: 0
    }),
    props: {
        path: {
            type: String
        },
        label: {
            type: String,
            required: true
        },
        icon: {
            type: String
        },
        depth: {
            type: Number,
            required: true
        },
        data: {
            type: Array
        }
    },
    methods: {
        toggleMenu() {
            this.expanded = !this.expanded;
            if(!this.showChildren) {
                this.showChildren = true;
                this.$nextTick(() => {
                    this.containerHeight = this.$refs["container"].scrollHeight + "px";

                    setTimeout(() => {
                        this.containerHeight = "fit-content";
                        this.$refs["container"].style.overflow = "visible";
                    }, 300);
                })
            } else {
                this.containerHeight = this.$refs["container"].scrollHeight + "px";
                this.$refs["container"].style.overflow = "hidden";

                setTimeout(() => {
                    this.containerHeight = 0 + "px";
                }, 10);

                setTimeout(() => {
                    this.showChildren = false
                }, 300);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.menu-item{
    position: relative;
    width: 100%;

    .label{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        white-space: nowrap;
        user-select: none;
        height: 50px;
        padding: 0 20px;
        color: #ececec;
        // transition: all .15s ease;

        &:hover{
            background: #ECECEC;
            color: #2E2E2E;

            i{
                color: #2E2E2E;

                &.expand{
                    color: #2E2E2E;
                }
            }
        }

        > div{
            display: flex;
            align-items: center;
            // transition: all .15s ease;
            gap: 10px;
        }

        i{
            font-size: 20px;
            color: #ececec;
            transition: all .15s ease;
            &.expand{
                font-size: 16px;
                color: #cacaca;
                &.expanded{
                    transform: rotate(180deg);
                }
            }
        }

        &:hover{
            background-color: #deedff;
            cursor: pointer;
        }
    }

    .items-container{
        width: 100%;
        overflow: auto;
        // transition: height .15s ease;
    }

    ::-webkit-scrollbar {
        width:  0;
    }
}

@media (max-width: 1023px){
// @media (max-width: 767px){
    .menu:hover{
        .menu-item{
            .label{
                justify-content: space-between;
            
                > div{
                    justify-content: start;
                }
                .left{
                    span{
                        width: 100%;
                    }
                }
                .right{
                    width: 16px;
                }
            }
        }
    }
    .menu-item{
        .label{
            justify-content: center;
        
            > div{
                justify-content: center;
            }
            .left{
                span{
                    width: 0;
                    overflow: hidden;
                    // transition: all .15s ease;
                }
            }
            .right{
                width: 0;
                overflow: hidden;
                // transition: all .15s ease;
            }
        }
    }
}
</style>