<template>
    
    <h1>V-main-Wrapper</h1>
    <div class="v-main-wrapper">
       <v-catalog :users="paginator"/>
    </div >
   <div class="pagination">
       <div v-for="i in pages" :key="i">
         
              <v-paginator 
                  :page="i" 
                  :isActive="isActive"
                  @click="pageClick(i)"/>
      </div>
   </div>
        
</template>
<script setup>
import vCatalog from './v-catalog.vue'
import vPaginator from './v-paginator.vue'
import { computed, ref } from 'vue'
import {useStore} from 'vuex'
const store=useStore()
const users=computed(()=>store.getters.PRODUCTS)
const userNumber=3
let pageNumber=ref(store.getters.ACTIVE_PAGE)

const pages=Math.ceil(users.value.length/userNumber)
// const color=ref('orange')
let isActive=ref(false)

const paginator=computed(()=>{
     let from=(pageNumber.value-1)*userNumber
     let to=from+userNumber
     return users.value.slice(from, to)

})  
// document.querySelector("#page_1").classList.add('hover')
// store.commit('SET_IS_ACTIVE',{index:0, newIsActive:true})
const pageClick=page=>{
  pageNumber.value=page
  // color.value='lightblue'
  isActive.value=true
  store.commit('SET_FALSE')
  store.commit('SET_IS_ACTIVE',{index:page-1, newIsActive:true})
  store.commit('SET_ACTIVE_PAGE', page)
}
</script>
<style>
    .v-main-wrapper{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
        /* justify-content: flex-start;
        align-items: stretch;
        max-width: 500px;
        margin: 10px auto; */
    }
  .pagination{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
        
      
   }
 
  .page{
        border: 1px solid lightblue;
        padding:8px;
        margin:5px;
        /* background: v-bind(color);*/
  } 
  /* .page:hover, .page:active{
        border: 1px solid orange;
  }
  #page_1{
    border-color: v-bind(color);
  }  
  #page_1:hover{
    border-color: orange;
  }   
       */
  .active{
    border-color: orange;
  }
  
  div {
    caret-color: transparent;
  }
</style>