<template>
  <tr>
    <td>
      {{id}}
    </td>
    <td>
      {{name}}
    </td>
    <td>
      {{receiver}}
    </td>
    <td class="status">
      <p :class="status">{{status}}</p>
    </td>
    <td class="type" @click="msgPopup = true">
      <p class="type">{{type}}</p>
    </td>
    <td>
      {{createdDate}}
    </td>
    <td>
      {{expiredDate}}
    </td>
    <td>
      {{promo}}
    </td>
    <td class="fulfilled" :class="isFulfilled">
      <p> - </p>
      <button>Fulfilled file</button>
    </td>
  </tr>
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
</template>

<script>
  export default {
    name: 'joursList',
    data() {
      return {
        msgPopup: false
      }
    },
    props: {
      id: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      receiver: {
        type: String,
        required: true
      },
      status: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      createdDate: {
        type: String,
        required: true
      },
      expiredDate: {
        type: String,
        required: true
      },
      promo: {
        type: String,
        required: true
      },
      isFulfilled: {
        type: String,
        required: true
      },
      requestMessage: {
        type: String
      }
    },
  }
</script>

<style lang="scss" scoped>
  tr {
    min-width: 100%;
    width: fit-content;
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
</style>