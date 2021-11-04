<template>
    <div class="v-catalog"       
         v-for="i in users" :key="i.id">
            
               <v-catalog-item :user="i" @click="item(i)"/>
   </div>
</template>
<script setup>
   import vCatalogItem from './v-catalog-item.vue'
   import vUser from './v-user.vue'
//    import {useStore} from 'vuex'
   import {computed} from 'vue'
   import { useRouter } from 'vue-router'
   const props=defineProps({
       users:Array
   })

   const router=useRouter()
//    const store=useStore()
   //const users=computed(()=>store.getters.PRODUCTS)
   const item=(user)=>{
        
       router.push({name:'User',params:{userId:user.id}})
   }
  
   
</script>
<style>

   .v-catalog{
       display:flex;
       /* flex-wrap: wrap; */
       /* justify-content: center; */
       align-items: center;
       flex-direction:center;
       justify-content:center;
       margin: 10px;
   }
  
</style>