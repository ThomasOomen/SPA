<template lang="">
    <div v-if="checkIfChartIsBuildable">
        <Line :data="chartData" :options="chartOptions" class="p-2"></Line>
    </div>
</template>
<script lang="ts">

import { useStravaStore } from '@/stores/stravaStore';
import { defineComponent, toRaw } from 'vue';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default defineComponent ({
    name: 'RideChart',

    components: {
        Line
    },

    setup() {
        const stravaStore = useStravaStore()
        let activeActivity = toRaw(stravaStore.getActiveActivity)
        if(activeActivity != '') {
            stravaStore.getChart(activeActivity)
        }

        return { stravaStore }
    },
    
    data() {
        return {
            chart: '',
        }
    },

    methods: {
    },

    computed: {
        chartData(): any {
            let chart = toRaw(this.stravaStore.getterChart)
            if(chart != '') {
                let labels = chart['data']['time']['data']
                const result = {
                    'labels': labels,
                    'datasets': [
                        {
                            'label': 'Altitude',
                            'borderColor': '#249EBF',
                            'data': chart['data']['altitude']['data'],
                            'lineTension': 0,
                        },
                        {
                            'label': 'Velocity',
                            'borderColor': '#00FF00',
                            'data': chart['data']['velocity_smooth']['data'],
                            'lineTension': 0,  
                        },
                        {
                            'label': 'Grade',
                            'borderColor': '#FF0000',
                            'data': chart['data']['grade_smooth']['data'],
                            'lineTension': 0,  
                        },                          
                    ]
                }
                return result
            } else {
                return false
            }

        },

        checkIfChartIsBuildable(): any {
            let buildable = toRaw(this.stravaStore.getterChart)
            if(buildable != '') {
                return true
            } else {
                return false
            }
        },

        chartOptions(): any {
            const options = {
                responsive: true,
                maintainAspectRatio: true,
                color: '#FFFFFF'
            }
            return options
        }
    }
})

</script>
<style lang="scss">
    
</style>