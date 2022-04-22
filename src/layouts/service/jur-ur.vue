<template>
  <div class="jours-body">
    <div class="table">
      <div class="header">
        <p class="title">ХҮСЭЛТҮҮД</p>

        <div class="control">
          <div class="search">
            <search />
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
                Илгээсэн хэрэглэгч
              </td>
              <td>
                Сонгогдсон хэрэглэгч
              </td>
              <td class="status">
                Төлөв
              </td>
              <td class="type">
                Төрөл
              </td>
              <td>
                Үүсгэсэн өдөр
              </td>
              <td>
                Дуусах хугацаа
              </td>
              <td>
                Promo code
              </td>
              <td>
                Биелэсэн файл
              </td>
            </tr>
          </thead>
          <tbody>
            <joursList v-for="jour in jours" :key="jour" :id="jour.id" :name="jour.name" :receiver="jour.receiver"
              :status="jour.status" :type="jour.type" :createdDate="jour.createdDate" :expiredDate="jour.expiredDate"
              :promo="jour.promo" :isFulfilled="jour.isFulfilled" :requestMessage="jour.requestMessage" />
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
  import search from '../../components/tableSearch.vue'
  import joursList from '../../components/service/joursList.vue'

  export default {
    components: {
      search,
      joursList
    },
    methods: {
      printData(){
        var printElement = this.$refs.printTable;
        newWindow = window.open();
        newWindow.document.write(printElement.outerHTML);
        newWindow.print();
        newWindow.close();
      }
    },
    data() {
      return {
        jours: [{
            id: 1,
            name: 'Danzan_OG',
            receiver: 'Pagmaa_OG',
            status: 'Fulfilled',
            type: 'Birthday',
            createdDate: '2022-03-16 15:29:43',
            expiredDate: '2022-03-17, 15:29',
            promo: 'TSHPN',
            isFulfilled: 'no',
            requestMessage: `Хамгаас хөөрхөн Пагмаадаа төрсөн өдрийн мэнд хүргье. Орой яахын?`
          },
          {
            id: 2,
            name: 'Dondog_EG',
            receiver: 'Chantsal_EG',
            status: 'Canceled',
            type: 'GoodLuck',
            createdDate: '2022-03-16 15:25:35',
            expiredDate: '2022-03-17, 15:25',
            promo: 'OSYTV',
            isFulfilled: 'yes',
            requestMessage: `Чанцкадаа амжилт хүсье! Хичээгээрэй.`
          },
          {
            id: 3,
            name: 'Dowdon_GG',
            receiver: 'Dulam_GG',
            status: 'Expired',
            type: 'Anniversary',
            createdDate: '2022-03-11 18:07:18',
            expiredDate: '2022-03-12, 18:07',
            promo: 'BXANY',
            isFulfilled: 'no',
            requestMessage: `10 жилийн ойн мэнд хүргье. Хайртай шүү бэсдомээн`
          },
          {
            id: 4,
            name: 'Gongor_Navi',
            receiver: 'Gunsmaa_Navi',
            status: 'Requested',
            type: 'ThankYou',
            createdDate: '2022-03-09 15:57:44',
            expiredDate: '2022-07-01, 05:38',
            promo: 'YTKTF',
            isFulfilled: 'no',
            requestMessage: `Зээлсэн мөнгөө өгсөнд баярлалаа. 😒`
          },
          {
            id: 5,
            name: 'Gotow_Fit',
            receiver: 'Gerelee_Fit',
            status: 'Declined',
            type: 'Birthday',
            createdDate: '2022-03-16 14:42:44',
            expiredDate: '2022-03-31, 14:42',
            promo: 'NBGDQ',
            isFulfilled: 'no',
            requestMessage: `Орой бут авцгаая 🍾🥂`
          }
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

          .search {
            width: fit-content;

            .tableSearch {
              button {
                background-color: #038FDE;
                color: #fff;
              }
            }
          }

          .download{
            background: #038FDE;
            color: #fff;
            border: none;
            padding: .5rem;
            border-radius: .25rem;
            font-weight: 600;

            &:focus{
              outline: none;
            }

            span{
              padding-left: .5rem;
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

        table {
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

              &.img-col-header {
                text-align: center;
              }
            }
          }

          tr {
            td {
              position: relative;
              padding: 1rem;

              &.img-col {
                img {
                  width: 50px;
                  border-radius: .25rem;
                  border: 1px solid $border-color;
                }
              }

              &.type {
                cursor: pointer;
                text-align: center;

                p.type {
                  text-align: center;
                  background: #F9F0FF;
                  border: thin solid #D3ADF7;
                  color: #722ED1;
                  padding: 0 1rem;
                  border-radius: 9999px;
                  font-weight: 500;
                }
              }

              &.status {
                width: 100px;
                text-align: center;

                p {
                  border-radius: 9999px;
                  padding: 0 1rem;
                  font-weight: 500;
                  border-width: thin;
                  border-style: solid;

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
                }
              }

              &.fulfilled {
                &.yes {
                  p {
                    display: none;
                  }

                  button {
                    display: block;
                  }
                }

                &.no {
                  p {
                    display: block;
                  }

                  button {
                    display: none;
                  }
                }

                p {
                  text-align: center;
                  font-weight: bolder;
                }

                button {
                  width: 100%;
                  border: none;
                  height: 2.75rem;
                  border-radius: .25rem;
                  padding: 0 1rem;
                  font-weight: 600;
                  color: #fff;
                  background: #038FDE;
                }
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
      .table{
        .header{
          .control{
            .download{
              display: none;
            }
          }
        }
        .body{
          max-width: calc(100vw - 80px - 4rem);
        }
      }
    }
  }
</style>