<template>
    <div class="card">
        <div class="card-inner">
            <div class="card-icon" v-bind:style="{ background: cardColor}">
                <i class="material-icons">{{ cardIcon }}</i>
            </div>
            <div class="card-text">
                <p>{{ cardTitle }}</p>
                <p>{{ cardValue }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "topCard",

        props: {
            cardColor: {
                type: String
            },
            cardIcon: {
                type: String,
                required: true
            },
            cardTitle: {
                type: String,
                required: true
            },
            cardValue: {
                type: String,
                required: true
            },
        },
    }
</script>

<style lang="scss" scoped>
    $tablet: 768px;
    $laptop: 1024px;
    $laptop-lg: 1440px;
    $desktop: 1920px;

    .card {
        background-color: #fff;
        border-radius: 5px;
        width: 100%;
        margin-bottom: 1rem;
        box-shadow: 0 0 2px 1px #DFDFDF;

        .card-inner {
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            padding: .5rem;

            .card-icon {
                height: 50px;
                width: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 5px;
                color: #fff;
            }

            .card-text {
                height: 100%;
                margin-left: 1rem;
                width: calc(100% - 50px);
                display: flex;
                flex-direction: column;
                align-items: stretch;
                justify-content: space-between;

                p {
                    margin: 0;

                    &:last-child {
                        font-weight: bold;
                    }
                }
            }
        }
    }

    @media (min-width: 576px) {
        .card {
            width: calc(50% - .5rem);
        }
    }

    @media (min-width: $laptop) {
        .card {
            width: calc(25% - 1rem);
        }
    }
</style>