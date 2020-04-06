<template>
  <b-card
          :title="data.name"
          :img-src="data.image"
          :img-alt="data.name"
          img-center
          tag="div">
          <b-card-text>
           {{ data.description | ellipsis }}
          </b-card-text>
          <div class="details">
            <p><strong>Author:</strong> {{ data.author }}</p>
            <!-- <p><strong>Duration:</strong> {{ data.duration }}</p>
            <p><strong>Published On:</strong> {{ data.publishDate }}</p> -->
            <p><strong>Price:</strong> INR {{ data.price }}</p>
          </div>
          <div class="btn-actions">
            <b-button @click="addToCart(data)" variant="primary">Add To Cart</b-button>
            <b-button @click="goToDetail(data)" variant="secondary">Details</b-button>
          </div>
  </b-card>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    data: Object
  },
  methods: {
    addToCart(payload) {
      //console.log('addToCart', payload);     
      this.$store.commit('cart/addCartItem', payload);
      // to show toast message
      this.$bvToast.toast(`Item added to the cart. Click here visit the cart`, {
        title: 'Success',
        toaster: 'b-toaster-top-center',
        variant:'success',
        to: '/cart',
        autoHideDelay: 2000,
        appendToast: true
      });
    },
    goToDetail(payload) {
      this.$router.push('/course/'+ payload.id)
      this.$store.dispatch('products/fetchLessonsDetails', payload);
    }
  },
  filters: {
    ellipsis( value ) {
      return value.slice(0, 53).concat('...');
    }
  },
  created() {
    // console.log(this.$router)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  margin-bottom: 30px;
  
  & .card-img {
    max-width: 150px;
    margin: 15px auto 0;
  }

  & .card-body {
    display: flex;
    flex-direction: column;
    min-height: 225px;

    .card-title {
      font-size: 18px;
    }
    
    .details {
      margin-bottom: 20px;
        p {
        font-size: 13px;
        margin-bottom: 5px;
      }
    }

    .btn-actions {
      margin-top: auto;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
