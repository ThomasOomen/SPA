<template lang="">
    <div>
        <h2>Biggest riding distance</h2>
        <div>
        <h3>{{stravaStore.getterAthleteStats.biggest_ride_distance /1000}} km</h3>
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