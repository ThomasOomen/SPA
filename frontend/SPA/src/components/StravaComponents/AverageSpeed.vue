<template lang="">
    <div>
        
        <div class="p-1">
            <h2>Average speed</h2>
            <div>
                <h3>{{ stravaStore.getterAverageSpeed }} km/u</h3>
            </div>
        </div>

    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStravaStore } from '@/stores/stravaStore';

export default defineComponent({
    name: 'AverageSpeed',

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
<style lang="">
    
</style>