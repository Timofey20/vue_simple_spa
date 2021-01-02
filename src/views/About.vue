<template>
  <div class="about">
    <input type="text" v-model="str" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      str: "",
    };
  },
  props: ["contact"],

  methods: {},
  watch: {
    str() {
      console.log(this.str);
    },
  },
};
</script>
