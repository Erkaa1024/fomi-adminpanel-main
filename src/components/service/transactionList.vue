<template>
  <tr>
    <td>
      {{id}}
    </td>
    <td>
      {{transactionId}}
    </td>
    <td>
      {{star}}
    </td>
    <td>
      {{name}}
    </td>
    <td>
      {{cost}}
    </td>
    <td class="status">
      <p :class="orderStatus">{{orderStatus}}</p>
    </td>
    <td class="type" @click="msgPopup = true">
      <p class="type">{{type}}</p>
    </td>
    <td>
      {{orderDate}}
    </td>
    <td class="uppercase orderType">
      <p :class="orderType">{{orderType}}</p>
    </td>
    <td class="uppercase bankStatus">
      <p :class="bankStatus">{{bankStatus}}</p>
    </td>
    <td class="refund" :class="isRefund">
      <button class="detailBtn" @click="tdp = true">
        <i class="fa fa-bars"></i>
      </button>
      <button class="refundBtn"
      @click="uWantToRefund = true">
        Refund
        </button>
    </td>
  </tr>

  <div class="refund-modal" v-if="uWantToRefund">
    <p>
      <i class="fa fa-circle-info"></i>
      Are you sure?
    </p>

    <div>
      <button class="cancelBtn" @click="uWantToRefund = false">
        Үгүй
      </button>
      <button class="confirmBtn" @click="Refund">
        Тийм
      </button>
    </div>
  </div>

  <div class="popup-banner" v-if="msgPopup"></div>
  <div class="msgPopup" v-if="msgPopup">
    <div class="head">
      <p>Тайлбар</p>
      <i class="fa fa-times" @click="msgPopup = false"></i>
    </div>

    <div class="text-body">
      <p>
        {{requestMessage}}
      </p>
    </div>

    <div class="foot">
      <button @click="msgPopup = false">OK</button>
    </div>
  </div>

  <div class="tdp-comp" v-if="tdp">
    <div class="tdp-body">
      <div class="head">
        <p>
          Дэлгэрэнгүй
        </p>

        <i class="fa fa-times" @click="tdp = false"></i>
      </div>

      <transactionDetailPopup/>

      <div class="foot">
        <button @click="tdp = false">Цуцлах</button>
        <button @click="tdp = false">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
  import transactionDetailPopup from '../../components/service/transactionDetailPopup.vue'

  export default {
    name: 'joursList',
    components:{
      transactionDetailPopup
    },
    data() {
      return {
        msgPopup: false,
        tdp: false,
        isRefund: false,
        uWantToRefund: false
      }
    },
    props: {
      id: {
        type: Number,
        required: true
      },
      transactionId: {
        type: String,
        required: true
      },
      star: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      cost: {
        type: String,
        required: true
      },
      orderStatus: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      orderDate: {
        type: String,
        required: true
      },
      orderType: {
        type: String,
        required: true
      },
      bankStatus: {
        type: String,
        required: true
      },
      requestMessage: {
        type: String
      }
    },
    methods: {
      deleteBankAccount() {
        this.uWantToRefund = false
        this.isRefund = true
      },
    }
  }
</script>

<style lang="scss" scoped>
  tr {
    min-width: 100%;
    width: fit-content;
    
    td{
      &:nth-child(2){
        font-weight: 700;
      }

      &:is(:nth-child(3), :nth-child(4)){
        color: #038FDE;
        font-weight: 500;
      }

      &.refund {
        display: flex;
        align-items: center;

        &.yes {
          button.refundBtn {
            display: block;
          }
        }

        &.no {
          button.refundBtn {
            display: none;
          }
        }

        button {
          border: none;
          border-radius: .25rem;
          padding: .75rem 1rem;
          font-weight: 600;
          color: #fff;
          background: #038FDE;

          &.refundBtn{
            margin-left: 1rem;
          }
        }
      }
    }
  }

  .refund-modal {
    position: fixed;
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

      button{
        padding: .25rem .5rem;
        height: auto;
        border-radius: .25rem;

        &.cancelBtn {
          background: transparent;
          border: 1px solid #D9D9D9;
          color: #000;
        }

        &.confirmBtn {
          background: #038FDE;
          border: none;
          color: #fff;
        }
      }
    }
  }

  .popup-banner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #0003;
    z-index: 999999999999999999999998;
  }

  .msgPopup {
    position: fixed;
    top: 50%;
    left: 50%;
    max-width: calc(100vw - 260px);
    width: 400px;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 2px 1px #E8E8E8;
    background: #fff;
    border-radius: .5rem;
    z-index: 999999999999999999999999;

    .head {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;

      p {
        font-weight: 600;
      }
    }

    .text-body {
      width: 100%;
      border-top: 1px solid #E8E8E8;
      border-bottom: 1px solid #E8E8E8;
      padding: 1rem;
    }

    .foot {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding: 1rem;

      button {
        background: #038FDE;
        border: none;
        border-radius: .25rem;
        color: #fff;
        padding: .5rem 1rem;
      }
    }
  }

  .tdp-comp {
    position: fixed;
    top: 0;
    right: 0;
    width: calc(100vw - 260px);
    height: 100vh;
    background: #0003;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;

    .tdp-body{
      width: auto;
      max-width: calc(100% - 6rem);
      background: #fff;
      box-shadow: 0 0 2px 1px #DFDFDF;
      border-radius: .5rem;
      // overflow: hidden;

      .head {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: thin solid #DFDFDF;
        padding: 1rem;

        p {
          font-weight: 600;
        }
      }

      .foot {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 1rem;

        button {
          background: #038FDE;
          border: none;
          border-radius: .25rem;
          color: #fff;
          padding: .5rem 1rem;

          &:first-child{
            margin-right: 1rem;
            border: 1px solid #E8E8E8;
            background: transparent;
            color: #000;
          }
        }
      }
    }
  }

  @media (max-width: 1023px) {
    .tdp-comp{
      width: calc(100vw - 80px);

      .tdp-body{
        width: calc(100% - 6rem);
      }
    }
  }
</style>