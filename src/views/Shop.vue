<template>
  <div class="shop-page">
    <b-row>
      <b-col>
        <h1 class="page-title">Shopping</h1>
      </b-col>
    </b-row>
    
    <h2 v-show="isLoading">Loading...</h2>

    <b-row v-if="!isLoading">
      <b-col cols="12" sm="6" md="4" lg="3" v-for="lesson in lessonsList" :key="lesson.id">        
        <ProductCard :data="lesson"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/ProductCard.vue'

import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  name: 'Shop',
  data() {
    return {
    }
  },
  components: {
    ProductCard
  },
  computed: {
    ...mapGetters({
      lessonsList: 'products/getLessons',
      isLoading: 'products/getLoader'
    })
  },
  methods: {     
  },
  created() { 
    
    // API.fetchProducts().then( data => {
    //   this.lessons = data[0]['lessons']
    // });

    console.log('store', store);

    // async call to load lessons data
    store.dispatch('products/fetchLessons'); 
  }
}
</script>
