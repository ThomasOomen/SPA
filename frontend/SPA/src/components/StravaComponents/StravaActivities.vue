<template lang="">
    <div class="strava_container">
        <div class="">
            <div class="p-2 activities">
                <Activities @openActivity="openActivity" class="">
                </Activities>
            </div>
        </div>
        <div class="content">
            <div class="content_container ">
            <div class="Map grid-component">
                <ActivityMap/>
            </div>
            <div class="Info grid-component">
                <div v-if="activeActivity != ''">
                    <ActiveActivity>
                    </ActiveActivity>
                </div>
            </div>
            <div class="Chart-1 grid-component">
                <ActivityChart/>
            </div>
            <div class="Chart-2 grid-component">

            </div>
        </div>
        </div>
    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import { useStravaStore } from '@/stores/stravaStore';
import Activities from './Activities.vue';
import ActiveActivity from './ActiveActivity.vue';
import ActivityMap from './ActivityMap.vue';
import ActivityChart from './ActivityChart.vue';

export default defineComponent({
    components: {
        Activities,
        ActiveActivity,
        ActivityMap,
        ActivityChart
    },

    setup() {
        const stravaStore = useStravaStore()
        if(Object.keys(stravaStore.activities).length === 0) {
            stravaStore.getAllActivities()
        }

        return { stravaStore }
    },
    
    data() {
        return {
            activeActivity: '',
        }
    },

    methods: {
        openActivity: async function (id: any) {
            this.stravaStore.searchActivity(id)
            this.activeActivity = this.stravaStore.getActiveActivity
            this.$router.push({query: {id: id}})
            this.stravaStore.getRideMap(this.activeActivity)
            this.stravaStore.getChart(this.activeActivity)
        }
    },

    unmounted() {
        this.stravaStore.setActiveActivityToEmpty()
    }
})
</script>

<style lang="scss">

    .strava_container 
    {  
        display: grid;
        grid-template-columns: 0.3fr 1.7fr;
        grid-template-rows: 1fr;
        grid-auto-columns: 1fr;
        gap: 10px 10px;
        grid-auto-flow: row;
        grid-template-areas: "activities content";
    }

    .content 
    { 
        grid-area: content; 
    }

    .content_container 
    {  
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-auto-columns: 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
            "Info Map Map Map"
            "Info Map Map Map"
            "Chart-1 Chart-1 Chart-2 Chart-2"
            "Chart-1 Chart-1 Chart-2 Chart-2";
    }

    .Map 
    { 
        grid-area: Map; 
    }

    .Info 
    { 
        grid-area: Info; 
    }

    .Chart-1 
    { 
        grid-area: Chart-1; 
    }

    .Chart-2 
    { 
        grid-area: Chart-2; 
    }

    .grid-component 
        {
        box-shadow: 2px 2px 5px #000000;
        margin: 5px;
        background-color: #18242c;
    }
</style>