<template>
  <b-card
          :title="data.name"
          :img-src="data.image"
          :img-alt="data.name"
          img-center
          tag="div">
          <b-card-text>
           {{ data.description }}
          </b-card-text>
          <div class="details">
            <p><strong>Author:</strong> {{ data.author }}</p>
            <p><strong>Duration:</strong> {{ data.duration }}</p>
            <p><strong>Published On:</strong> {{ data.publishDate }}</p>
            <p><strong>Price:</strong> INR {{ data.price }}</p>
          </div>
          <b-button @click="addToCart(data)" variant="primary">Add To Cart</b-button>
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
      console.log('item click', payload)
      //debugger
      this.$store.commit('cart/addCartItem', payload);
    }
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
    min-height: 285px;

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

    .btn-primary {
      margin-top: auto;
    }
  }
}
</style>
