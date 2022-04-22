<template>
  <div class="talent-operation-popup">
    <label for="username">Username</label>
    <input type="text" name="username" placeholder="Username" required>

    <label for="email">E-mail</label>
    <input type="email" name="email" placeholder="E-mail">

    <label for="name">Name</label>
    <input type="text" name="name" placeholder="Name" required>

    <label for="role">Role</label>
    <div class="selector">
      <n-select v-model:value="selectedValues" multiple filterable placeholder="Please select role" :options="options" />
    </div>

    <label for="priority">
      Priority (Их байх тусам Application дээр урд гарна)
      </label>
    <input type="number" name="priority" min="0" placeholder="0" required>
  </div>
</template>

<script>
  import {
    defineComponent,
    ref
  } from "vue";

  export default defineComponent({
    setup() {
      return {
        selectedValue: ref(null),
        selectedValues: ref(null),
        options: [
          {
            label: "Инфпюенсер",
            value: "Инфпюенсер",
          },
          {
            label: "Жүжигчин",
            value: "Жүжигчин",
          },
          {
            label: "Дуучин",
            value: "Дуучин",
          },
          {
            label: "Хөгжимчин",
            value: "Хөгжимчин",
          },
          {
            label: "Загвар өмсөгч",
            value: "Загвар өмсөгч",
          },
          {
            label: "Спорт",
            value: "Спорт",
          },
          {
            label: "Зохиолч, яруу найрагч",
            value: "Зохиолч, яру найрагч",
          },
          {
            label: "ТВ",
            value: "ТВ",
          },
          {
            label: "Комедиан",
            value: "Комедиан",
          },
          {
            label: "Нийтийн дуучин",
            value: "Нийтийн дуучин",
          },
          {
            label: "И-Спорт",
            value: "И-Спорт",
          },
          {
            label: "Улс төрч",
            value: "Улс төрч"
          }
        ]
      };
    }
  });
</script>

<style lang="scss">
  .talent-operation-popup {
    position: relatve;
    padding: 1rem;
    display: grid;

    label {
      margin-bottom: .5rem;
    }

    .selector{
      margin-bottom: 1rem;
    }

    input {
      border: .5px solid #D9D9D9;
      outline: none;
      border-radius: .25rem;
      padding: .5rem;
      margin-bottom: 1rem;

      &:hover {
        border-color: #28AAEB;
      }

      &:last-child{
        width: 100px;
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    .n-base-selection {
      --n-caret-color: #038FDE !important;
      --n-border-active: 1px solid #038FDE !important;
      --n-border-focus: 1px solid #038FDE !important;
      --n-border-hover: 1px solid #038FDE !important;
    }
  }
</style>