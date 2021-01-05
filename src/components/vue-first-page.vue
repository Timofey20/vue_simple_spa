<template>
  <div class="vue-first-page">
    <div class="create"></div>
    <div class="create_contact">
      <span>Enter name</span>
      <input type="text" v-model="newName" />
      <span>Enter number</span>
      <input type="text" v-model="newNumber" />
      <button class="addContact" @click="addContact">Add contact</button>
    </div>
    <ul>
      <vue-first-page-item
        :contact="contact"
        @removeContact="removeContact"
      ></vue-first-page-item>
    </ul>
    <div v-if="contact.length === 0">Закончились контакты</div>
  </div>
</template>
<script>
import vueFirstPageItem from "../components/vue-first-page-item";
export default {
  data() {
    return {
      contact: [
        { name: "Fill", number: 893421042134, id: 1 },
        { name: "Dan", number: 893421044454, id: 2 },
        { name: "Gren", number: 893426674284, id: 3 },
      ],
      newId: null,
      newName: "",
      newNumber: "",
      confirmation: false,
      confirmathion_chose: true,
    };
  },
  methods: {
    removeContact(id) {
      if (confirm("Удалить?") == true) {
        this.contact = this.contact.filter((b) => b.id !== id);
      }
    },
    addContact() {
      if (this.newName.trim() == "" || this.newNumber.trim() == "") {
        return 0;
      }
      const User = {
        id: this.newId++,
        name: this.newName,
        number: this.newNumber,
      };
      this.contact.push(User);
      this.newName = "";
      this.newNumber = "";
    },
    id() {
      this.newId = this.contact.length + 1;
    },
  },
  components: {
    vueFirstPageItem,
  },
  mounted() {
    this.id();
  },
};
</script>
<style lang="scss">
.create_contact {
  text-align: left;
  display: block;
  margin: 0.5rem 2rem;
  padding: 0.5rem 2rem;
  padding-top: 40px;
  margin-top: 0;
  & input {
    margin-right: 40px;
  }
  & span {
    margin-right: 10px;
  }
}
.addContact {
  border-radius: 5px;
  background-color: green;
  color: white;
  font-weight: 700;
  padding: 5px 10px;
  border: 1px solid black;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    outline: none;
    color: green;
    background-color: #fff;
  }
}
input {
  &:focus {
    outline: none;
  }
}
</style>
