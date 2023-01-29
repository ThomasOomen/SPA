<template lang="">
    <div>
        <div>
              <h2>{{ activeActivity.name }}</h2>
        </div>
        <div>
            Id: {{ activeActivity.id }} 
        </div>
        <div>
            Distance: {{ activeActivity.distance / 1000 }} km 
        </div>
        <div>
            Average speed: {{ activeActivity.average_speed}} km/u
        </div>
        <div>
            Max speed: {{ activeActivity.max_speed }} km/u
        </div>
        <div>
            Moving time: {{ activeActivity.moving_time_in_hhmmss }}
        </div>
        <div>
            Elevation gain: {{ activeActivity.total_elevation_gain }} m
        </div>
    </div>
</template>
<script lang="ts">

import { defineComponent, toRaw } from 'vue';
import { useStravaStore } from '@/stores/stravaStore';

export default defineComponent({
    name: 'ActiveActivity',

    setup() {
        const stravaStore = useStravaStore();
        return { stravaStore }
    },

    computed: {
        activeActivity(): any {
            var activeActivity = toRaw(this.stravaStore.getActiveActivity)

            const totalMinutes = Math.floor(activeActivity.moving_time / 60);

            const s = activeActivity.moving_time % 60;
            const h = Math.floor(totalMinutes / 60);
            const m = totalMinutes % 60;

            const moving_time_in_hhmmss = ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);

            activeActivity['moving_time_in_hhmmss'] = moving_time_in_hhmmss;

            return activeActivity;
        }
    },
    
})
</script>
<style lang="">
    
</style>