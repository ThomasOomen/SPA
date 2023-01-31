<template lang="">
    <div>
        <div class="base-info">
            <img :src="stravaStore.athlete.profile"/>
            <h2 class="m-1">{{ stravaStore.athlete.firstname }} {{ stravaStore.athlete.lastname }}</h2>
        </div>
        <div class="p-2">
            <div>
                <h5>Country: {{stravaStore.athlete.country }}</h5>
            </div>
            <div>
                <h5>State: {{stravaStore.athlete.state}}</h5> 
            </div>
            <div>
                <h5>City: {{stravaStore.athlete.city}}</h5> 
            </div>
            <div>
                <h5>Bio: {{ stravaStore.athlete.bio}}</h5> 
            </div>
        </div>
        <button class="p-2 btn btn-primary" @click="$router.push({name:'strava/activities'})">View all activities
        </button>
    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import { useStravaStore } from '@/stores/stravaStore';

export default defineComponent({

    name: 'ProfileInformation',

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
    }
    
})

</script>
<style lang="scss">
    .base-info {
        display: flex;
    }
</style>