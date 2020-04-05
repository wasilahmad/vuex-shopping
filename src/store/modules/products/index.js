import API from '@/api/api';

export default {
    namespaced: true,
    state: {
        lessons:[],
        loading: false
    },
    // getters are used to get state data 
    getters: {
        getLessons( state ) {
            return state.lessons
        },
        getLoader( state ) {
            return state.loading
        }
    },
    // mutations are used to manipulate state data
    mutations: {
        setLessons( state, payload ) {
            state.lessons = payload
        },
        toggleLoader( state, payload ) {
            return state.loading = payload
        }
    },
    // actions are used to perform async operations
    actions: {
        fetchLessons(context) {
            // to show loader
            context.commit('toggleLoader', true);
            
            // to make delay in response
            setTimeout(() => {
                API.fetchProducts().then( data => {
                    //context.state.lessons = data[0]['lessons']; // bad practice
                    context.commit('setLessons', data[0]['lessons']); // good practice 
                    
                    // to show loader
                    context.commit('toggleLoader', false);                                       
                });
            }, 2000);            
        }
    }
}