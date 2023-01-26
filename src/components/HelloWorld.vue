<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>REST Test Cases</h3>
    <ul>
      <li><button @click="testCase1">Test Case 1</button></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">Test Case 2</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">Test Case 3</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">Test Case 4</a></li>
    </ul>
    <h3>GraphQL Test Cases</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">Test Case 1</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">Test Case 2</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">Test Case 3</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">Test Case 4</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {callJoke} from "../RESTCalls";

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods:{
    testCase1(){
      console.log( callJoke());
    },
    testCase2(){

    },
    testCase3(){
      console.log("Made Call");
    },
    testCase4(){

    }

  }
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
