<template>
  <tr>
    <td>{{id}}</td>
    <td>
      {{name}}
    </td>
    <td>
      {{mail}}
    </td>
    <td class="img-col">
      <img v-bind:src="avatar" alt="">
    </td>
    <td class="status">
      <p :class="status">{{status}}</p>
    </td>
    <td>
      <button class="detail" @click="() => togglePopup('buttonTrigger')">
        <i class="fa fa-bars"></i>
      </button>
    </td>
  </tr>

  <deletedUserPopup v-if="popupTriggers.buttonTrigger" :togglePopup="() => togglePopup('buttonTrigger')">
  </deletedUserPopup>
</template>

<script>
  import deletedUserPopup from './deletedUserPopup.vue'
  import {
    ref
  } from 'vue'

  export default {
    name: 'deletedList',
    components:{
      deletedUserPopup
    },
    props:{
      id:{
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      mail: {
        type: String,
        required: true
      },
      avatar: {
        type: String,
        required: true
      },
      status: {
        type: String,
        required: true
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
        deletedUserPopup,
        popupTriggers,
        togglePopup
      }
    },
  }
</script>