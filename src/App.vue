<template>
   
   <div id="app">
       <div id="nav">
          <router-link to='/'>Home</router-link>|
          <router-link to='/login'>Login</router-link>
      
      
      <button @click="routeSearch">Search</button>
      <button @click="routeWrapper">Wrapper</button>
      <button @click="routerCart">Cart ({{cart}})</button>
     </div>
      <router-view />
     
   </div>
</template>

<script setup>
  
   import {useRouter, useRoute} from 'vue-router'
   import {ref, computed, onMounted} from 'vue'
   import {useStore} from 'vuex'
    
     const store=useStore()
     onMounted(()=> store.dispatch('GET_PRODUCTS_FROM_API'))
     const cart=computed(()=> store.getters.CART.length)
     const router=useRouter()
     const route=useRoute()
     
     const routeSearch=()=>router.push('Search')
     const routeWrapper=()=>router.push('Wrapper')
     const routerCart=()=>router.push('Cart')
     
   //   const stateRoute=ref()
   //   stateRoute.value=route
     

   // const login =()=>{
   //    window.user=username.value
   //    const redirectPath=route.qwery.redirect || '/protected'
   //    route.push(redirectPath)
   // }
 
   // return {username, password, login}
</script>

<style>
*{
    text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
  }

</style>
