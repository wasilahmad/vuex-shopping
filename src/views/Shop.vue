<template>
  <div class="shop-page">
    <b-row>
      <b-col>
        <h1 class="page-title">Shopping</h1>
      </b-col>
    </b-row>

    <Loader :isVisible="isLoading" position="center"/>
    
    <b-row v-show="!isLoading" class="animate-from-bottom">
      <b-col cols="12" sm="6" md="4" lg="3" v-for="lesson in lessonsList" :key="lesson.id">        
        <ProductCard :data="lesson"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/ProductCard.vue'
import Loader from '@/components/Loader.vue'

import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  name: 'Shop',
  data() {
    return {
    }
  },
  components: {
    ProductCard,
    Loader
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

<style lang="scss" scoped>
/* Add animation to "page content" */
.animate-from-bottom {
  position: relative;
  -webkit-animation-name: animatebottom;
  -webkit-animation-duration: 1s;
  animation-name: animatebottom;
  animation-duration: 1s
}

@-webkit-keyframes animatebottom {
  from { bottom:-100px; opacity:0 } 
  to { bottom:0px; opacity:1 }
}

@keyframes animatebottom { 
  from{ bottom:-100px; opacity:0 } 
  to{ bottom:0; opacity:1 }
}
</style>
