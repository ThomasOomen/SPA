<template lang="">
    <div>
        <div>
            <h3>{{item.name}}</h3>
        </div>
        <div>
            Date: {{item.start_date}}
        </div>
        <div>
            Type: {{item.type}}
        </div>
    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Activity',

    props: {
        item: {
            type: Object,
            required: true,
        }
    },    
})
</script>
<style lang="scss">
</style>