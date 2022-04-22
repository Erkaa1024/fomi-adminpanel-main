<template>
  <div class="list-item" v-bind:class="{ disabled: !isActivated }">
    <div class="checkbox">
      <input type="checkbox" name="user">
    </div>

    <p class="name">
      {{userName}}
    </p>

    <p class="email">
      {{userEmail}}
    </p>

    <div class="userStat" :class="{Deactive: !isActivated}">
      <span>
        {{isActivated ? 'Active' : 'Deactive'}}
      </span>
    </div>

    <div class="userImg">
      <img :src="userImg" alt="">
    </div>

    <p class="userDate">
      {{userDate}}
    </p>

    <button class="userTurnButton" @click="isActivated = !isActivated" v-bind:class="{ activated: isActivated}">
      <span>
        {{isActivated ? 'Идэвхгүй' : 'Идэвхтэй'}} болгох
      </span>
    </button>

    <button class="userOperate" @click="userOP = true">
      <i class="material-icons">star_border</i>
    </button>

    <button class="userDetail" @click="() => togglePopup('buttonTrigger')">
      <i class="fa fa-bars"></i>
    </button>
  </div>

  <userPopup v-if="popupTriggers.buttonTrigger"
  :togglePopup="() => togglePopup('buttonTrigger')">
  </userPopup>

  <div class="user-operation-popup-wrapper" v-if="userOP">
    <div class="header">
      <h4>
        User Info
      </h4>
      <i class="fa fa-times" @click="userOP = false"></i>
    </div>
    <form>
      <userOperationPopup></userOperationPopup>

      <div class="form-footer">
        <button class="cancel" @click="userOP = false">
          Cancel
        </button>
        <button class="save" @click="userOP = false">
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  import userPopup from '../userDetailPopup.vue'
  import userOperationPopup from '../userOperationPopup.vue'
  import {ref} from 'vue'

  export default {
    name: 'list-item',
    components: {
      userPopup,
      userOperationPopup
    },
    props: {
      userName: {
        type: Number,
        required: true
      },
      userEmail: {
        type: Number
      },
      userImg: {
        type: String
      },
      userDate: {
        type: String
      }
    },
    setup() {
      const popupTriggers = ref({
        buttonTrigger: false
      });

      const togglePopup = (trigger) => {
        popupTriggers.value[trigger] = !popupTriggers.value[trigger]
      }

      return {
        userPopup,
        popupTriggers,
        togglePopup
      }
    },
    data() {
      return {
        isActivated: true,
        userOP: false,
        // popups: [
        //   {
        //     name: 'test.name',
        //     register: 'АА99010101',
        //     id: '20220405001',
        //     appV: '2.1.0',
        //     device: 'Apple Inc IPhone Note Mate 13s CE Plus Pro Max Wax Tax Hax Sax Fax Lax Uax Xax Nax Bax Ajax',
        //     income: '2022-04-05 10:36 AM',
        //     expired: '2022-04-05 10:36 AM',
        //     decline: '2022-04-05 10:36 AM',
        //     queue: '-',
        //     completed: '-'
        //   }
        // ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  $active: #52C41A;
  $active--bg: #F3FEF0;
  $deactive: #F5222D;
  $deactive--bg: #FFF1F0;

  .light{
    > .list-item{
      border-top: 1px solid #DEE2E6;
      border-bottom: 1px solid #DEE2E6;
    }
  }

  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    place-items: center;
    width: fit-content;
    min-width: 100%;
    padding: .5rem 1rem;
    border-top: 1px solid #DFDFDF;
    border-bottom: 1px solid #DFDFDF;
    font-size: .9em;
    line-height: 1.1;

    &.disabled > *:not(.userStat, .userTurnButton, .userDetail){
      user-select: none;
      pointer-events: none;
      opacity: .5;
    }

    &:last-child {
      border-bottom: 0;
    }

    .checkbox {
      padding: 0 1rem;
    }

    .phonenumber {
      width: 120px;
    }

    .name {
      width: 150px;
      padding-right: 1rem;
      word-wrap: break-word;
    }

    .email {
      width: 300px;
      word-wrap: break-word;
      padding: 0 1rem;
    }

    .userStat {
      // border-width: 1px;
      // border-style: solid;
      // border-radius: .25rem;
      border-radius: .25rem;
      padding: .25rem .5rem;
      width: 85px;
      text-align: center;
      // background-color: $active--bg;
      // color: $active;
      // border-color: $active;
      background-color: $active;
      color: $active--bg;

      &.Deactive {
        // background-color: $deactive--bg;
        // color: $deactive;
        // border-color: $deactive;
        background-color: $deactive;
        color: $deactive--bg;
      }
    }

    .userImg {
      position: relative;
      width: 50px;
      height: 50px;
      border: 1px solid #DFDFDF;
      border-radius: .5rem;
      overflow: hidden;
      margin: 0 1rem;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .userDate{
      width: 150px;
      padding: 0 1rem;
    }

    .userOperate{
      border: none;
      width: 50px;
      height: 100%;
      margin-right: 1.5rem;
      border-radius: .25rem;
      background-color: #038FDE;
      color: #fff;
      height: 36px;
      width: 42px;
    }

    .userTurnButton{
      border: none;
      border-radius: .25rem;
      background-color: #FF4D4FBF;
      color: #fff;
      white-space: nowrap;
      height: 36px;
      width: 150px;
      margin-right: 1.5rem;

      &.activated{
        background-color: #FF4D4F;
      }
    }

    .userDetail{
      border: none;
      border-radius: .25rem;
      background-color: #038FDE;
      color: #fff;
      white-space: nowrap;
      height: 36px;
      width: 42px;
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

  .user-operation-popup-wrapper{
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

      button{
        padding: 0;
        height: auto;
        width: auto;
        padding: .5rem 1rem;
        border-radius: .25rem;
        cursor: pointer;

        &.save{
          background: #038FDE;
          border: none;
          color: #fff;
        }

        &.cancel {
          background: transparent;
          border: 1px solid #D9D9D9;
          color: #000;
          margin-right: 1rem;
        }
      }
    }
  }
</style>