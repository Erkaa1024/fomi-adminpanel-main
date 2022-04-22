<template>
  <div class="finance-body">
    <div class="rep-wrapper">
      <div class="rep-head">
        <div class="rep-control">
          <div class="input">
            <div class="select">
              <n-select v-model:value="value" :options="options" clearable />
            </div>
            <div class="search">
              <search />
            </div>
          </div>
        </div>
      </div>

      <div class="rep-body">
        <table>
          <tr class="head">
            <td>#</td>
            <td>Од хэрэглэгчид</td>
            <td>Нэр</td>
            <td>И-Мэйл</td>
            <td>РД-Дугаар</td>
            <td>Идэвхи</td>
            <td>Эрх</td>
            <td>Банкны нэр</td>
            <td>Дансны Дугаар</td>
            <td>Бүртгүүлсэн огноо</td>
            <td>Дэлгэрэнгүй <br />тайлан харах</td>
          </tr>
          <talentList
          v-for="rl in reportlist"
          :key="rl"
          :tNumber="rl.tNumber"
          :tPhoneNumber="rl.tPhoneNumber"
          :tName="rl.tName"
          :tGmail="rl.tGmail"
          :tRegister="rl.tRegister"
          :tActive="rl.tActive"
          :tPremession="rl.tPremession"
          :tBankname="rl.tBankname"
          :tBanknumber="rl.tBanknumber"
          :tDate="rl.tDate"
          
          />
        </table>
      </div>

      <div class="rep-foot">
        <div class="pagination">
          <n-pagination :page-count="1" v-model:page-size="pageSize" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from "../../components/tableSearch.vue";
import talentList from "../../components/report/talentList.vue"
import { ref } from "vue";

export default {
  components: {
    search,
    talentList
  },
  data() {
    return {
      value: ref(null),
      pageSize: ref(15),
      options: [
        {
          label: "Од хэрэглэгчид",
          value: "1",
        },
        {
          label: "Нэр",
          value: "2",
        },
        {
          label: "И-Мэйл",
          value: "3",
        },
        {
          label: "РД-Дугаар",
          value: "2",
        },
      ],
      reportlist: [
        {
          tNumber: "1",
          tPhoneNumber: "88888888",
          tName: "Desant",
          tGmail: "real.desant@gmail.com",
          tRegister: "УП03010551",
          tActive: "Active",
          tPremession: "ROLE_ACTOR",
          tBankname: "Хас банк",
          tBanknumber: "5171237585",
          tDate: "2022-02-24 15:04:41",
        },
        {
          tNumber: "2",
          tPhoneNumber: "88888000",
          tName: "ogbro",
          tGmail: "real.desant@gmail.com",
          tRegister: "УП05030851",
          tActive: "Active",
          tPremession: "ROLE_ACTOR",
          tBankname: "Хаан банк",
          tBanknumber: "51712375545",
          tDate: "2022-02-24 15:04:41",
        },
      ],
      Treportlist: [
        {
          tPNumber: "1",
          tIDNumber: "2203010001",
          tPName: "test.od",
          tPBank: "",
          tFullfilled: "-",
          tIncome: "-",
          tTax: "-",
          tTransferred: "-",
          tAction: "",
         
        },
       
      ],
    };
  },
};
</script>

<style lang="scss">
.finance-body {
  width: 100%;
  padding: 1rem;
  position: relative;
  display: table;

  .rep-wrapper {
    width: 100%;
    box-shadow: 0 0 2px 1px #dfdfdf;
    background: #fff;
    border-radius: 0.5rem;

    .rep-head {
      position: relative;
      width: 100%;
      padding: 1rem;
      border-bottom: thin solid #dfdfdf;

      .rep-control {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .input {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .select {
            width: 300px;
            margin-right: 1rem;

            .n-base-selection {
              padding: 1px;
              border-radius: 0.25rem;
            }
          }

          .search {
            button {
              background: #038fde;
              color: #fff;
            }
          }
        }
      }
    }

    .userDetail {
      border: none;
      border-radius: 0.25rem;
      background-color: #038fde;
      color: #fff;
      white-space: nowrap;
      height: 36px;
      width: 42px;
      margin-left: 1rem;
      margin-top: 0.5rem;
    }
    .rep-body {
      width: 100%;
      position: relative;
      padding: 1rem;
      overflow-x: auto;

      table {
        width: fit-content;
        min-width: 100%;

        tr {
          &.head {
            border-bottom: thin solid #dfdfdf;
            background: #fafafa;
            font-weight: 600;
          }
          td {
            padding: 1rem;
            border-bottom: thin solid #dfdfdf;
          }

          .popup-test {
            position: fixed;
            top: 0;
            right: 0;
            width: calc(100vw - 260px);
            height: 100vh;
            z-index: 1000;
            background: #0007;
            display: flex;
            align-items: center;
            justify-content: center;

            .pop-wrapper {
              width: 1500px;
              background: #fff;
              border-radius: 0.5rem;
              box-shadow: 0 0 2px 1px #dfdfdf;

              .pop-head {
                width: 100%;
                padding: 1rem;
                border-bottom: thin solid #dfdfdf;
                display: flex;
                align-items: center;
                justify-content: space-between;
              }

              .pop-body {
                padding: 1rem;
              }

              .pop-foot {
                width: 100%;
                padding: 1rem;
                border-top: thin solid #dfdfdf;
                display: flex;
                align-items: center;
                justify-content: flex-end;

                button {
                  border-radius: 0.25rem;
                  padding: 0.5rem 0.75rem;
                  cursor: pointer;
                  font-family: inherit;

                  &.cancelBtn {
                    background: none;
                    border: thin solid #dfdfdf;
                    margin-right: 1rem;
                  }

                  &.confirmBtn {
                    background: #038fde;
                    color: #fff;
                    border: none;
                  }
                }
              }
            }
          }
        }
      }
    }

    .rep-foot {
      position: relative;
      width: 100%;
      padding: 1rem;
      display: flex;
      justify-content: flex-end;
      
    }
  }

  table,
  tr,
  td {
    border-collapse: collapse;
    border-spacing: 0;
  }
}

@media (max-width: 1023px) {
  .popup-test {
    width: calc(100vw - 80px);
  }
}
</style>
