import axios from 'axios'
import NProgress from 'nprogress'

axios.interceptors.request.use(config=>{
    NProgress.start()
    return config
})

axios.interceptors.response.use(response=>{
    NProgress.done()
    return response
})

export  const posts=({commit})=>{
   axios.get('https://jsonplaceholder.typicode.com/users')
   .then(function(response){
       console.log(response)
       commit('setUsers',response.data )
   }).catch(function(error){
       console.log(error)
   })
}
export const GET_PRODUCTS_FROM_API=({commit})=>{
       axios.get ('https://jsonplaceholder.typicode.com/users')
       .then (products=>{
           commit('SET_PRODUCTS_TO_STATE', products.data)
           console.log(products.data)
           
       })
       .catch(function(error){
        console.log(error)
        
    })
}