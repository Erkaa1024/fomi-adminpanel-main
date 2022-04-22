<template>
  <div class="menu" :class="{changed: changed}">
    <div class="menu-head">
      <h3 class="sub-title">Хянах самбар</h3>
      <i class="material-icons" @click="changed">menu</i>
    </div>


    <MenuItem v-for="(item, index) in menuTree" :key="index" :label="item.label" :icon="item.icon" :depth="0"
      :data="item.children" :path="item.path" />
  </div>
</template>

<script>
  import MenuItem from '../components/MenuItem.vue'

  export default {
    name: "NavMenu",
    data: () => ({
        menuTree: [
        {
          label: "Хэрэглэгчид",
          icon: "fa fa-address-book",
          children: [{
              label: "Талент",
              icon: "fa fa-star",
              path: "/users/talent"
            },
            {
              label: "Энгийн",
              icon: "fa-regular fa-user",
              path: "/users/user"
            },
          ]
        },
        {
          label: "Санал хүсэлт",
          icon: 'fa-regular fa-pen-to-square',
          children: [{
              label: "Од болох",
              icon: "fa-regular fa-star",
              path: "/request/become-star"

            },
            {
              label: "Од нэмэх хүсэлт",
              icon: "fa fa-message",
              path: "/request/add-star"

            }
          ]
        },
        {
          label: "Үйлчилгээ",
          icon: "fa fa-file-invoice-dollar",
          children: [{
              label: "Жүр үр",
              icon: "fa fa-cake-candles",
              path: "/service/jur-ur"
            },
            {
              label: "Захиалга",
              icon: "fa fa-hand-holding-dollar",
              path: "/service/order"
            },
            {
              label: "Хандив",
              icon: "fa fa-hand-holding-hand",
              path: "/service/donation"
            },
            {
              label: "Promo code",
              icon: "fa fa-hashtag",
              path: "/service/promo"
            },
            {
              label: "Banner",
              icon: "fa fa-volume-low",
              path: "/service/banner"
            }
          ]
        },
        {
          label: "Тайлан",
          icon: "fa-regular fa-newspaper",
          children: [{
              label: "Санхүүгийн тайлан",
              icon: "fa fa-star",
              path: "/report/finance"

            },
            {
              label: "Талент",
              icon: "fa fa-star",
              path: "/report/talent"

            }
          ]
        },
        {
          label: "Мэдэгдэл",
          icon: "fa-regular fa-bell",
          children: [{
              label: "Одын мэдэгдэл",
              icon: "fa fa-volume-low",
              path: "/notifications/talent"

            },
            {
              label: "Аппликейшн мэдэгдэл",
              icon: "fa fa-newspaper",
              path: "/notifications/application"

            }
          ]
        },
        {
          label: "Тохиргоо",
          icon: "fa fa-gear",
          children: [{
              label: "Хар жагсаалт",
              icon: "fa fa-user",
              path: "/settings/black-list"

            },
            {
              label: "Нөхцөл",
              icon: "fa fa-gear",
              path: "/settings/condition"

            },
            {
              label: "Эрх олголт",
              icon: "fa fa-circle-user",
              path: "/settings/permission"

            }
          ]
        }
      ],
    }),
    components: {
      MenuItem
    },
    methods: {
      toggleMenu() {
        changed = !changed
      }
    },
  }
</script>

<style lang="scss" scoped>
  .menu {
    position: fixed;
    height: 100vh;
    width: 260px;
    top: 0;
    left: 0;
    background-color: #2e2e2e;
    border-right: 1px solid #ececec;
    transition: all .15s ease;
    overflow: auto;
    z-index: 100000000;

    .menu-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 20px;
      border-bottom: 1px solid #fff3;
      margin-bottom: .5rem;
      user-select: none;

      .sub-title {
        color: #ececec;
        font-weight: 600;
        margin: 0;
        // transition: all .15s ease;
      }

      i {
        color: #fff;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1023px){
  // @media (max-width: 767px) {
    .menu {
      width: 80px;

      &:hover{
        width: 260px;

        .menu-head {
          justify-content: space-between;

          .sub-title {
            width: 100%;
            white-space: nowrap;
          }
        }
      }

      .menu-head {
        justify-content: center;

        .sub-title {
          width: 0;
          overflow: hidden;
          height: 22px;
        }

        i {
          margin: 0;
        }
      }
    }
  }
</style>