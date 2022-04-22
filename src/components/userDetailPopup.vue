<template>
  <div class="pop-Up-banner"></div>
  <div class="popup" :class="{isClosed: isClosed}">
    <div class="popup-head">
      <h4>Дэлгэрэнгүй</h4>

      <div>
        <tableSearch></tableSearch>

        <button class="closePopup" @click="togglePopup()">
          &times;
        </button>
      </div>
    </div>

    <div class="list-table">
      <div class="list-head list-row">
        <p class="name">Нэр</p>
        <p class="register">Register</p>
        <p class="talent-id">Talent id number</p>
        <p class="bank">Банкны данс</p>
        <p class="app-v">App version</p>
        <p class="device">Device</p>
        <p class="income">Ирсэн</p>
        <p class="expired">Хугацаа дууссан</p>
        <p class="decline">Цуцалсан</p>
        <p class="queue">Хүлээгдэж буй</p>
        <p class="completed">Биелсэн</p>
        <p class="operation">Үйлдэл</p>
      </div>

      <div class="list-row">
        <p class="name">
          test.name
        </p>
        <p class="register">
          АА99010101
        </p>
        <p class="talent-id">
          20220405001
        </p>
        <div class="bank">
          <bankAccountButton></bankAccountButton>
        </div>
        <p class="app-v">
          2.1.0
        </p>
        <p class="device">
          Apple Inc IPhone 13 Pro
        </p>
        <p class="income">
          2022-04-05 10:36 AM
        </p>
        <p class="expired">
          2022-04-05 10:36 AM
        </p>
        <p class="decline">
          2022-04-05 10:36 AM
        </p>
        <p class="queue">
          -
        </p>
        <p class="completed">
          -
        </p>
        <button class="operation" @click="userEdit = true">
          Засах
        </button>
      </div>
    </div>
  </div>

  <div class="user-edit-popup-wrapper" v-if="userEdit">
    <div class="header">
      <h4>
        Edit user
      </h4>
      <i class="fa fa-times" @click="userEdit = false"></i>
    </div>
    <form>
      <userEditPopup></userEditPopup>

      <div class="form-footer">
        <div class="cancel" @click="userEdit = false">
          Cancel
        </div>
        <button class="save" @click="userEdit = false">
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  import tableSearch from './tableSearch.vue'
  import bankAccountButton from './bankAccountButton.vue'
  import userEditPopup from './userEditPopup.vue'

  export default {
    name: 'user-detail-popup',
    components: {
      tableSearch,
      bankAccountButton,
      userEditPopup
    },
    data() {
      return {
        isClosed: false,
        userEdit: false
      }
    },
    props: {
      togglePopup: {
        type: String
      },
      name: {
        type: String
      },
      register: {
        type: String
      },
      id: {
        type: String
      },
      appV: {
        type: String
      },
      device: {
        type: String
      },
      income: {
        type: String
      },
      expired: {
        type: String
      },
      decline: {
        type: String
      },
      queue: {
        type: String
      },
      completed: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  .popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    width: calc(100% - 4rem);
    border-radius: .5rem;
    box-shadow: 0 0 3px 1px #0003;
    background: #F4F6F9;
    z-index: 100000;

    .popup-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: .5rem 1rem;
      border-bottom: 1px solid #DFDFDF;

      div {
        display: flex;
        align-items: center;
      }

      .closePopup {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: none;
        font-size: 25px;
        margin-left: 1rem;
      }
    }

    .list-table {
      width: 100%;
      overflow-x: auto;

      .list-row {
        min-width: fit-content;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .5rem 0;
        background: #EEFCFF;
        border-bottom: 1px solid #DFDFDF;

        .name {
          width: 100px;
          white-space: nowrap;
          margin: 0 1rem;
        }

        .register {
          width: 80px;
          white-space: nowrap;
          margin: 0 1rem;
        }

        .talent-id {
          width: 100px;
          white-space: nowrap;
          margin: 0 1rem;
        }

        .bank {
          width: 100px;
          white-space: nowrap;
          margin: 0 1rem;
        }

        .app-v {
          width: 80px;
          white-space: nowrap;
          margin: 0 1rem;
        }

        .device {
          width: 100px;
          margin: 0 1rem;
        }

        .income {
          width: 100px;
          margin: 0 1rem;
        }

        .expired {
          width: 100px;
          margin: 0 1rem;
        }

        .decline {
          width: 100px;
          margin: 0 1rem;
        }

        .queue {
          width: 100px;
          margin: 0 1rem;
        }

        .completed {
          width: 100px;
          margin: 0 1rem;
        }

        .operation {
          width: 2.75;
          white-space: nowrap;
          margin: 0 1rem;
        }

        button.operation {
          border: none;
          width: 4rem;
          height: 2.75rem;
          border-radius: .25rem;
          color: #fff;
          background: #038FDE;
        }

        &.list-head {
          font-weight: 600;
          background: #F4F6F9;
          border-bottom: 0;
        }
      }
    }
  }

  .pop-Up-banner {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #0003;
  }

  .user-edit-popup-wrapper{
    position: absolute;
    z-index: 100000000000000000000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 2px 1px #DFDFDF;
    background: #F4F6F9;
    border-radius: .25rem;
    width: 400px;
    font-size: .9em;

    .header{
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .form-footer{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 1rem 1rem;

      button.save{
          background: #038FDE;
          border: none;
          color: #fff;
          padding: 0;
          height: auto;
          width: auto;
          padding: .5rem 1rem;
          border-radius: .25rem;
        }

      .cancel {
        background: transparent;
        border: 1px solid #D9D9D9;
        color: #000;
        padding: 0;
        height: auto;
        width: auto;
        padding: .5rem 1rem;
        margin-right: 1rem;
        border-radius: .25rem;
      }
    }
  }
</style>