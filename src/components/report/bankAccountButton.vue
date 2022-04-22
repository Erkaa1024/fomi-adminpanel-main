<template>
  <div class="bank-button-box">
    <button class="building" @click="bankAccountModal" :class="{deleted: deleted}">
      <i class="fa fa-building-columns"></i>
    </button>
    <button class="xmark" @click="uWantToDelete = true" :class="{deleted: deleted}">
      <i class="fa fa-circle-xmark" @click="hidden = true"></i>
    </button>

    <div class="bank-account-delete-modal" v-if="uWantToDelete">
      <p>
        <i class="fa fa-circle-info"></i>
        Are you sure?
      </p>

      <div>
        <button class="cancelBtn" @click="uWantToDelete = false">
          Үгүй
        </button>
        <button class="confirmBtn" @click="deleteBankAccount">
          Тийм
        </button>
      </div>
    </div>
  </div>

  <div class="bank-account-popup" :class="{hidden: hidden}">
    <div class="bank-account-popup-header">
      <h4>User Bank Info</h4>

      <i class="fa fa-times" @click="hidden = true"></i>
    </div>

    <div class="bank-account-popup-wrapper">
      <bankAccountPopup></bankAccountPopup>
    </div>

    <div class="bank-account-popup-footer">
      <button class="cancelBtn" @click="hidden = true">
        Цуцлах
      </button>
      <button class="confirmBtn" @click="editBankInfo">
        Ok
      </button>
    </div>
  </div>
</template>

<script>
  import bankAccountPopup from './bankAccountPopup.vue'

  export default {
    name: 'bankAccountInfo',
    components: {
      bankAccountPopup
    },
    data() {
      return {
        uWantToDelete: false,
        deleted: false,
        hidden: true,
      }
    },
    methods: {
      deleteBankAccount() {
        this.uWantToDelete = false
        this.deleted = true

        document.querySelector('.xmark').setAttribute('disabled', 'true')
      },
      bankAccountModal() {
        this.hidden = false
        document.querySelector('.xmark').removeAttribute('disabled')
      },
      editBankInfo() {
        this.deleted = false
        this.hidden = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bank-button-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      border: none;
      width: 2.75rem;
      height: 2.75rem;
      border-radius: .25rem;
      color: #fff;

      &.deleted {
        color: #000;
        border-width: 1px;
        border-color: #D9D9D9;
      }

      &.building {
        background: #038FDE;

        &.deleted {
          background: transparent;
          border-style: dashed;
        }
      }

      &.xmark {
        background: #FF4D4F;

        &.deleted {
          background: transparent;
          border-style: solid;
        }
      }
    }

    .bank-account-delete-modal {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      border-radius: .5rem;
      box-shadow: 0 0 2px 1px #DFDFDF;
      padding: 1rem 2rem;
      z-index: 1000000000000;

      p {
        margin-bottom: 1rem;
        width: 100%;

        i {
          color: #FA8C16;
          padding-right: .5rem;
        }
      }

      div {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .cancelBtn {
          background: transparent;
          border: 1px solid #D9D9D9;
          color: #000;
          padding: 0;
          height: auto;
          padding: .25rem 0;
        }

        .confirmBtn {
          background: #038FDE;
          color: #fff;
          padding: 0;
          height: auto;
          padding: .25rem 0;
        }
      }
    }
  }

  .bank-account-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 400px;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: .5rem;
    box-shadow: 0 0 2px 1px #DFDFDF;
    z-index: 1000000000000;

    &.hidden {
      display: none;
    }

    .bank-account-popup-header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      border-bottom: 1px solid #DFDFDF;
    }

    .bank-account-popup-wrapper {
      width: 100%;
      padding: 1rem;
    }

    .bank-account-popup-footer {
      width: 100%;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-top: 1px solid #DFDFDF;

      .cancelBtn {
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

      .confirmBtn {
        background: #038FDE;
        border: none;
        color: #fff;
        padding: 0;
        height: auto;
        width: auto;
        padding: .5rem 1rem;
        border-radius: .25rem;
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
    z-index: 10000000;
  }
</style>