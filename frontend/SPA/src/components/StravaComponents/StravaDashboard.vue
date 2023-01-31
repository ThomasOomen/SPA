<template lang="">
    <div class="strava-dashboard-container">
        <div class="Profile p-2 grid-component">
            <ProfileInformation/>
        </div>
        <div class="ride-information grid-component">
            <div class="amount-of-rides p-2">
                <RideTypes/>
            </div>
            <div class="total-distance-type-ride p-2">
                <TotalDistancePerRideType/>
            </div>
        </div>
        <div class="biggest-ride-distance p-2 grid-component">
            <BiggestRideDistance/>
        </div>
        <div class="total-hours p-2 grid-component">
            <TotalRidingHours/>
        </div>
        <div class="average-speed p-2 grid-component">
            <AverageSpeed/>
        </div>
    </div>

</template>
<script lang="ts">

import { defineComponent, toRaw } from 'vue';
import { useStravaStore } from '@/stores/stravaStore';
import ProfileInformation from './ProfileInformation.vue';
import RideTypes from './RideTypes.vue';
import TotalDistancePerRideType from './TotalDistancePerRideType.vue';
import BiggestRideDistance from './BiggestRideDistance.vue';
import TotalRidingHours from './TotalRidingHours.vue';
import AverageSpeed from './AverageSpeed.vue';

export default defineComponent({

    components: {
        ProfileInformation,
        RideTypes,
        TotalDistancePerRideType,
        BiggestRideDistance,
        TotalRidingHours,
        AverageSpeed
    },

    setup() {
        const stravaStore = useStravaStore()
        if(Object.keys(stravaStore.activities).length === 0) {
            stravaStore.getAllActivities()
        }
        
        if(Object.keys(stravaStore.athlete).length === 0) {
            stravaStore.getAthlete()
        }

        // stravaStore.setActiveActivity()

        return { stravaStore }
    },
    
    data() {
        return {
        }
    },

    methods: {
    },

})




</script>
<style lang="scss">
    .strava-dashboard-container {
        display: grid; 
        grid-auto-columns: 1fr; 
        grid-template-columns: 1fr 1fr 1fr 1fr; 
        grid-template-rows: 1fr 1fr 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
            "Profile biggest-ride-distance total-hours average-speed"
            "ride-information ride-information . ."
            "ride-information ride-information . ."; 
    }

    .grid-component {
        box-shadow: 2px 2px 5px #000000;
        margin: 5px;
        background-color: #18242c;
    }

    .Profile { 
        grid-area: Profile; 
    }

    .ride-information {
        display: grid; 
        grid-template-columns: 1fr 1fr 1fr; 
        grid-template-rows: 1fr 0.5fr 1.5fr; 
        gap: 0px 0px; 
        grid-template-areas: 
            "amount-of-rides amount-of-rides amount-of-rides"
            "amount-of-rides amount-of-rides amount-of-rides"
            "total-distance-type-ride total-distance-type-ride total-distance-type-ride"; 
        grid-area: ride-information; 
    }

    .amount-of-rides { 
        grid-area: amount-of-rides; 
    }
    
    .total-distance-type-ride { 
        grid-area: total-distance-type-ride; 
    }

    .biggest-ride-distance { 
        grid-area: biggest-ride-distance;
    }

    .total-hours { 
        grid-area: total-hours; 
    }

    .average-speed { 
        grid-area: average-speed; 
    }

</style>