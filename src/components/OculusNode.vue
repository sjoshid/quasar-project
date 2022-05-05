<template>
  <q-page>
    <div class="row-grow justify-left">
      <div class="q-pa-md self-center">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input
            filled
            v-model="name"
            label="Node caption"
            hint="Search available nodes"
            autofocus
            clearable
            :dense="true"
            lazy-rules="ondemand"
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          >
            <template v-slot:append>
              <q-icon v-if="true" name="search" />
            </template>
          </q-input>
        </q-form>
      </div>
    </div>

    <div class="fit column no-wrap justify-start items-stretch content-start">
      <div class="overflow: auto;">
        <div class="q-pa-md">
          <q-table title="Interfaces" :rows="[]" :columns="[]" row-key="name" />
        </div>
      </div>
      <div class="overflow: auto;">
        <div class="q-pa-md">
          <q-table title="BBSes" :rows="[]" :columns="[]" row-key="name" />
        </div>
      </div>
      <div class="overflow: auto;">
        <div class="q-pa-md">
          <q-table title="LVCs" :rows="[]" :columns="[]" row-key="name" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from 'vue';
import { Todo, Meta } from './models';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'OculusNode',
  props: {
    title: {
      type: String,
      required: true,
    },
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

      onSubmit() {
        console.log('All good');
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
