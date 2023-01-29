<template lang="">
    <div>
        <!-- <StravaProfileInformation>

        </StravaProfileInformation> -->
        <RideTypes>

        </RideTypes>

        <div class="test">

        </div>
    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import { useStravaStore } from '@/stores/stravaStore';
import ProfileInformation from './ProfileInformation.vue';
import RideTypes from './RideTypes.vue';

export default defineComponent({

    components: {
        ProfileInformation,
        RideTypes,
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
        }
    },

    methods: {
    }

})




</script>
<style lang="scss">
    .test {
        height: 700px;
    }

    
</style>

<!-- 
    Total distance
    Circle diagram on different types
 -->