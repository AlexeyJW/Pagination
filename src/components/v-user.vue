<template>
    <div class="box">
    <div class="v-user">
        <div class="name">
            <h1><strong>{{user.name}}</strong></h1>
          
        </div>
       
        <br/>
         id: {{userId}}
         <br/>
         phone: {{user.phone}}
         <br/>
         e-mail: {{user.email}}
        <div id="cart-btn">
            <button class="user-btn" @click="addCart">Select</button>
        </div>
     </div>    
    </div>
</template>

<script setup>
  import {defineProps, computed} from 'vue'
  import {useStore} from 'vuex'
   
   const id=defineProps({
        userId:{
            type:String,
            default:'1'
        }
   })
  
  const store=useStore()
  
  const user=computed(()=>store.getters.USER(id.userId))
  
  const addCart=()=>{
     
            store.commit('SET_USER_TO_CART', user)
           }
  
</script>

<style>
    .box{
     
        display:flex;
        justify-content:center;
        /* flex-direction: center; */
        /* align-content:flex-end; */
        
    }
   
    .v-user{
        
        /* justify-content:center; */
        display:flex;
        flex-direction: column;
        align-items: stretch;
        border: 1px solid lightgray;
        margin: 10px;
        box-shadow: 0 0 8px 0 darkgray;
        padding: 10px;
        /* flex-basis:500px; */
        width:700px;
       
    }
    /* .btn{
        display:flex;
        flex-direction:row;
    } */
    
    #cart-btn{
       
      
        justify-content:flex-end;
        align-self: flex-end;
        margin-left: 40px;
    }
    .user-btn{
        
        border:1px solid;
        background: rgb(214, 247, 214);       
        
    }
    .user-btn:active{
        border:2px solid orange;
    }
    
</style>