<template>
  <div>
    <Header/>
    <Home/>
    <Footer/>
  </div>
</template>

<script>
import Header from './views/template/Header'
import Footer from './views/template/Footer'
import Home from './views/Home'
export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Home
  }
}
</script>
