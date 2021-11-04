
export const PRODUCTS=state=>state.products

export const USER=state=>id=>{
     return state.products.find(todo=>todo.id==id)
  }

export const CART=state=>state.cart
export const PAGINATOR=state=>page=>state.paginator[page]
export const ACTIVE_PAGE=state=>state.activePage
