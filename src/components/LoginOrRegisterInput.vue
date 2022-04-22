<template>
  <div class="input-container">
    <input v-bind:type="inputType" :name="inputName" :placeholder="inputPlaceholder" required>
    <div class="icon">
      <i class="material-icons">{{inputIcon}}</i>
    </div>
  </div>
</template>

<script>
export default {
    name: "input",
    
    props: {
        inputType: {
            type: String,
            required: true
        },
        inputName: {
            type: String,
            required: true
        },
        inputPlaceholder: {
            type: String,
            required: true
        },
        inputIcon: {
            type: String,
            required: true
        },
    },
}
</script>

<style lang="scss" scoped>
.input-container{
  width: 100%;
  display: flex;
  justify-content: center;
  place-items: center;
  margin-bottom: 1rem;

  input{
    padding: 10px 15px;
    border: none;
    width: calc(100% - 42px);
    height: 38px;
    font-size: 1em;
    border: 1px solid #CED4DA;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    z-index: 10;
    transition: border 150ms linear;

    &:focus{
      outline: none;
      border: 1px solid #EAC915;
    }
  }

  .icon{
    background-color: #E9ECEF;
    color: #495057;
    height: 38px;
    width: 42px;
    border: 1px solid #CED4DA;
    border-left: 0;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    display: flex;
    place-items: center;
    justify-content: center;
    user-select: none;

    i{
      font-size: 20px;
    }
  }
}
</style>