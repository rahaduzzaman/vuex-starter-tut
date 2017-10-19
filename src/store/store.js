import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            {name: 'Shirt', price: '352'},
            {name: 'Pant', price: '650'},
            {name: 'Sharee', price: '500'},
            {name: 'Shoe', price: '300'},
            {name: 'Skirt', price: '150'}
        ]
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map( product => {
                return {
                    name: '**'+product.name,
                    price: product.price/2
                }
            });
            return saleProducts;
        }
    },
    mutations: {
        reducePrice: (state, payload) => {
            return state.products.forEach(product => {
                product.price -= payload;
            });
        }
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(function() {
                context.commit('reducePrice',payload);
            },2000);
        }
    }
});