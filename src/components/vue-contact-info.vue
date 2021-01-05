<template>
  <div class="about">
    <div id="bg_layer" v-show="modalWindow"></div>
    <div class="modalWindow" v-show="modalWindow">
      <div class="return_form">
        <button @click="return_back">&times;</button>
      </div>
      <div class="text_form">
        <input type="text" placeholder="Key" v-model="keyField" />
        <input type="text" placeholder="Text" v-model="textField" />
      </div>
      <div class="under_button">
        <button class="return_back" @click="return_back">Back</button>
        <button class="addText" @click="addText">Add</button>
      </div>
    </div>

    <div id="bg_layer" v-show="editWindow"></div>
    <div class="modalWindow" v-show="editWindow">
      <div class="return_form">
        <button @click="return_back_fix">&times;</button>
      </div>
      <div class="text_form">
        <input type="text" placeholder="Key" v-model="keyField" />
        <input type="text" placeholder="Text" v-model="textField" />
      </div>
      <div class="under_button">
        <button class="return_back" @click="return_back_fix">Back</button>
        <button class="addText" @click="fixNote">Fix</button>
      </div>
    </div>

    <router-link
      :to="{
        name: 'Home',
      }"
      ><p class="back__link">&larr; Back</p>
    </router-link>
    <div class="contact-cart">
      {{ contact.id }}) {{ contact.name }} - {{ contact.number }}
      <button class="addContact" @click="add_Text_field">Add note</button>
    </div>
    <ul v-if="contactInfo.length !== 0">
      <li class="note-cart" v-for="(item, index) in contactInfo" :key="index">
        {{ item.key }} {{ item.name }}
        <span>
          <button
            v-show="oldFieldFix.length !== 0"
            class="return__link"
            @click="returnNote(index)"
          >
            Return
          </button>
          <button class="edit__link" @click="editNote(index)">
            Edit
          </button>
          <button class="remove" @click="removeNote(item.id)">
            &times;
          </button>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["contact"],
  data() {
    return {
      contactInfo: [],
      Id: null,
      keyField: "",
      textField: "",
      oldFieldFix: [],
      idel: 0,
      modalWindow: false,
      editWindow: false,
    };
  },
  methods: {
    add_Text_field() {
      this.modalWindow = true;
    },
    addText() {
      const note = {
        id: this.Id++,
        key: this.keyField,
        name: this.textField,
      };
      this.contactInfo.push(note);
      this.keyField = "";
      this.textField = "";
      this.modalWindow = false;
    },
    return_back() {
      this.modalWindow = false;
      this.keyField = "";
      this.textField = "";
    },
    return_back_fix() {
      if (confirm("Вернуться без изменений?") == true) {
        this.editWindow = false;
      }
      this.keyField = "";
      this.textField = "";
    },
    removeNote(id) {
      if (confirm("Удалить?") == true) {
        this.contactInfo = this.contactInfo.filter((b) => b.id !== id);
      }
    },
    id() {
      this.Id = this.contactInfo.length + 1;
    },
    editNote(idel) {
      this.editWindow = true;
      this.idel = idel;
      const oldValue = {
        id: idel,
        oldKey: this.contactInfo[idel].key,
        oldText: this.contactInfo[idel].name,
      };
      this.oldFieldFix.splice(idel, 1, oldValue);
      this.keyField = this.contactInfo[idel].key;
      this.textField = this.contactInfo[idel].name;
    },
    fixNote() {
      this.contactInfo[this.idel].key = this.keyField;
      this.contactInfo[this.idel].name = this.textField;
      this.keyField = "";
      this.textField = "";
      this.editWindow = false;
    },
    returnNote(id) {
      console.log(this.oldFieldFix, id);
      this.contactInfo[id].key = this.oldFieldFix[id].oldKey;
      this.contactInfo[id].name = this.oldFieldFix[id].oldText;
    },
  },
  mounted() {
    this.id();
  },
  components: {},
};
</script>
<style lang="scss">
.back__link {
  margin: 0;
  padding: 40px 0px 20px 0px;
}
.contact-cart {
  list-style: none;
  text-align: left;
  margin: 0.5rem;
  margin-left: 47px;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 7px 7px #e7e7e7, -7px 0px 7px #e7e7e7;
  margin-right: 40px;
}
.modalWindow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 200px;
  transform: translate(-50%, -50%);
  background-color: #e7e7e7;
  z-index: 20;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.return_form {
  display: flex;
  justify-content: flex-end;
  & > button {
    border-radius: 50%;
    background-color: red;
    color: white;
    font-weight: 900;
    border: 1px solid black;
    margin-left: 50px;
    transition: 0.3s;
    cursor: pointer;
    &:active {
      outline: none;
      color: black;
    }
    &:focus {
      outline: none;
    }
    &:hover {
      outline: none;
      color: red;
      background-color: white;
    }
  }
}
#bg_layer {
  position: absolute;
  z-index: 15;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
}
.note-cart {
  margin: 18px 70px 18px 70px;
  box-shadow: 0px 7px 7px #e7e7e7, 7px 0px 7px #e7e7e7 0px -7px 7px #e7e7e7,
    -7px 0px 7px #e7e7e7;
}
.under_button {
  display: flex;
  justify-content: space-between;
}
.text_form {
  & > input {
    padding: 0.5rem;
    display: block;
    margin: 0 0;
    margin-bottom: 10px;
    padding: 0.5rem;
    width: 280px;
  }
}
.addText {
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
.return_back {
  border-radius: 5px;
  background-color: red;
  color: white;
  font-weight: 700;
  padding: 5px 10px;
  border: 1px solid black;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    outline: none;
    color: red;
    background-color: #fff;
  }
}
.return__link {
  border: none;
  background-color: #5e81f4;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 700;
  padding: 5px 20px;
  text-align: center;
  border: 1px solid black;
  text-decoration: none;
  transition: 0.3s;
  margin-right: 40px;
  &:hover {
    outline: none;
    color: #5e81f4;
    background-color: #fff;
  }
  &:focus {
    outline: none;
  }
}
.back__link {
  text-align: left;
  margin-left: 47px;
  text-decoration: none;
  color: #000;
}
.router-link-active {
  text-decoration: none;
}
</style>
