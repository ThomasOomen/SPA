<template lang="">
    <div v-html="map" v-bind="getMapWithPolyLine">
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
        stravaStore.getRideMap(activeActivity)

        return { stravaStore }
    },

    data() {
        return {
            map: '',
        }
    },

    computed: {
        getMapWithPolyLine() :any {
            this.map = this.stravaStore.getMap
            console.log('heyoo')
        }
    }
    
})
</script>
<style lang="scss">
    
</style>