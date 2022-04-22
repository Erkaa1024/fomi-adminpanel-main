<template>
    <topCard
    v-for="topCard in cards"
    :key="topCard"
    :cardColor="topCard.cardColor"
    :cardIcon="topCard.cardIcon"
    :cardTitle="topCard.cardTitle"
    :cardValue="topCard.cardValue"
    />
</template>

<script>
import topCard from './card/topCard.vue'

export default {
    name: "card",
    components: {
        topCard
    },
    data () {
        return {
            cards: [
                {
                    cardColor: "#17A2B8",
                    cardIcon: "settings",
                    cardTitle: "CPU Traffic",
                    cardValue: "10 %"
                },
                {
                    cardColor: "#DC3545",
                    cardIcon: "thumb_up_off_alt",
                    cardTitle: "Likes",
                    cardValue: "41,410"
                },
                {
                    cardColor: "#28A745",
                    cardIcon: "shopping_cart",
                    cardTitle: "Sales",
                    cardValue: "760"
                },
                {
                    cardColor: "#FFC107",
                    cardIcon: "groups",
                    cardTitle: "New Members",
                    cardValue: "2,000"
                }
            ]
        }
    }
}
</script>