<template lang="">
    <div>
        <Doughnut :data="chartData" :options="chartOptions"/>
        {{RideTypes}}
        hello ride types :)
    </div>
</template>
<script lang="ts">

import { defineComponent, toRaw } from 'vue';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import { useStravaStore } from '@/stores/stravaStore';

ChartJS.register(ArcElement, Tooltip, Legend)

export default defineComponent({

name: 'RideTypes',

components: {
    Doughnut
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
    chartData(): any {
        let rideTypes = toRaw(this.stravaStore.getRideTypes)
        let labels = []
        let data = []
        for(let type in rideTypes) {
            labels.push(type)
            data.push(rideTypes[type])
        }

        const result = {
            'labels': labels,
            'datasets': [
                {
                    'backgroundColor': ['#41B883', '#E46651'],
                    'data': data
                }
            ]
        }
        return result
    },

    chartOptions(): any {
        const options = {
            responsive: false,
            maintainAspectRatio: false,
        }

        return options
    }
}

})

</script>
<style lang="">
    
</style>