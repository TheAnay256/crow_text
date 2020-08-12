import { VuexModule, Module, Mutation, Action } from 'vuex-class-modules';

@Module
class TextModule extends VuexModule {
  text: string[] = [];

  // action 'incr' commits mutation 'increment' when done with return value as payload
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