<template>
  <div class="list-item" v-bind:class="{ disabled: !isActivated }">
    <div class="checkbox">
      <input type="checkbox" name="user">
    </div>

    <p class="phonenumber">
      {{userNumber}}
    </p>

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

    <p class="userPermission">
      role_{{userPermission}}
    </p>

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

    <button class="userDetail" @click="() => togglePopup('buttonTrigger')">
      <i class="fa fa-bars"></i>
    </button>
  </div>

  <userPopup v-if="popupTriggers.buttonTrigger" :togglePopup="() => togglePopup('buttonTrigger')">
  </userPopup>
</template>

<script>
  import userPopup from '../talentDetailPopup.vue'
  import {
    ref
  } from 'vue'

  export default {
    name: 'list-item',
    components: {
      userPopup
    },
    props: {
      userNumber: {
        type: Number
      },
      userName: {
        type: Number,
        required: true
      },
      userEmail: {
        type: Number
      },
      userStatus: {
        type: String,
        required: true
      },
      userPermission: {
        type: String
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  $active: #52C41A;
  $active--bg: #F3FEF0;
  $deactive: #F5222D;
  $deactive--bg: #FFF1F0;

  .light {
    >.list-item {
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
      width: 350px;
      word-wrap: break-word;
      padding: 0 2rem;
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

    .userPermission {
      text-transform: uppercase;
      width: calc(160px + 2rem);
      padding: 0 1rem;
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

    .userDate {
      width: 150px;
      padding: 0 1rem;
    }

    .userTurnButton {
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

    .userDetail {
      border: none;
      border-radius: .25rem;
      background-color: #038FDE;
      color: #fff;
      white-space: nowrap;
      height: 36px;
      width: 42px;
    }
  }
</style>