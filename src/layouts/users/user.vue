<template>
  <div class="user-body">
    <div class="table">
      <div class="table-wraper-head">
        <p>
          Энгийн хэрэглэгчид
        </p>

        <div class="search">
          <tableSearch />
        </div>
      </div>

      <div class="table-wrapper">
        <div class="table-head">
          <div class="checkbox">
            <input type="checkbox" name="user" id="header-checkbox">
          </div>

          <p class="name">Хэрэглэгчийн Нэр</p>
          <p class="email">И-Мэйл</p>
          <p class="userStat">Active</p>
          <p class="userImg">Зураг</p>
          <p class="userDate">Бүртгүүлсэн огноо</p>
          <p class="userTurnButton">Идэвхгүй болгох</p>
          <p class="userOperate">Үйлдэл</p>
          <p class="userDetail"><i class="fa fa-bars"></i></p>
        </div>

        <userTable v-for="row in rows" :key="row" :userNumber="row.userNumber" :userName="row.userName"
          :userEmail="row.userEmail" :userPermission="row.userPermission"
          :userImg="row.userImg" :userDate="row.userDate"/>
      </div>

      <div class="table-wrapper-footer">
        <div class="pagination">
          <tablePagination></tablePagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import userTable from "../../components/user-table/user-table.vue"
  import tableSearch from "../../components/tableSearch.vue"
  import tablePagination from "../../components/tablePagination.vue"
  import image from "../../assets/images/user-solid.svg"

  export default {
    components: {
      userTable,
      tableSearch,
      tablePagination
    },
    data() {
      return {
        rows: [{
            userName: 'Aaaaaaaaaaaaa',
            userEmail: '0123456789.abcderfghi@gmail.com',
            userImg: image,
            userDate: '2022-02-24 15:04:41'
          },
          {
            userName: 'Aaaaaaaaaaaaaaaaaaaaaaaa',
            userEmail: 'mail2@email.com',
            userImg: image,
            userDate: '2022-02-24 15:04:41'
          },
          {
            userName: 'Aaaaaaaaaaaaa',
            userEmail: 'mail3@email.com',
            userImg: image,
            userDate: '2022-02-24 15:04:41'
          },
          {
            userName: 'Aaaaaaaaaaaaa',
            userEmail: 'mail4@email.com',
            userImg: image,
            userDate: '2022-02-24 15:04:41'
          },
          {
            userName: 'Aaaaaaaaaaaaa',
            userEmail: 'mail5@email.com',
            userImg: image,
            userDate: '2022-02-24 15:04:41'
          },
          {
            userName: 'Aaaaaaaaaaaaa',
            userEmail: 'mail6@email.com',
            userImg: image,
            userDate: '2022-02-24 15:04:41'
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  .user-body {
    width: calc(100vw - 260px);
    height: 100%;
    position: relative;
    box-sizing: border-box;
    padding: 1rem;

    .table {
      width: 100%;
      border-radius: .5rem;
      box-shadow: 0 0 2px 1px #DFDFDF;
      background-color: #fff;
      overflow: hidden;

      .table-wraper-head {
        width: 100%;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          width: 100%;
          white-space: nowrap;
          font-size: 1em;
        }
      }

      .table-wrapper {
        width: 100%;
        overflow-x: auto;
        border-top: 1px solid #DFDFDF;
        border-bottom: 1px solid #DFDFDF;

        .table-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          place-items: center;
          width: fit-content;
          padding: .5rem 1rem;
          border-bottom: 1px solid #DFDFDF;
          font-weight: 500;
          background-color: transparent;
          font-size: .8em;

          .checkbox {
            padding: 0 1rem;
          }

          .name {
            width: 150px;
            padding-right: 1rem;
          }

          .email {
            width: 300px;
            word-wrap: break-word;
            padding: 0 1rem;
          }

          .userStat {
            width: 85px;
          }

          .userImg {
            position: relative;
            margin: 0 1rem;
            width: 50px;
          }

          .userDate {
            width: 150px;
            padding: 0 1rem;
          }

          .userTurnButton{
              margin-right: 1.5rem;
          }

          .userOperate{
            width: 42px;
            margin-right: 1.5rem;
          }

          .userTurnButton,
          .userDetail {
            border: none;
            border-radius: .25rem;
            color: transparent;
            white-space: nowrap;
            width: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            user-select: none;
          }

          .userDetail {
            width: 42px;
          }
        }

        // &::-webkit-scrollbar {
        //   height: .5rem;
        // }

        // &::-webkit-scrollbar-track {
        //   box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        // }

        // &::-webkit-scrollbar-thumb {
        //   background-color: #ECECEC;
        //   outline: 1px solid #343A40;
        //   border-bottom-left-radius: .5rem;
        //   border-bottom-right-radius: .5rem;
        // }
      }
    }

    .table-wrapper-footer {
      padding: 1rem;
      display: flex;
      justify-content: flex-end;
      background: #F7F7F7;

      .pagination {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border: 1px solid #DEE2E6;
        border-radius: .25rem;
      }
    }
  }

  @media (max-width: 1023px) {
    .user-body {
      width: calc(100vw - 80px);
    }
  }
</style>