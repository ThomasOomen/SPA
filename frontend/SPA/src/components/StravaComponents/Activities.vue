<template lang="">
    <div>
        <perfect-scrollbar>
            <Activity v-for="activity in allActivities" :key=activity.id :item="activity" class="p-1 activities" @click="$emit('openActivity', activity.id)">

            </Activity>
        </perfect-scrollbar>
    </div>
</template>
<script lang="ts">

import { defineComponent, toRaw } from 'vue';
import { useStravaStore } from '@/stores/stravaStore';
import Activity from './Activity.vue';

export default defineComponent({
    name: 'Activities',

    components: {
        Activity
    },

    data() {
        return {
            activities: [],
        }
    },

    setup() {
        const stravaStore = useStravaStore();
        return { stravaStore }
    },

    computed: {
        allActivities(): any {
            this.activities = toRaw(this.stravaStore.getActivities)
            return this.activities
        }
    },

})
</script>
<style lang="scss">
    .header {
        margin: 20px;
        background-color: #11181d;
        padding: 5px;
        max-height: 100px;
        /* border: aqua;
        border-style: solid; */
    }

    .ps {
        height: 100vh;
    }

    .grid-component {
        box-shadow: 2px 2px 5px #000000;
        margin: 5px;
        background-color: #18242c;
    }
</style>

