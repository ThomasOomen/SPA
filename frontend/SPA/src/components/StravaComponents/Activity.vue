<template lang="">
    <div class="grid-component">
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

.grid-component {
        box-shadow: 2px 2px 5px #000000;
        margin: 5px;
        background-color: #18242c;
    }
</style>