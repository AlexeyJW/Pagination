<template>
    <div class="v-catalog-item">
        <div class="name"></div>
             <strong>{{user.name}}</strong>
             <hr/>
        <div class="info">
            id: {{user.id}}
            phone: {{user.phone}}
        </div>
        
    </div>
</template>
<script setup>
    // import {ref, reactive, computed, onMounted} from 'vue'
    // import { useStore} from 'vuex'
    import{defineProps} from 'vue'
    defineProps({
        user:Object
    })
    // const store=useStore()
   
   // store.dispatch('GET_PRODUCTS_FROM_API')
    // const PR=computed(()=>store.getters.PRODUCTS)
 
   
    // const art={
    //     name: 'Apple',
    //     price: '20$'
    // }
   
   
  
  
   
   
</script>
<style>
   .v-catalog-item {
       /* flex-basis: 25%; */
       box-shadow: 0 0 8px 0 darkgray;
       padding: 5px;
       margin-bottom: 5px;
       height: 200px;
       width: 300px;
       
   }
</style>