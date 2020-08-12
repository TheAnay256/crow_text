<template>
  <div class="contentContainer">
    <v-snackbar
      v-model="error"
      color="error"
      timeout="1500"
    > {{ errorMessage }}
  </v-snackbar>
    <input ref="fileUpload" v-on:change="fileUploaded" type="file" hidden>
    <div class="button-search-container">
      <v-btn
        color="black"
        class="white--text elevation-4"
        height="45px"
        v-on:click="uploadFile"
      >Upload File
      </v-btn>
      <v-text-field
        class="search"
        label="Search"
        v-model="filterString"
        solo
        hide-details
      ></v-text-field>
    </div>
    <div class="uploadedItemContainer">
      <div class="uploadedItem elevation-2" v-for="item in fileText">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { textModule } from '@/store/TextModule.ts';

@Component
export default class SearchContainer extends Vue {
  private error = false;
  private errorMessage = "";
  private filterString = "";

  get fileText() {
    return textModule.text.filter(item => {
      return item.toLowerCase().includes(this.filterString.toLowerCase());
    });
  }

  $refs: {
    fileUpload: HTMLFormElement
  }

  uploadFile(): void {
    this.$refs.fileUpload.click();
  }

  async fileUploaded(event): Promise<void> {
    try {
      let fileUpload: Blob = event.target.files[0];

      if(fileUpload.type === "text/plain") {
        let fileOutput = <string>await fileUpload.text();

        textModule.textUploaded(fileOutput.replace(/\r/g, "").split(/\n/));
      } else {
        throw "Upload a text file, caw caw caw";
      }
    } catch(e) {
      this.error = true;
      this.errorMessage = e;
    }
  }
}
</script>

<style lang="less">
  .contentContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 10% 0 10%;

    .button-search-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      margin-bottom: 30px;

      .search {
        margin-left: 10px;
      }
    }

    .uploadedItemContainer {
      padding-left: 10px;
      width: 100%;

      .uploadedItem{
        width: 100%;
        margin-bottom: 20px;
        padding: 10px;
        border-radius: 2px;
      }
    }
  }
</style>