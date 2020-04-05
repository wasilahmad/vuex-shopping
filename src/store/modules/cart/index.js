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
            if(payload) {
                state.cart.push(payload);
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