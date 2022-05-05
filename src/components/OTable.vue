<template>
  <div class="q-pa-md">
    <q-table
      :title="title"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from 'vue';
import { Todo, Meta } from './models';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'OTable',
  props: {
    title: {
      type: String,
      required: true,
    },
    rows: {
      type: Array,
      required: false,
    },
    columns: {
      type: Array,
      required: false,
    }
  },
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      name,
      age,
      accept,

      setRows(rows: Array) {
        console.log('All good')
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
});
</script>
