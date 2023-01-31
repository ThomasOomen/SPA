<template lang="">
    <div v-if="checkIfMapIsBuildable">
        <div v-html="map" v-bind="getMapWithPolyLine">
        </div>
    </div>
</template>
<script lang="ts">

import { defineComponent, toRaw } from 'vue';
import { useStravaStore } from '@/stores/stravaStore';

export default defineComponent ({
  
    name: "ActivityMap",

    setup() {
        const stravaStore = useStravaStore();
        let activeActivity = toRaw(stravaStore.getActiveActivity)
        if(activeActivity != '') {
            stravaStore.getRideMap(activeActivity)
        }

        return { stravaStore }
    },

    data() {
        return {
            map: '',
        }
    },

    computed: {
        getMapWithPolyLine(): any {
            this.map = this.stravaStore.getMap
        },

        checkIfMapIsBuildable(): any {
            let buildable = toRaw(this.stravaStore.getMap)
            if(buildable != '') {
                return true
            } else {
                return false
            }
        }
    }
})
</script>
<style lang="scss">
    
</style>