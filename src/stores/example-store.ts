import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});

export const nodeStore = defineStore('nodeStore', {
  state: () => ({
    nodesArray: [] as string[],
  }),
  getters: {
    getNodesArray: (state) => state.nodesArray,
  },
  actions: {
    updateNodesArray(nodesArray: Array<string>) {
      this.nodesArray = nodesArray;
    },
  },
});
