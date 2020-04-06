export default {
    namespaced: true,
    state: {
        cart:[]
    },
    getters: {
        getCartItems( state ) {
            return state.cart;
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
                    item.id === payload.id ? item.quantity++ : null
                });
            }
        },
        removeCartItem( state, payload ) {
            const index = state.cart.findIndex( item => item.id === payload.id);            
            state.cart.splice(index, 1);
        }
    },
    actions: {
    }
}