<template>
  <div class="add-talent-body">
    <div class="table">
      <div class="header">
        <p class="title">ОД НЭМЭХ ХҮСЭЛТ</p>

        <div class="search">
          <search />
        </div>
      </div>

      <div class="body">
        <n-data-table ref="table" :columns="columns" :data="data" :pagination="pagination"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent, h } from 'vue'
  import { NIcon, NTag } from 'naive-ui'
  import search from '../../components/tableSearch.vue'
  // import { checkmarkOutline as checkmark } from '@vicons/ionicons5'

  const columns = [
    {
      title: 'id',
      key: 'id'
    },
    {
      title: 'Нэр',
      key: 'name'
    },
    {
      title: '',
      key: 'status',
      width: '40',
      render (row) {
        const tags = row.status.map((checkmark) => {
          return h(
            NTag,
            {
              style: {
                width: '28px',
                padding: '5px',
                fontWeight: 'bolder',
                background: 'none',
                border: '2px solid #B3DCCA',
                borderRadius: '3px',
                fontSize: '18px'
              },
              type: 'success',
              bordered: false
            },
            {
              default: () => checkmark
            }
          )
        })
        return tags
      }
    },
    {
      title: 'Дэлгэрэнгүй',
      key: 'detail'
    },
    {
      title: 'Хүсэлт илгээсэн хэрэглэгч',
      key: 'wisher'
    },
    {
      title: 'Үүсгэсэн',
      key: 'date'
    }
  ]

  const data = [{
      key: 0,
      id: '7849d7ef-399c-46fa-ace1-fa613c9a26ee',
      name: 'Danzan_OG',
      status: ['✓'],
      wisher: 'danzan_og@gmail.com',
      date: '2022-03-16 15:30:36',
      detail: 'Юу л хийгээд байна даа би хахаха'
    },
    {
      key: 1,
      id: 'aceee6c1-df7b-49a1-8b24-9481f57d7769',
      name: 'Dondog_EG',
      status: [''],
      wisher: 'dondog_eg@gmail.com',
      date: '2022-03-15 12:11:54',
      detail: 'Гэхдээ давгүй ч юм уу гээшохгуюу'
    },
    {
      key: 2,
      id: 'c745bd62-4918-42fb-9df8-c5fbd356e265',
      name: 'Demberel_GG',
      status: [''],
      wisher: 'demberel_gg@gmail.com',
      date: '2022-03-03 17:31:44',
      detail: 'Putang ina mo bobo'
    },
    {
      key: 3,
      id: '4193b98f-ca8d-48aa-b98e-bdc09d3b04aa',
      name: 'Gongor_EHOME',
      status: ['✓'],
      wisher: 'gongor_ehome@gmail.com',
      date: '2022-02-25 17:34:16',
      detail: 'Buy staff katchin\' lil\'skrrr, then we\'re done. Yeah!!!'
    },
    {
      key: 4,
      id: '1cfd9e14-f26d-429d-9537-226b618a279d',
      name: 'Gotow_Liquid',
      status: ['✓'],
      wisher: 'gotow_liquid@gmail.com',
      date: '2022-02-22 18:42:16',
      detail: 'My babushka told me not to pray'
    },
    {
      key: 5,
      id: '17cba522-30ac-47e7-8d1f-d593c60887f8',
      name: 'MGL_Killer',
      status: [''],
      wisher: 'mgl_killer@gmail.com',
      date: '2022-02-19 20:14:19',
      detail: 'Generic mutator upgraded'
    },
    {
      key: 6,
      id: '5a710d49-4172-44bf-9f6a-c6f6f6be7fb1',
      name: 'MGL_Bataa',
      status: ['✓'],
      wisher: 'mgl_bataa@gmail.com',
      date: '2022-02-15 16:43:09',
      detail: 'New construction option'
    },
    {
      key: 7,
      id: 'a45293b9-62ae-4937-9e2b-f6e386e8b8e7',
      name: 'ARMY\'s KHulan',
      status: [''],
      wisher: 'khulan_army@gmail.com',
      date: '2022-02-08 20:21:05',
      detail: 'Demon by night, Devil by day'
    },
    {
      key: 8,
      id: 'e8496444-9a52-4da3-98b9-06893d48978e',
      name: 'Ajliin gazriin Burmaa',
      status: ['✓'],
      wisher: 'burmaa.247@gmail.com',
      date: '2022-01-29 20:00:03',
      detail: 'Ай сайхан Бурмаа, аргагүй сайхан Бурмаа'
    },
  ]

  export default defineComponent({
    components:{
      search
    },
    setup() {
      return {
        data,
        columns,
        pagination: {
          pageSize: 15
        }
      }
    }
  })
</script>

<style lang="scss">
  $border-color: #E8E8E8;

  .add-talent-body {
    // width: calc(100vw - 260px);
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    padding: 1rem;

    .table {
      width: 100%;
      border-radius: .5rem;
      box-shadow: 0 0 2px 1px #DFDFDF;
      background-color: #fff;
      overflow: hidden;
      padding: 1rem;

      .header {
        width: 100%;
        margin-bottom: 1rem;
        display: table;

        p.title{
          margin-bottom: 1rem;
        }

        .search {
          width: fit-content;

          .tableSearch {
            button {
              background-color: #038FDE;
              color: #fff;
            }
          }
        }
      }

      .body {
        width: 100%;
        font-size: .8em;

        .n-data-table-wrapper{
          font-size: .9em;
          font-weight: 500;
        }
      }
    }
  }
</style>