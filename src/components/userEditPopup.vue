<template>
  <div class="user-operation-popup">
    <label for="username">Username</label>
    <input type="text" name="username" placeholder="Username" required>

    <label for="email">E-mail</label>
    <input type="email" name="email" placeholder="E-mail">

    <label for="name">Name</label>
    <input type="text" name="name" placeholder="Name" required>

    <div class="image-picker">
      <n-upload action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :default-file-list="previewFileList"
      list-type="image-card" @preview="handlePreview" />
      <n-modal v-model:show="showModal" preset="card" style="width: 600px" title="A Cool Picture" v-if="handlePreview">
        <img :src="previewImageUrl" style="width: 100%">
      </n-modal>
    </div>
  </div>
</template>

<script>
  import {
    defineComponent,
    ref
  } from "vue";

  export default defineComponent({
    setup() {
      const showModalRef = ref(false);
      const previewImageUrlRef = ref("");

      function handlePreview(file) {
        const {
          url
        } = file;
        previewImageUrlRef.value = url;
        showModalRef.value = true;
      }
      return {
        handlePreview,
        showModal: showModalRef,
        previewImageUrl: previewImageUrlRef,
        previewFileList: ref([{
            id: "1",
            name: "我是react.png",
            status: "finished",
            url: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          }
        ])
      };
    }
  });
</script>

<style lang="scss">
  .user-operation-popup {
    position: relatve;
    padding: 1rem;
    display: grid;

    label {
      margin-bottom: .5rem;
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

      &:last-child {
        width: 100px;
      }

      &.n-upload-file-input{
        margin: 0;
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

    .image-picker{
      position: relative;
    }
  }
</style>