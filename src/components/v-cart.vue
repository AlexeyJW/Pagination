<template>
    <div class="v-cart">
     <div class="cart">
      <strong>VCart</strong> 
       <div
         v-for="(i, index) in users" :key="index">
         {{i._value.name}}
         <button class="cart-b"
         @click="remoteUser(i)">Remote</button>
       </div>
      </div> 
    </div>
</template>
<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'

const store=useStore()
const users=computed(()=>store.getters.CART)


const remoteUser=user=>{
  store.commit('REMOVE_USER_WITH_CART',user)
}
</script>
<style>
   .v-cart{
        display:flex;
        justify-content: center;
        margin-top: 20px;

    }
   .cart{
        justify-content: flex-start;
        /* align-content: center; */
        /* align-self:flex-end; */
        align-items:flex-start;
        flex-direction:column;
        border:1px solid grey;
        width: 700px;
        padding: 15px;
        margin:15px;
   }
   .cart-b{
     align-self:flex-end;
     margin-left: 10px;
   }
  
</style>