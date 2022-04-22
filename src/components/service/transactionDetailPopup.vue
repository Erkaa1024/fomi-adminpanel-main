<template>
  <div class="tdpbody">
    <div class="table">
      <table class="tdp">
        <tr class="thead">
          <td>
            Төлбөрийн дугаар
          </td>
          <td>
            Банк
          </td>
          <td>
            Төрөл
          </td>
          <td>
            Данс баталгаажсан
          </td>
        </tr>
        <tr class="tbody">
          <td>
            P22011017048
          </td>
          <td>
            <p class="p1">
              qpay
            </p>
          </td>
          <td>
            <p class="p2" @click="msgPopup=true">
              Loveyou
            </p>
          </td>
          <td>
            <p class="p3 yes">
            <!-- <p class="p3 no"> -->
              Тийм
            </p>
          </td>
        </tr>
      </table>
    </div>
  </div>

  <div class="msgPopup-wrapper" v-if="msgPopup">
    <div class="popup-banner"
    v-if="msgPopup"
    @click="msgPopup = false">
    </div>
    <div class="msgPopup">
      <div class="head">
        <div class="head-control">
          <p>Тайлбар</p>
          <i class="fa fa-times" @click="msgPopup = false"></i>
        </div>

        <div class="fromTo">
          <div class="from">
            <p class="def">Хэнээс -</p> <p>Danzan_OG</p>
          </div>
          <div class="to">
            <p class="def">Хэнд -</p> <p>Dondog_EG</p>
          </div>
        </div>
      </div>

      <div class="text-body">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum aut soluta fuga nam, reiciendis veritatis maiores delectus commodi consequatur. Voluptate delectus harum illo est pariatur consectetur corporis vitae beatae! Cum?
        </p>
      </div>

      <div class="foot">
        <button class="editMsg" @click="mePopup = true">Засах</button>

        <div class="close">
          <button @click="msgPopup = false">Цуцлах</button>
          <button @click="msgPopup = false">OK</button>
        </div>
      </div>
    </div>

    <div class="msgEditPopup" v-if="mePopup">
      <div class="me-banner"></div>

      <div class="me-wrapper">
        <div class="me-head">
          <p>Тайлбар засах</p>
          <i class="fa fa-times" @click="mePopup=false"></i>
        </div>
        <div class="me-body">
          <p>Дэлгэрэнгүй</p>
          <textarea name="order-msg-edit" rows="10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius saepe expedita cum dolorem possimus sunt dolor distinctio fuga, id fugiat quam ducimus optio? Est, quae sunt deserunt ad ea amet.
          </textarea>
        </div>
        <div class="me-foot">
          <button @click="mePopup=false">Цуцлах</button>
          <button @click="mePopup=false">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msgPopup: false,
        mePopup: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tdpbody {
    width: 100%;
    height: auto;

    .table {
      width: 100%;
      padding: 0 1rem;
      overflow-x: auto;
      box-shadow: unset;
      border-radius: 0;
      border: none;
      background: none;

      table.tdp {
        min-width: 100%;
        width: fit-content;

        .thead {
          border-bottom: thin solid #DFDFDF !important;

          td {
            padding: 1rem;
            font-weight: 600;
          }
        }

        .tbody {
          border-top: thin solid #DFDFDF !important;

          td {
            padding: 1rem;

            &:first-child {
              font-weight: 600;
            }

            p {
              border-radius: 9999px;
              padding: 0 1rem;
              font-weight: 500;
              float: left;
              border-width: thin;
              border-style: solid;
              text-align: center;

              &.p1 {
                color: #37A0FF;
                border-color: #92D5FF;
                background-color: #E6F7FF;
                text-transform: uppercase;
              }

              &.p2 {
                color: #722ED1;
                border-color: #D3ADF7;
                background-color: #F9F0FF;
                cursor: pointer;
              }

              &.p3 {
                &.yes {
                  color: #FAAD14;
                  border-color: #FFE58F;
                  background-color: #FFFBE6;
                }

                &.no {
                  color: #F63A45;
                  border-color: #FBC4A6;
                  background-color: #FFF1F0;
                }
              }
            }
          }
        }
      }
    }
  }

  table,
  th,
  td {
    border-collapse: separate;
    border-spacing: 0;
  }

  .msgPopup-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    width: calc(100vw - 260px);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999999999999999999997;

    .popup-banner {
      position: absolute;
      top: 0;
      right: 0;
      width: calc(100vw - 260px);
      height: 100%;
      background: #0003;
      z-index: 999999999999999999999998;
    }

    .msgPopup {
      position: relative;
      width: 600px;
      box-shadow: 0 0 2px 1px #E8E8E8;
      background: #fff;
      border-radius: .5rem;
      z-index: 999999999999999999999999;

      .head {
        width: 100%;
        padding: 1rem;
        
        .head-control, .fromTo{
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;

          p{
            float: left;
            
            &.def{
              padding-right: .5rem;
              font-weight: 500;
            }
          }
        }

        .fromTo{
          display: block;
          margin-top: 1rem;
          font-weight: normal;

          .from, .to{
            display: flex;
            width: 100%;
          }
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
        justify-content: space-between;
        padding: 1rem;

        button.editMsg{
          background: #038FDE;
          border: none;
          border-radius: .25rem;
          color: #fff;
          padding: .5rem 1rem;
        }

        .close{
          display: flex;
          justify-content: flex-end;

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

    .msgEditPopup{
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: calc(100vw - 260px);
      z-index: 10000000000;
      display: flex;
      align-items: center;
      justify-content: center;

      .me-banner{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0007;
      }

      .me-wrapper{
        position: relative;
        width: 400px;
        background: #fff;
        border-radius: .5rem;
        box-shadow: 0 0 2px 1px #E8E8E8;

        .me-head{
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          border-bottom: 1px solid #E8E8E8;
          font-weight: 600;
        }

        .me-body{
          width: 100%;
          padding: 1rem;

          p{
            margin-bottom: 1rem;
          }

          textarea{
            width: 100%;
            resize: vertical;
            font-family: inherit;
            padding: 1rem;

            &:focus{
              outline: none;
            }
          }
        }

        .me-foot{
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 1rem;
          border-top: 1px solid #E8E8E8;

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
  }

  @media (max-width: 1023px) {
    .msgPopup-wrapper,
    .msgPopup-wrapper :is(.popup-banner, .msgEditPopup) {
      width: calc(100vw - 80px);
    }
  }
</style>