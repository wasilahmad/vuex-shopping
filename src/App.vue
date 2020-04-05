<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>
          <b-navbar toggleable="sm" type="dark" variant="dark">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
            <b-navbar-brand>BootstrapVue</b-navbar-brand>
            <b-collapse id="nav-text-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-item to="/">Shop</b-nav-item>
                <b-nav-item to="/cart">Cart</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
    <b-container>      
      <router-view/>
    </b-container>
  </div>
</template>

<style lang="scss" >
body {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
}

.navbar-dark .navbar-nav .nav-link.router-link-exact-active,
.navbar-dark .navbar-nav .nav-link:focus {
  color: rgba(255, 255, 255, 1);
} 

.page-title {
  font-size: 28px;
  margin: 30px 0;
}

</style>
