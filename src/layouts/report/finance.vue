<template>
    <div class="finance-body">
        <div class="fin-wrapper">
            <div class="fin-head">
                <h4>Санхүүгийн тайлан</h4>

                <div class="fin-control">
                    <div class="input">
                        <div class="select">
                            <n-select
                            v-model:value="value"
                            :options="options"
                            clearable
                            />
                        </div>
                        <div class="search">
                            <search />
                        </div>
                    </div>
                </div>
            </div>

            <div class="fin-body">
                <table>
                        <tr class="head">
                            <td>Нийт орлого</td>
                            <td>qpay шимтгэл</td>
                            <td>Талентад олгох(75%)</td>
                            
                        </tr>
                        <tr v-for="rl in reportlist" :key="rl">
                            <td>{{rl.orlogo}}</td>
                            <td>{{rl.shimtgel}}</td>
                            <td>{{rl.salary}}</td>
                        </tr>
                </table>
            </div>

            <div class="fin-foot">
                <div class="pagination">
                    <n-pagination :page-count="1" v-model:page-size="pageSize"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import search from '../../components/tableSearch.vue'
import {ref} from 'vue'

export default {
    components: {
        search,
    },
    data() {
        return {
            value: ref(null),
            pageSize: ref(15),
            options: [
                {
                label: "Example-1",
                value: '1',
                },
                {
                label: 'Example-2',
                value: '2'
                }
            ],
            reportlist: [
                {
                    orlogo: '2103505.00',
                    shimtgel: '1577628.7500',
                    salary: '21035.0500'
                },
                {
                    orlogo: '2103505.01',
                    shimtgel: '1577628.7501',
                    salary: '21035.0501'
                }
            ]
        }
    },
    // props: {
    //     orlogo: { type: Number },
    //     shimtgel: { type: Number },
    //     salary: { type: Number }
    // }
}
</script>

<style lang="scss">
.finance-body{
    width: 100%;
    padding: 1rem;
    position: relative;
    display: table;

    .fin-wrapper{
        width: 100%;
        box-shadow: 0 0 2px 1px #DFDFDF;
        background: #fff;
        border-radius: .5rem;

        .fin-head{
            position: relative;
            width: 100%;
            padding: 1rem;
            border-bottom: thin solid #DFDFDF;

            .fin-control{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .input{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .select{
                        width: 300px;
                        margin-right: 1rem;

                        .n-base-selection{
                            padding: 1px;
                            border-radius: .25rem;
                        }
                    }

                    .search{
                        button{
                            background: #038FDE;
                            color: #fff;
                        }
                    }
                }
            }
        }

        .fin-body{
            width: 100%;
            position: relative;
            padding: 1rem;
            overflow-x: auto;

            table{
                width: fit-content;
                min-width: 100%;

                tr{
                    &.head{
                        border-bottom: thin solid #dfdfdf;
                        background: #FAFAFA;
                        font-weight: 600;
                    }
                    td{
                        padding: 1rem;
                    }
                }
            }
        }

        .fin-foot{
            position: relative;
            width: 100%;
            padding: 1rem;
            display: flex;
            justify-content: flex-end;
            border-top: thin solid #dfdfdf;
        }
    }

    table, tr, td{
        border-collapse: collapse;
        border-spacing: 0;
    }
}

@media (max-width: 1023px) {
}
</style>