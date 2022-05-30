<template>
  <div class="fit column no-wrap justify-start items-stretch content-start">
    <div class="overflow: auto;">
      <div class="q-pa-md">
        <q-table
          :title="title"
          :rows="d"
          :columns="s"
          row-key="name"
        >
          <!-- The word "action" below is the field name in columns. Magic!! -->
          <template #body-cell-action="props">
            <q-td :props="props">
              <q-btn icon="analytics">
                <q-tooltip class="bg-accent">Show metrics</q-tooltip>
              </q-btn>
              <!-- error_outline means something is not shown in Oculus -->
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
import { defineComponent, reactive } from 'vue';
import {nodeSchema, nodeData} from '../stores/raw_data'
import {nodeSchema as interfaceSchema, nodeData as interfaceData} from '../stores/raw_interface'

type Schema = {
  name: string;
  field: string;
  label: string;
}[];

type NodeData = {
  nodeId: string;
  nType: number;
  division: number;
  acna: number;
  sponsoredBy: number;
  caption: string;
}[];

type InterfaceData = {
  interfaceId: string;
  nType: number;
  division: number;
  acna: number;
  sponsoredBy: number;
  caption: string;
}[];

export default defineComponent({
  name: 'OculusComponent',
  props: {
    title: { type: String, required: true },
    url: { type: String, required: true },
    criteria: {},
  },
  created: () => {
    console.log('created');
  },
  updated: () => {
    console.log('updated');
  },
  setup(props) {
    // type of schema and data will vary based on props.url.
    let d: NodeData | InterfaceData = []
    let s: Schema = []
    switch (props.url) {
      case ('/node'): {
        s = nodeSchema
        d = reactive(nodeData)
      }
      break
      case ('/interface'): {
        s = interfaceSchema
        d = reactive(interfaceData)
      }
      break
      default: {

      }
    }
    
    const update = (criteria_ids: string | readonly string[]) => {
      // use criteria_ids and make a REST call and get all records.
      console.log('called update with criteria ' + criteria_ids);
      console.log(props.url);
      d.splice(0);
      console.log(d);
    };

    return {
      update,
      d,
      s, // no need to make schema reactive
    };
  },
});
</script>
