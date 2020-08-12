<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <div class="titleBarContentContainer">
        <v-img
          :src="require('./assets/crow.svg')"
          contain
          height="50"
          width="50"
        />
        <h2 class="headerTitle">Crownet</h2>
      </div>
    </v-app-bar>

    <v-main>
      <div class="appContentContainer">
        <SearchContainer/>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchContainer from './components/SearchContainer.vue';

export default Vue.extend({
  name: 'App',

  components: {
    SearchContainer,
  },

  data: () => ({
    //
  }),
});
</script>

<style lang="less" scoped>
  .titleBarContentContainer {
    padding-left: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    .headerTitle {
      padding-left: 10px;
    }
  }

  .appContentContainer {
    padding-left: 20%;
    padding-right: 20%;
  }
</style>
