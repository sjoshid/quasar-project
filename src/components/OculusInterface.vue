<template>
  <div>Search for {{ title }} here</div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from 'vue';
import { Todo, Meta } from './models';

export default defineComponent({
  name: 'OculusInterface',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
