<template>
  <div class="vue-first-page-item">
    <li v-for="(item, index) in contact" :key="index">
      {{ index + 1 }}) {{ item.name }} - {{ item.number }}
      <div class="vue-first-page-item__button">
        <button class="edit">
          <router-link
            :to="{
              name: 'Info',
              params: { contact: contact[item.id - 1] },
            }"
            class="edit__link"
            >Info</router-link
          >
        </button>
        <button class="remove" @click="$emit('removeContact', item.id)">
          &times;
        </button>
      </div>
    </li>
  </div>
</template>
<script>
export default {
  props: {
    contact: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      id: null,
    };
  },
  methods: {},
};
</script>
<style lang="scss">
.edit {
  border: none;
  background-color: #fff;
  &__link {
    border-radius: 5px;
    background-color: green;
    color: white;
    font-weight: 700;
    padding: 5px 20px;
    text-align: center;
    border: 1px solid black;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
      outline: none;
      color: green;
      background-color: #fff;
    }
  }
}
.remove {
  border-radius: 50%;
  background-color: red;
  color: white;
  font-weight: 900;
  border-color: black;
  margin-left: 50px;
  cursor: pointer;
  &:active {
    outline: none;
    color: black;
  }
  &:focus {
    outline: none;
  }
}
li {
  list-style: none;
  text-align: left;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 7px 7px #e7e7e7, -7px 0px 7px #e7e7e7;
  margin-right: 40px;
}
</style>
