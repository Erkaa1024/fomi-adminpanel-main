<template>
  <div class="container">
    <div class="login-form">
      <div class="title">
        <img src="../assets/images/fomi-logo.png" alt="">
      </div>
      <div class="form-container">
        <form action="">
          <vInput
          v-for="input in inputs"
          :key="input"
          :inputType="input.inputType"
          :inputName="input.inputName"
          :inputPlaceholder="input.inputPlaceholder"
          :inputIcon="input.inputIcon"
          />

          <div class="remember-and-submit">
            <div>
              <input type="checkbox" name="rememberMe" id="rememberMe">
              <label for="rememberMe">Remember Me</label>
            </div>

            <router-link to="/dashboard">
              <input @click="clicked" type="submit" value="Sign In">
            </router-link>
          </div>
        </form>

        <!-- <socialLogin
        v-for="socialBtn in socialBtns"
        :key="socialBtn"
        :socialBtnColor="socialBtn.socialBtnColor"
        :socialIcon="socialBtn.socialIcon"
        :socialLoginLabel="socialBtn.socialLoginLabel"
        /> -->

        <router-link to="./forgot">
          <p>
              <span>Forgot password</span>
          </p>
        </router-link>
        <router-link to="./register">
          <p>
            <span>Register</span>
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import vInput from '../components/LoginOrRegisterInput.vue'
import socialLogin from '../components/socialLoginBtn.vue'
import router from '../main.js'

export default {
  components: {
    vInput,
    socialLogin
  },
  methods: {
    clicked() {

      router.replace('/');
    }
  },

  data () {
    return {
      inputs: [
        {
          inputType: "email",
          inputName: "Email",
          inputPlaceholder: "Email",
          inputIcon: "email"
        },
        {
          inputType: "password",
          inputName: "Password",
          inputPlaceholder: "Password",
          inputIcon: "lock"
        }
      ],
      socialBtns: [
        {
          socialBtnColor: "#007BFF",
          socialIcon: "fa-brands fa-facebook",
          socialLoginLabel: "Sign in using Facebook"
        },
        {
          socialBtnColor: "#DC3545",
          socialIcon: "fa-brands fa-google-plus",
          socialLoginLabel: "Sign in using Google+"
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
$tablet: 768px;
$laptop: 1024px;
$laptop-lg: 1440px;
$desktop: 1920px;

.container{
  width: 100vw;
  height: 100vh;
  background: #E9ECEF;
  display: flex;
  justify-content: center;
  place-items: center;

  .login-form{
    position: relative;
    background-color: #fff;
    width: 360px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 0 1px rgb(0 0 0 / 13%),
                0 1px 3px rgb(0 0 0 / 20%);

    &::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 3px;
      width: 100%;
      background: linear-gradient(to right, #D62702, #FF7000);
    }

    .title{
      width: 100%;
      padding: 12px 20px;
      border-bottom: 1px solid #DFDFDF;
      display: flex;
      align-items: center;
      justify-content: center;

      img{
        height: 4rem;
        width: auto;
      }
    }

    .form-container{
      width: 100%;
      padding: 20px;
      display: table;

      .remember-and-submit{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: .5rem;

        div{
          display: flex;
          justify-content: space-between;
          align-items: center;

          input[type="checkbox"]{
            outline: none;
            content: none;
            border-radius: 1px;
            margin: 0;
            height: 22px;
            width: 22px;
            border: 1px solid #D3CFC8;
            margin-right: .5rem;
          }

          label{
            font-weight: 700;
            line-height: 22px;
          }
        }

        input[type="submit"]{
          background: linear-gradient(to right, #D62702, #FF7000);
          color: #fff;
          cursor: pointer;
          border: none;
          height: 38px;
          width: 96px;
          border-radius: 4px;
          font-weight: 500;
          font-size: 1em;

          &:hover{
            background-color: #0061C9;
          }
        }
      }

      a{
        text-decoration: none;

        p{
          margin: 12px 0 0;
          font-size: 1em;

          span{
            color: #007BFF;

            &:hover{
              color: #0056B3;
            }
          }
        }
      }
    }
  }
}
</style>