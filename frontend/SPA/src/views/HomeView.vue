<template lang="">
  <div>
    Welcome to the SPA
    {{ home.greeting }} {{ home.name }} 
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useHomeStore } from '@/stores/homeStore';

export default defineComponent({

  setup() {
    const home = useHomeStore()
    home.getGreeting()
    home.getUsername()

    return { home }

  }, 

  // async mounted() {
  //   const home = useHomeStore()
  //   await getGreeting() 
  //   async function getGreeting(this: any) {
  //     console.log('hello :))))')
  //     home.getGreeting()
  //     let greeting = home.greeting
  //     console.log(greeting)
  //     return { greeting }
  //   } 
  // },
})
</script>
<style lang="scss" scoped>

</style>