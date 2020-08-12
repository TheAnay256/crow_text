<template>
  <div class="contentContainer">
    <v-text-field
      class="search"
      label="Search"
      solo
    ></v-text-field>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SearchContainer extends Vue {
  
}
</script>

<style lang="less">
  .contentContainer {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .search {
      width: 600px;
    }
  }
</style>