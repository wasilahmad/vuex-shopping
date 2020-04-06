<template>
  <div class="cart-page">
    <b-row>
      <b-col>
        <h1 class="page-title">Cart</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" lg="9">
        <div class="custom-grid">
          <div class="grid-header">
            <div class="grid-row">
              <div class="grid-cell text-center">Image</div>
              <div class="grid-cell">Product</div>
              <div class="grid-cell text-center">Price</div>
              <div class="grid-cell text-center">Quantity</div>
              <div class="grid-cell text-center">Total</div>
              <div class="grid-cell text-center">Remove</div>
            </div>
          </div>
          <div class="grid-body">
            <div class="grid-row" v-if="cartItems.length === 0">
              <div class="grid-cell" style="flex: 0 0 100%; max-width:100%;">Your cart is currently empty :(</div>
            </div>
            <div class="grid-row" v-for="item in cartItems" :key="item.id">
              <div class="grid-cell text-center">
                <img :src="item.image" :alt="item.name" style="width:80px">
              </div>
              <div class="grid-cell">{{ item.name }}</div>
              <div class="grid-cell text-center">{{ item.price }}</div>
              <div class="grid-cell text-center">
                <b-input-group class="input-group-counter">
                  <b-input-group-prepend>
                    <b-button variant="secondary" @click="decreaseQuantity(item)">-</b-button>
                  </b-input-group-prepend>
                  <b-form-input type="text" readonly :value="item.quantity"></b-form-input>
                  <b-input-group-append>
                    <b-button variant="secondary" @click="increaseQuantity(item)">+</b-button>
                  </b-input-group-append>
                </b-input-group>
              </div>
              <div class="grid-cell text-center">{{ item.price * item.quantity }}</div>              
              <div class="grid-cell text-center">
                <b-icon icon="trash" @click="removeItem(item)" style="width: 20px; height: 20px; cursor:pointer"></b-icon>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col cols="12" lg="3">
        <ul class="list-group">
          <li class="list-group-item active">Cart Totals</li>
          <li class="list-group-item">Sub Total: <span class="ml-auto">{{ calcSubTotal }}</span></li>
          <li class="list-group-item">Taxes: <span class="ml-auto">{{ calcTax }}</span></li>
          <li class="list-group-item">Shipping Charges: <span class="ml-auto">{{ calcShippingCharge }}</span></li>
          <li class="list-group-item">Total: <span class="ml-auto">{{ calcTotal }}</span></li>
          <li class="list-group-item">
            <b-button variant="success" class="btn-block">Proceed To Checkout</b-button>
          </li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Cart',
  data(){
    return {

    }
  },
  computed: {
    ...mapState({
      cartItemsLength: state => state.cart['cart'].length
    }),
    ...mapGetters({
      cartItems: 'cart/getCartItems',
    }),
    // cartItems() {
    //   return this.$store.getters['cart/getCartItems'];
    // },
    calcSubTotal(){
      const tempCart = this.cartItems;
      let subTotal = 0;
      for( let i=0; i < tempCart.length; i++) {
        subTotal += tempCart[i].price * tempCart[i].quantity;
      }
      return parseFloat(subTotal).toFixed(2) // to convert two digit decimal value
    },
    calcTax() {
      const tempTax = this.calcSubTotal;
      const tax = tempTax * 0.1; // 10% tax on each item
      return parseFloat(tax).toFixed(2);
    },
    calcShippingCharge() {
      return parseInt(this.calcSubTotal) ? parseFloat(100).toFixed(2) : parseFloat(0).toFixed(2);
    },
    calcTotal() {
      let total = parseInt(this.calcSubTotal) + parseInt(this.calcTax) + parseInt(this.calcShippingCharge);
      return parseFloat(total).toFixed(2);
    }
  },
  methods: {
    removeItem( payload ) {
      return this.$store.commit('cart/removeCartItem', payload);
    },
    increaseQuantity( payload ) {
      return payload.quantity += 1
    },
    decreaseQuantity( payload ) {
      if(payload.quantity > 1) {
        payload.quantity -= 1
      } else {
        this.$store.commit('cart/removeCartItem', payload);
      }
    }
  }
}
</script>

<style lang="scss">

.custom-grid {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  & .grid-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;

    & .grid-cell {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
      padding: 5px 8px;

      &:last-child {
          flex: 0 0 80px;
          max-width: 80px;   
          text-align: center; 
      }
    }
  }

}

.list-group {

  & .list-group-item {
    display: flex;

  }
}

.input-group-counter {
  width: 110px;
  margin: 0 auto;
  
  & .form-control {
    text-align: center;
  }
}
</style>