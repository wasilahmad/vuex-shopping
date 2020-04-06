<template>
    <div class="product-detail">
        <b-row>
            <b-col>
                <h1 class="page-title">{{product.name}}</h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="3">
                <img :src="product.image" :alt="product.name" style="max-width:240px" />
            </b-col>
            <b-col cols="9">
                <div class="description">
                    <p>{{ product.description }}</p>
                    <p>{{ product.details }}</p>
                </div>
                <div class="about-product">
                    <p><strong>Author:</strong> {{ product.author }}</p>
                    <p><strong>Duration:</strong> {{ product.duration }}</p>
                    <p><strong>Published On:</strong> {{ product.publishDate }}</p>
                    <p><strong>Price:</strong> INR {{ product.price }}</p>
                </div>
                <div class="btn-actions">
                    <b-button @click="addToCart" variant="primary">Add To Cart</b-button>
                </div>                
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Detail',
    props: {
        data: Object
    },
    computed: {
        ...mapState({
            product: state => state.products['lessonsDetails']
        })
    },
    methods: {
        addToCart() {
            this.$store.commit('cart/addCartItem', this.product);
            // to show toast message
            this.$bvToast.toast(`Item added to the cart. Click here visit the cart`, {
                title: 'Success',
                toaster: 'b-toaster-top-center',
                variant:'success',
                to: '/cart',
                autoHideDelay: 2000,
                appendToast: true
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>