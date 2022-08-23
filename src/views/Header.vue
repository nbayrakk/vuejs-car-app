<template>
  <div>
    <nav
      style="padding-left: 50px"
      class="navbar navbar-expand-lg navbar-light bg-light"
    >
      <a class="navbar-brand" href="#">
        <router-link style="color:black;text-decoration:black" :to="{ name: 'Home' }">Car Case</router-link>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>