<template>
  <div class="add-talent-body">
    <div class="table">
      <div class="header">
        <p class="title">REQUESTED TALENT USERS</p>

        <div class="table-change-buttons">
          <div class="btn" v-on:click="activeTC1()"
          :class="{active: activated}">
            <p>Хэрэглэгчдэд мэдэгдэл илгээх</p>
          </div>
          <div class="space"></div>
          <div class="btn" v-on:click="activeTC2()"
          :class="{active: isactivated}">
            <p>Жагсаалтнаас хасагдсан хэрэглэгчид</p>
          </div>
        </div>
      </div>

      <div class="body">
        <table v-if="activated">
          <thead>
            <tr class="head">
              <td>
                #
              </td>
              <td>
                Нэр
              </td>
              <td>
                И-мэйл
              </td>
              <td>
                Зураг
              </td>
              <td class="status">
                Active
              </td>
              <td>
                &nbsp;
              </td>
            </tr>
          </thead>
          <tbody>
            <deletedList
            v-for="nRow in nRows"
            :key="nRow"
            :id="nRow.id"
            :name="nRow.name"
            :mail="nRow.mail"
            :avatar="nRow.avatar"
            :status="nRow.status"/>
          </tbody>
        </table>
        <table v-if="isactivated">
          <thead>
            <tr class="head">
              <td>
                #
              </td>
              <td>
                Нэр
              </td>
              <td>
                И-мэйл
              </td>
              <td>
                Зураг
              </td>
              <td class="status">
                Active
              </td>
              <td>
                &nbsp;
              </td>
            </tr>
          </thead>
          <tbody>
            <deletedList
            v-for="dRow in dRows"
            :key="dRow"
            :id="dRow.id"
            :name="dRow.name"
            :mail="dRow.mail"
            :avatar="dRow.avatar"
            :status="dRow.status"/>
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
  import deletedList from '../../components/request/deletedList.vue'

  export default {
    components:{
      deletedList
    },
    data() {
      return {
        activated: true,
        isactivated: false,
        dRows:[
          {
            id: '1',
            name: 'Danzan_OG',
            mail: 'danzan_og@yahoo.com',
            avatar: '/img/user-solid.94e1224d.svg',
            status: 'Active'
          },
          {
            id: '2',
            name: 'Dondog_EG',
            mail: 'danzan_og@yahoo.com',
            avatar: '/img/user-solid.94e1224d.svg',
            status: 'Inactive'
          },
        ],
        nRows:[
          {
            id: '1',
            name: 'Danzan_OG',
            mail: 'danzan_og@yahoo.com',
            avatar: '/img/user-solid.94e1224d.svg',
            status: 'Active'
          }
        ],
      }
    },
    methods:{
      activeTC1(){
        this.activated = true
        this.isactivated = false
      },
      activeTC2(){
        this.activated = false
        this.isactivated = true
      }
    }
  }
</script>

<style lang="scss">
  $border-color: #E8E8E8;

  .add-talent-body {
    // width: calc(100vw - 260px);
    width: 100%;
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
      padding: 1rem;

      .header {
        .title{
          margin-bottom: 1rem;
          font-size: .9em;
          font-weight: 600;
        }

        .table-change-buttons {
          display: flex;
          user-select: none;

          .space{
            width: .25rem;
            border-bottom: 1px solid $border-color;
          }

          .btn {
            padding: .5rem 1rem;
            border: 1px solid $border-color;
            border-top-left-radius: .5rem;
            border-top-right-radius: .5rem;

            &.active{
              border-bottom: none;
              font-weight: 600;
              color: #038FDE;
            }
          }
        }
      }

      .body{
        position: relative;
        display: table;
        width: 100%;
        margin-bottom: 1rem;
        
        table{
          width: fit-content;
          min-width: 100%;
          border-bottom: 1px solid $border-color;
          border-bottom-left-radius: .5rem;
          border-bottom-right-radius: .5rem;
          color: #535353;

          tr.head{
            td{
              font-weight: 600;
              border-bottom: 1px solid $border-color;

              &.img-col-header{
                text-align: center;
              }
            }
          }

          tr{
            td{
              position: relative;
              padding: 1rem;

              &.img-col{
                img{
                  width: 50px;
                  border-radius: .25rem;
                  border: 1px solid $border-color;
                }
              }

              &.status{
                width: 100px;
                text-align: center;

                p{
                  border-radius: 9999px;
                  padding: 0 1rem;
                  font-weight: 500;

                  &.Active{
                    color: #68CC3D;
                    border: thin solid #68CC3D;
                    background: #F6FFED;
                  }

                  &.Inactive{
                    color: #F5222D;
                    border: thin solid #F5222D;
                    background: #FFF1F0;
                  }
                }
              }

              button {
                border: none;
                width: 2.75rem;
                height: 2.75rem;
                border-radius: .25rem;
                color: #fff;
                background: #038FDE;
              }
            }
          }
        }
      }

      .footer{
        position: relative;
        width: 100%;

        .pagination{
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
</style>