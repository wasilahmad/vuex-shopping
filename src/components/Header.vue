</<template>
    <b-navbar toggleable="sm" type="dark" variant="dark">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <b-navbar-brand>BootstrapVue</b-navbar-brand>
        <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">Shop</b-nav-item>
            <b-nav-item to="/cart">Cart <b-badge variant="light">{{ cartLength }}</b-badge></b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Header',
    computed: {
        ...mapState({
            cartLength: state => state.cart['cart'].length
        })
    },
    created() {
        this.cartLength
    }
}
</script>

<style lang="scss" scoped>

</style>