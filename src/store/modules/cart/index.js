export default {
    namespaced: true,
    state: {
        cart:[]
    },
    getters: {
        getCartItems( state ) {
            return state.cart;
        },
        getSubTotal( state ){
            const tempCart = state.cart;
            let subTotal = 0;
            for( let i=0; i < tempCart.length; i++ ) {
              subTotal += tempCart[i].price * tempCart[i].quantity;
            }
            return subTotal
        },
        getTax( state, getters ) {            
            const tempTax = getters.getSubTotal;
            const tax = tempTax * 0.05; // 5% tax on each item
            return tax
        },
        getShippingCharge( state ) {
            const tempCart = state.cart;
            const charges = tempCart.length * 50; // 50 per item
            return charges
        },
        getTotal( state, getters ) {
            const total = getters.getSubTotal + getters.getTax + getters.getShippingCharge
            return total
        },
        getTotalCartItems( state ) {
            return state.cart.reduce((acc, obj) => acc += obj.quantity, 0)
        }
    },
    mutations: {
        addCartItem( state, payload ) {
            const existingCartItem = state.cart.find( item => item.id === payload.id);
            // to check whether selected item is present or not
            if(state.cart.indexOf(existingCartItem) === -1) {
                state.cart.push({...payload, quantity: 1});
            } else {
                //console.log('existingCartItem', existingCartItem)
                // if item is already exist then only change its quantity
                state.cart.find( item => {
                    if(item.id === payload.id){
                        item.quantity++ 
                    } 
                });
            }
        },
        removeCartItem( state, payload ) {
            const index = state.cart.findIndex( item => item.id === payload.id);            
            state.cart.splice(index, 1);
        },
        increamentItem( state, payload ) {
            state.cart.find( item => {
                if(item.id === payload.id){
                    item.quantity += 1 
                } 
            });
        },
        decreamentItem( state, payload ) {
            state.cart.find( item => {
                if(item.id === payload.id){
                    item.quantity -= 1
                } 
            });
        }
    },
    actions: {
    }
}