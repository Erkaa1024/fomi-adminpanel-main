<template>
  <div class="pop-Up-banner"></div>
  <div class="popup" :class="{isClosed: isClosed}">
    <div class="popup-head">
      <h4>Дэлгэрэнгүй</h4>

      <div>
        <button class="closePopup" @click="togglePopup()">
          &times;
        </button>
      </div>
    </div>

    <div class="list-table">
      <div class="list-head list-row">
        <p class="name">Нэр</p>
        <p class="mail">Имэйл</p>
        <p class="social">Social Account</p>
        <p class="bank">Банкны данс</p>
        <p class="operation">Үйлдэл</p>
      </div>

      <div class="list-row">
        <p class="name">
          test.name
        </p>
        <p class="mail">
          danzan_og@gmail.com
        </p>
        <p class="social">
          Social Account
        </p>
        <div class="bank">
          <bankAccountButton></bankAccountButton>
        </div>
        <button class="operation" @click="talentOP = true">
          Татгалзах
        </button>
      </div>
    </div>

    <div class="popup-foot">
      <div class="nemeh"></div>
      <button class="closePopup" @click="togglePopup()">
        Цуцлах
      </button>
      <button class="savePopup" @click="togglePopup()">
        OK
      </button>
    </div>
  </div>
</template>

<script>
  import bankAccountButton from '../bankAccountButton.vue'

  export default {
    name: 'talent-detail-popup',
    components: {
      bankAccountButton
    },
    data() {
      return {
        isClosed: false,
        talentOP: false
      }
    },
    props: {
      togglePopup: {
        type: String
      },
      name: {
        type: String
      },
      mail: {
        type: String
      },
      id: {
        social: String
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
    font-size: .9em;

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
        border-bottom: 1px solid #DFDFDF;

        &:hover{
          background: #EEFCFF;
        }

        .name {
          width: 100px;
          white-space: nowrap;
          margin: 0 1rem;
        }

        .mail {
          width: 200px;
          margin: 0 1rem;
        }

        .social {
          width: 100px;
          white-space: nowrap;
          margin: 0 1rem;
        }

        .bank {
          width: 100px;
          white-space: nowrap;
          margin: 0 1rem;
        }

        .operation {
          width: 6rem;
          white-space: nowrap;
          margin: 0 1rem;
        }

        button.operation {
          border: none;
          width: 6rem;
          height: 2.75rem;
          border-radius: .25rem;
          color: #fff;
          background: #FF4D4F;
        }

        &.list-head {
          font-weight: 600;
          background: #F4F6F9;
          border-bottom: 0;
        }
      }
    }

    .popup-foot{
      float: right;
      padding: 1rem;

      button{
        padding: .5rem 1rem;
        border-radius: .25rem;

        &.closePopup{
          border: 1px solid #D9D9D9;
          background: #fff;
          margin-right: 1rem;

          &:hover{
            color: #038FDE;
            border-color: #038FDE;
          }
        }

        &.savePopup{
          background: #038FDE;
          color: #fff;
          border: none;

          &:hover{
            background: #1BB1ED;
          }
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

  .talent-operation-popup-wrapper{
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