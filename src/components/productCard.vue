<template>
    <prodCard
    v-for="prodCard in cards"
    :key="prodCard"
    :cardTextColor="prodCard.cardTextColor"
    :cardBodyColor="prodCard.cardBodyColor"
    :cardValue="prodCard.cardValue"
    :cardTitle="prodCard.cardTitle"
    :cardIconColor="prodCard.cardIconColor"
    :cardIcon="prodCard.cardIcon"
    :cardFootColor="prodCard.cardFootColor"
    :link="prodCard.link"
    />
</template>

<script>
import prodCard from '../components/card/prodCard.vue'

export default {
    name: "prod-card",
    components: {
        prodCard
    },
    data () {
        return {
            cards: [
                {
                    cardTextColor: "white",
                    cardBodyColor: "#17A2B8",
                    cardValue: "150",
                    cardTitle: "New Orders",
                    cardIcon: "fa fa-bag-shopping",
                    cardIconColor: "#148A9D",
                    cardFootColor: "#1591A5",
                    link: "/"
                },
                {
                    cardTextColor: "white",
                    cardBodyColor: "#28A745",
                    cardValue: "53%",
                    cardTitle: "Bounce Rate",
                    cardIcon: "fa fa-chart-simple",
                    cardIconColor: "#228E3B",
                    cardFootColor: "#228E3B",
                    link: "/"
                },
                {
                    cardTextColor: "black",
                    cardBodyColor: "#FFC107",
                    cardValue: "44",
                    cardTitle: "User Registrations",
                    cardIconColor: "#D9A406",
                    cardIcon: "fa fa-user-plus",
                    cardFootColor: "#E5AD06",
                    link: "/"
                },
                {
                    cardTextColor: "white",
                    cardBodyColor: "#DC3545",
                    cardValue: "65",
                    cardTitle: "Unique Visitors",
                    cardIconColor: "#BB2D3B",
                    cardIcon: "fa fa-chart-pie",
                    cardFootColor: "#C6303E",
                    link: "/"
                }
            ]
        }
    }
}
</script>