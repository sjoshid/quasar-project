<template>
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
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
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
        <q-table
          title="Nodes"
          :rows="nodeData"
          :columns="nodeSchema"
          row-key="name"
        >
          <!-- The word "action" below is the field name in columns. Magic!! -->
          <template #body-cell-action="props">
            <q-td :props="props">
              <q-btn icon="analytics">
                <q-tooltip class="bg-accent">Show metrics</q-tooltip>
              </q-btn>
              <!-- error_outline means node is not shown in Oculus -->
              <q-btn icon="error_outline" />
              <q-btn icon="dataset">
                <q-tooltip class="bg-accent"
                  >Show associated services</q-tooltip
                >
              </q-btn>
            </q-td>
          </template>
        </q-table>
      </div>
    </div>
    <q-btn label="update me" @click="update('3434')" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
const schema = ref([''])
const data = ref([''])

export default defineComponent({
  name: 'OculusNode',
  props: {
    nodeSchema: Array as PropType<
      {
        name: string;
        field: string;
        label: string;
      }[]
    >,
    // types is messed up. division cannot be a number. But this is ok for now.
    nodeData: Array as PropType<
      {
        nodeId: string;
        nType: number;
        division: number;
        acna: number;
        sponsoredBy: number;
        caption: string;
      }[]
    >,
  },
  mounted() {
    console.log('mounted! ' + schema.value);
  },
  updated() {
    console.log('updated!');
  },
  setup(props) {
    const update = (node_ids: string | readonly string[]) => {
      // use node_ids and make a REST call and get all nodes.
      console.log('called update with ' + node_ids);
    };
    let someLabel = '';
    return {
      update,
      someLabel,
    };
  },
});
</script>
