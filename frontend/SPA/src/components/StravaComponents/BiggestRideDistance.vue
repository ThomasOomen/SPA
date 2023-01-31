<template lang="">
    <div>

        <div class="p-1">
            <h2>Biggest riding distance</h2>
            <div>
                <h3>{{stravaStore.getterAthleteStats.biggest_ride_distance /1000}} km</h3>
            </div>
        </div>

        <div class="p-1">
            <h2>Total distance</h2>
            <div>
                <h3>{{stravaStore.getterTotalDistance }} km</h3>
            </div>
        </div>

        <div class="p-1">
            <h2>Total ride time</h2>
            <div>
                <h3>{{stravaStore.getterTotalRideTime }}</h3>
            </div>
        </div>

    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStravaStore } from '@/stores/stravaStore';

export default defineComponent({
    name: 'BiggestRideDistance',

    components: {

    }, 

    setup() {
        const stravaStore = useStravaStore();
        return { stravaStore }
    },

    data() {
        return {

        }
    },

    methods: {
        
    },

    computed: {
    }
})
</script>
<style lang="">
    
</style>