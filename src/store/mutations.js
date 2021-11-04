export default {
     addProduct(state,newProduct){
        state.products.push(newProduct)
    },
    setUsers(state, users){
        state.users=[...users]
    },

    SET_PRODUCTS_TO_STATE(state, products){
        state.products=[...products]
    },

    SET_USER_TO_CART (state, user){
       
        const s = state.cart.find(item=>item.value.id===user.value.id)
       
        if (s instanceof Object)
             console.log("refuse")
        else
         {
            console.log("add")
            state.cart.push(user)
         }
            
    },

    SET_PAGINATOR (state, o){
        state.paginator.push(o)
    },

    SET_FALSE(state){
        state.paginator.forEach(e => {
            e.isActive=false
        })
    },

    SET_IS_ACTIVE (state, o){
           
        state.paginator[o.index].isActive=o.newIsActive
    },

    SET_ACTIVE_PAGE (state, page){
        state.activePage=page
    },

    REMOVE_USER_WITH_CART (state, user){
        

        let index=0
       
        while(state.cart[index]!=user){
            index++
        }
       
        state.cart.splice(index, 1)
        
    }
}