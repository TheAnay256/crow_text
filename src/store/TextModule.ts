import { VuexModule, Module, Mutation, Action } from 'vuex-class-modules';

@Module
class TextModule extends VuexModule {
  text: string[] = [];

  @Action
  textUploaded(newText: string[]) {
    this.updateText(newText);    
  }

  @Mutation
  updateText(newText: string[]) {
    this.text = newText;
  }
}

import store from "./index";
export const textModule = new TextModule({ store, name: "textModule" });