<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>
          <Header />
        </b-col>
      </b-row>
    </b-container>
    <b-container>      
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name:'App',
  components: {
    Header
  }
}
</script>

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
