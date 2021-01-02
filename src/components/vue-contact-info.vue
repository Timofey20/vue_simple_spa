<template>
  <div class="about">
    <router-link
      :to="{
        name: 'Home',
      }"
      class="back__link"
      >back</router-link
    >
    <ul>
      <li>{{ contact.id }}) {{ contact.name }} - {{ contact.number }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["contact"],
  methods: {},
};
</script>
