<template>
  <div class="jours-body">
    <div class="table">
      <div class="header">
        <p class="title">ГҮЙЛГЭЭ</p>

        <div class="control">
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

          <button class="download" @click="printData">
            <i class="fa fa-download"></i>
            <span>Download</span>
          </button>
        </div>
      </div>

      <div class="body">
        <table ref="printTable" id="table">
          <thead>
            <tr class="head">
              <td>
                #
              </td>
              <td>
                Төлбөрийн дугаар
              </td>
              <td>
                Од хэрэглэгч
              </td>
              <td>
                Нэр
              </td>
              <td>
                Мөнгөн дүн
              </td>
              <td class="status">
                Захиалгын төлөв
              </td>
              <td class="type">
                Төрөл
              </td>
              <td>
                Захиалгын хугацаа
              </td>
              <td class="type">
                Төрөл
              </td>
              <td class="status">
                Банкны төлөв
              </td>
              <td>
                Үйлдэл
              </td>
            </tr>
          </thead>
          <tbody>
            <transactionList
            v-for="transaction in transactions"
            :key="transaction"
            :id="transaction.id"
            :transactionId="transaction.transactionId"
            :star="transaction.star"
            :name="transaction.name"
            :cost="transaction.cost"
            :orderStatus="transaction.orderStatus"
            :type="transaction.type"
            :orderDate="transaction.orderDate"
            :orderType="transaction.orderType"
            :bankStatus="transaction.bankStatus"
            :requestMessage="transaction.requestMessage"
            >
            </transactionList>
          </tbody>
        </table>
      </div>

      <div class="footer">
        <div class="pagination">
          <n-pagination :page-count="1">
            <template #prev>
              &laquo;
            </template>
            <template #next>
              &raquo;
            </template>
          </n-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from "vue";
  import search from '../../components/tableSearch.vue'
  import transactionList from '../../components/service/transactionList.vue'

  export default {
    components: {
      search,
      transactionList
    },
    methods: {
      printData() {
        var printElement = this.$refs.printTable;
        newWindow = window.open();
        newWindow.document.write(printElement.outerHTML);
        newWindow.print();
        newWindow.close();
      }
    },
    data() {
      return {
        value: ref(null),
        options: [
          {
            label: 'Төлбөрийн дугаар',
            value: '1'
          },
          {
            label: 'Од хэрэглэгч',
            value: '2'
          },
          {
            label: 'Захиалгын төлөв',
            value: '3'
          },
          {
            label: 'Төрөл',
            value: '4'
          }
        ],
        transactions: [
          {
            id: 1,
            transactionId: 'P22033111191',
            star: 'Business',
            name: 'Byambaa',
            cost: '1000.00',
            orderStatus: 'Expired',
            type: 'Anniversary',
            orderDate: '2022-03-31 11:43:43',
            orderType: 'qpay',
            bankStatus: 'revenue',
            requestMessage: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit fugiat consectetur perferendis doloribus voluptas, voluptate non debitis quas ducimus labore aliquam suscipit nihil dolore, cum similique sint saepe ratione vitae!`
          },
          {
            id: 2,
            transactionId: 'P22033111192',
            star: 'Business',
            name: 'Byambaa',
            cost: '1000.00',
            orderStatus: 'Canceled',
            type: 'Birthday',
            orderDate: '2022-03-31 11:43:43',
            orderType: 'qpay',
            bankStatus: 'revenue',
            requestMessage: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dicta natus ratione doloribus qui et error nam sint. Amet vero voluptatum error at nihil repellendus dolorem, dolor adipisci saepe maiores.`
          },
          {
            id: 3,
            transactionId: 'P22033111193',
            star: 'Business',
            name: 'Byambaa',
            cost: '1000.00',
            orderStatus: 'Fulfilled',
            type: 'Thank you',
            orderDate: '2022-03-31 11:43:43',
            orderType: 'qpay',
            bankStatus: 'cost',
            requestMessage: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga illo enim molestiae nemo repellendus doloribus consequuntur. Corrupti mollitia, harum omnis adipisci asperiores, veniam consequatur accusantium aspernatur tempore accusamus dolores!`
          },
          {
            id: 4,
            transactionId: 'P22033111194',
            star: 'Business',
            name: 'Byambaa',
            cost: '1000.00',
            orderStatus: 'Declined',
            type: 'GoodLuck',
            orderDate: '2022-03-31 11:43:43',
            orderType: 'qpay',
            bankStatus: 'cost',
            requestMessage: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores sapiente architecto quae. Quia odio labore voluptate praesentium odit tenetur magnam nobis, eveniet recusandae provident laborum at, perspiciatis culpa aliquam officia!`
          },
          {
            id: 5,
            transactionId: 'P22033111195',
            star: 'Business',
            name: 'Byambaa',
            cost: '1000.00',
            orderStatus: 'Requested',
            type: 'Surprise',
            orderDate: '2022-03-31 11:43:43',
            orderType: 'qpay',
            bankStatus: 'cost',
            requestMessage: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, quo veniam! Sed accusamus ipsam odio error nisi ratione quae, deserunt, exercitationem consequuntur id quibusdam minima assumenda dolorem tempore delectus ut!`
          },
        ]
      }
    }
  }
</script>

<style lang="scss">
  $canceled-bg: #F9F0FF;
  $canceled-border: #D3ADF7;
  $canceled-text: #722ED1;

  $expired-bg: #F8EBE2;
  $expired-border: #FDBA95;
  $expired-text: #F66D3F;

  $declined-bg: #FFF1F0;
  $declined-border: #FBC4A6;
  $declined-text: #F63A45;

  $fulfilled-bg: #F5FFEF;
  $fulfilled-border: #B7EB8F;
  $fulfilled-text: #52C41A;

  $requested-bg: #FFFBE6;
  $requested-border: #FFE58F;
  $requested-text: #FAAD14;

  $qpay-bg: #E6F7FF;
  $qpay-border: #92D5FF;
  $qpay-text: #37A0FF;

  $cost-bg: #FBFBEA;
  $cost-border: #FBE89F;
  $cost-text: #FAAD15;

  $border-color: #E8E8E8;

  .jours-body {
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    padding: 1rem;

    .table {
      border-radius: .5rem;
      box-shadow: 0 0 2px 1px #DFDFDF;
      background-color: #fff;
      overflow: hidden;
      padding: 1rem;

      .header {
        width: 100%;
        margin-bottom: 1rem;
        display: table;

        p.title {
          margin-bottom: 1rem;
        }

        .control {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .input{
            display: flex;
            align-items: stretch;

            .select{
              width: 200px;
              .n-base-selection{
                padding: 1px;
                border-radius: .25rem;
                --n-border-active: 1px solid #038FDE !important;
                --n-border-focus: 1px solid #038FDE !important;
                --n-border-hover: 1px solid #038FDE !important;
              }
            }

            .search {
              width: fit-content;
              padding-left: 1rem;

              .tableSearch {
                button {
                  background-color: #038FDE;
                  color: #fff;
                }
              }
            }

            .download {
              background: #038FDE;
              color: #fff;
              border: none;
              padding: .5rem;
              border-radius: .25rem;
              font-weight: 600;

              &:focus {
                outline: none;
              }

              span {
                padding-left: .5rem;
              }
            }
          }
        }
      }

      .body {
        position: relative;
        width: 100%;
        margin-bottom: 1rem;
        overflow-x: auto;
        max-width: calc(100vw - 260px - 4rem);

        table:not(.tdp) {
          width: 100%;
          border-bottom: 1px solid $border-color;
          border-bottom-left-radius: .5rem;
          border-bottom-right-radius: .5rem;
          color: #535353;

          tr.head {
            td {
              font-weight: 600;
              border-bottom: 1px solid $border-color;
              white-space: nowrap;
            }
          }

          tr {
            td {
              position: relative;
              padding: 1rem;

              &.type {
                cursor: pointer;
                text-align: left;

                p.type {
                  background: #F9F0FF;
                  border: thin solid #D3ADF7;
                  color: #722ED1;
                  padding: 0 1rem;
                  border-radius: 9999px;
                  font-weight: 500;
                }
              }

              :is(&.bankStatus, &.orderType, &.status) {
                p{
                  border-radius: 9999px;
                  padding: 0 1rem;
                  font-weight: 500;
                  border-width: thin;
                  border-style: solid;
                  text-align: center;

                  &.Canceled {
                    color: $canceled-text;
                    border-color: $canceled-border;
                    background-color: $canceled-bg;
                  }

                  &.Declined {
                    color: $declined-text;
                    border-color: $declined-border;
                    background-color: $declined-bg;
                  }

                  &.Expired {
                    color: $expired-text;
                    border-color: $expired-border;
                    background-color: $expired-bg;
                  }

                  &.Fulfilled {
                    color: $fulfilled-text;
                    border-color: $fulfilled-border;
                    background-color: $fulfilled-bg;
                  }

                  &.Requested {
                    color: $requested-text;
                    border-color: $requested-border;
                    background-color: $requested-bg;
                  }
                  
                  &.qpay{
                    color: $qpay-text;
                    border-color: $qpay-border;
                    background-color: $qpay-bg;
                  }

                  &.revenue{
                    color: $fulfilled-text;
                    border-color: $fulfilled-border;
                    background-color: $fulfilled-bg;
                  }

                  &.cost{
                    color: $cost-text;
                    border-color: $cost-border;
                    background-color: $cost-bg;
                  }
                }
              }

              &.uppercase{
                text-transform: uppercase;
              }
            }
          }
        }
      }

      .footer {
        position: relative;
        width: 100%;

        .pagination {
          border: 1px solid $border-color;
          float: right;
          border-radius: .25rem;
        }
      }
    }

    table,
    th,
    td {
      border-collapse: separate;
      border-spacing: 0;
    }
  }

  @media (max-width: 1023px) {

    // @media (max-width: 767px) {
    .jours-body {
      .table {
        .header {
          .control {
            .download {
              display: none;
            }
          }
        }

        .body {
          max-width: calc(100vw - 80px - 4rem);
        }
      }
    }
  }
</style>