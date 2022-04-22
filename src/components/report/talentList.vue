<template>
  <tr>
    <td>{{ tNumber }}</td>
    <td>{{ tPhoneNumber }}</td>
    <td>{{ tName }}</td>
    <td>{{ tGmail }}</td>
    <td>{{ tRegister }}</td>
    <td>{{ tActive }}</td>
    <td>{{ tPremession }}</td>
    <td>{{ tBankname }}</td>
    <td>{{ tBanknumber }}</td>
    <td>{{ tDate }}</td>
    <button class="userDetail" @click="popdetail = true">
      <i class="fa fa-bars"></i>
    </button>

    <div class="popup-test" v-if="popdetail">
      <div class="pop-wrapper">
        <div class="pop-head">
          <p>Popup</p>
          <i class="fa fa-times" @click="popdetail = false"></i>
        </div>

        <div class="pop-body">
          <tr class="head">
            <td>#</td>
            <td>ID дугаар</td>
            <td>Нэр</td>
            <td>Банкны данс</td>
            <td>Биелүүлсэн захиалга</td>
            <td>Нийт орлого (₮)</td>
            <td>Суутгасан татвар</td>
            <td>Талент руу шилжсэн</td>
            <td>Үйлдэл</td>
            <td>Бүртгүүлсэн огноо</td>
            <td>Дэлгэрэнгүй <br />тайлан харах</td>
          </tr>
            <tr>
              <td>{{ tNumber }}</td>
              <td>{{ tPhoneNumber }}</td>
              <td>{{ tName }}</td>
              <td>{{ tGmail }}</td>
              <td>{{ tRegister }}</td>
              <td >{{ tActive }}</td>
              <td>{{ tPremession }}</td>
              <td>{{ tBankname }}</td>
              <td>{{ tBanknumber }}</td>
              <td>{{ tDate }}</td>
            </tr>
         
        </div>

        <div class="pop-foot">
          <button class="cancelBtn" @click="popdetail = false">Цуцлах</button>
          <button class="confirmBtn" @click="popdetail = false">ОК</button>
        </div>
      </div>
    </div>
  </tr>
</template>

<script>
export default {
  data() {
    return {
      popdetail: false,
    };
  },
  props: {
    tNumber: {
      type: String,
    },
    tPhoneNumber: {
      type: Number,
    },
    tName: {
      type: String,
    },
    tGmail: {
      type: String,
    },
    tRegister: {
      type: String,
    },
    tActive: {
      type: String,
    },
    tPremession: {
      type: String,
    },
    tBankname: {
      type: String,
    },
    tBanknumber: {
      type: Number,
    },
    tDate: {
      type: String,
    },
  },
};
</script>
<style lang="sass"></style>
