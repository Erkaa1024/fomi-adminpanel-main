<template>
  <div>
    <n-data-table ref="table" :columns="columns" :data="data" :pagination="pagination" :row-key="row => row.address"
      @update:checked-row-keys="handleCheck" />
  </div>
</template>

<script>
  import {
    NImage,
    NTag
  } from 'naive-ui'
  import {
    h,
    defineComponent,
    ref
  } from 'vue'

  const columns = [{
      type: 'selection',
    },
    {
      title: '#',
      key: 'id',
      sorter: {
        compare: (id1, id2) => id1.id - id2.id,
        multiple: 1
      }
    },
    {
      title: 'Утасны дугаар',
      key: 'number'
    },
    {
      title: 'Нэр',
      key: 'name',
      sorter: (name1, name2) => name1.name - name2.name
    },
    {
      title: 'И-Мэйл',
      key: 'email'
    },
    {
      title: 'Active',
      key: 'active',
      filterOptions: [{
          label: 'Active',
          value: 'active'
        },
        {
          label: 'Inactive',
          value: 'Inactive'
        }
      ],
      filter(value, row) {
        return ~row.active.indexOf(value)
      },
      render(row) {
        const tags = row.active.map((tagKey) => {
          return h(
            NTag, {
              style: {
                marginRight: '6px'
              },
              type: 'success',
              round: true
            },
            {
              default: () => tagKey
            }
          )
        })
        return tags
      }
    },
    {
      title: 'Эрх',
      key: 'permission',
      filterOptions: [{
          label: 'ROLE_ACTOR',
          value: 'ACTOR'
        },
        {
          label: 'ROLE_POETS',
          value: 'POETS'
        },
        {
          label: 'ROLE_INFLUENCER',
          value: 'INFLUENCER'
        },
        {
          label: 'ROLE_SINGER',
          value: 'SINGER'
        },
        {
          label: 'ROLE_USER',
          value: 'USER'
        },
        {
          label: 'ROLE_TV',
          value: 'TV'
        },
      ],
      filter(value, row) {
        return ~row.permission.indexOf(value)
      }
    },
    {
      title: 'Зураг',
      key: 'image',
      render(row) {
        return row.image.map((msrc) => {
          return h(
            NImage, {
              // style: {
              //     objectPosition: 'bottom'
              // },
              objectFit: 'contain',
              width: 40,
              src: msrc,
              class: 'avatar'
            }
          )
        })
      }
    },
    {
      title: 'Бүртгүүлсэн огноо',
      key: 'registeredDate'
    },
    {
      title: '',
      key: 'userTurnButton'
    },
    {
      title: '',
      key: 'userDetail'
    }
  ]

  const data = Array.apply(null, {
    length: 15
  }).map((_, index) => ({
    id: `${index+1}`,
    number: `${Math.ceil(Math.random() * (9 - 7) + 7)}${Math.ceil(Math.random() * (9000000 - 7000000) + 7000000)}`,
    name: `Danzan dooguur zuraas OG${Math.ceil(Math.random() * (1000000 - 7) + 7)}`,
    email: `test.mail${index}@gmail.com`,
    active: ['Active'],
    permission: 'ROLE_ACTOR',
    image: ['/img/user-solid.94e1224d.svg'],
    registeredDate: '2022-02-24 15:04:41'
  }))

  // const data = () => [
  //     {
  //         key: 0,
  //         id: `1`,
  //         number: `${Math.ceil(Math.random() * (9 - 7) + 7)}${Math.ceil(Math.random() * (9000000 - 7000000) + 7000000)}`,
  //         name: `Danzan dooguur zuraas OG${Math.ceil(Math.random() * (1000000 - 7) + 7)}`,
  //         email: `test.mail${index}@gmail.com`,
  //         active: ['Active'],
  //         permission: 'ROLE_ACTOR',
  //         image: ['/img/user-solid.94e1224d.svg'],
  //         registeredDate: '2022-02-24 15:04:41'
  //     },
  //     {
  //         key: 1,
  //         id: `2`,
  //         number: `${Math.ceil(Math.random() * (9 - 7) + 7)}${Math.ceil(Math.random() * (9000000 - 7000000) + 7000000)}`,
  //         name: `Danzan dooguur zuraas OG${Math.ceil(Math.random() * (1000000 - 7) + 7)}`,
  //         email: `test.mail${index}@gmail.com`,
  //         active: ['Active'],
  //         permission: 'ROLE_ACTOR',
  //         image: ['/img/user-solid.94e1224d.svg'],
  //         registeredDate: '2022-02-24 15:04:41'
  //     }
  // ]

  export default defineComponent({
    setup() {
      const checkedRowKeysRef = ref([])

      return {
        data,
        columns,
        checkedRowKeys: checkedRowKeysRef,
        pagination: {
          pageSize: 5
        },
        handleCheck(rowKeys) {
          checkedRowKeysRef.value = rowKeys
        }
      }
    }
  })
</script>

<style lang="scss">
  .n-scrollbar-container {
    * {
      white-space: nowrap;
    }

    .avatar {
      border: thin solid #DFDFDF;
      border-radius: .25rem;
      overflow: hidden;
    }
  }

  .n-data-table__pagination {
    margin: 1rem !important;

    .n-pagination-item--active {
      color: #52C41A !important;
      border-color: #52C41A !important;
    }
  }
</style>