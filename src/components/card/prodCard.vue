<template>
    <div class="card" :class="cardTextColor">
        <div class="card-body" v-bind:style="{ background: cardBodyColor}">
            <div class="card-text">
                <h4>{{ cardValue }}</h4>
                <p>{{ cardTitle }}</p>
            </div>
            <div class="card-icon" v-bind:style="{ color: cardIconColor}">
                <i v-bind:class="cardIcon"></i>
            </div>
        </div>

        <div class="card-footer" v-bind:style="{ background: cardFootColor}">
            <p>
                <router-link v-bind:to="link">
                    More info <i class="fa fa-circle-arrow-right"></i>
                </router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "prodCard",
    
    props: {
        cardTextColor: {
            type: String,
            required: true
        },
        cardBodyColor: {
            type: String,
            required: true
        },
        cardValue: {
            type: String,
            required: true
        },
        cardTitle: {
            type: String,
            required: true
        },
        cardIconColor: {
            type: String,
            required: true
        },
        cardIcon: {
            type: String,
            required: true
        },
        cardFootColor: {
            type: String,
            required: true
        },
        link: {
            type: String
        }
    },
}
</script>

<style lang="scss" scoped>
$tablet: 768px;
$laptop: 1024px;
$laptop-lg: 1440px;
$desktop: 1920px;

.card{
    position: relative;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 1rem;
    display: inline-table;
    overflow: hidden;

    &.white{
        color: #fff;
    }

    &.black{
        color: #000;
    }

    .card-body{
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        width: 100%;
        height: calc(70px + 2rem);
        padding: 1rem;

        .card-text{
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: space-between;

            h4{
                margin: 0;
                font-size: 2.2em;
            }

            p{
                margin: 0;
                font-size: 12px;
            }
        }

        .card-icon{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            font-size: 70px;
            color: #BB2D3B;
        }
    }

    .card-footer{
        width: 100%;

        p{
            margin: 0;
            text-align: center;
            padding: .5rem 1rem;
        }
    }
}

@media (min-width: 576px){
    .card{
        width: calc(50% - .5rem);
    }
}
@media (min-width: $laptop){
    .card{
        width: calc(25% - 1rem);
    }
}
</style>