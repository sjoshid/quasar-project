<template>
  <OculusComponent title="Node" url="/node" criteria="" />
  <OculusComponent title="Interface" url="/interface" criteria="" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OculusComponent from './OculusNode.vue';

export default defineComponent({
  name: 'MainComponent',
  components: {
    OculusComponent,
  },
});
</script>
