<template>
  <main>
    <section class="search container">
      <input type="search" placeholder="Pesquisar">
      <img :src="lupa" alt="lupa pesquisar">
    </section>
    <section class="pokedex">
      <div class="card">
        <p>#001</p>
        <img src="images/bulbasaur.png" alt="">
        <h4>Bulbasaur</h4>
      </div>

      <div class="card">
        <p>#001</p>
        <img src="images/bulbasaur.png" alt="">
        <h4>Bulbasaur</h4>
      </div>

      <div class="card">
        <p>#001</p>
        <img src="images/bulbasaur.png" alt="">
        <h4>Bulbasaur</h4>
      </div>
    </section>
  </main>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      lupa: 'images/lupa.svg'
    }
  },
  components: {

  }
}
</script>

<style scoped>

  .search {
    position: relative;
    padding-bottom: 1.6rem;
  }

  .search input {
    width: 100%;
    height: 2.4rem;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
  }

  .search input::placeholder {
    text-align: center;
    font-size: 1rem;
  }

  .search img {
    position: absolute;
    top: .3rem;
    left: 10rem;
  }

  .pokedex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    
  }

  .card {
    max-width: 10rem;
    border: 1px solid hsla(100, 56%, 54%, 1);
    border-radius: 8px;
    margin-right: .4rem;
  }

  .card p {
    text-align: end;
    padding-right: .8rem;
    color: hsla(100, 56%, 54%, 1);
  }

  .card img {
    padding: 0 1.6rem;
  }

  .card h4 {
    text-align: center;
    color: #FFFFFF;
    background-color: hsla(100, 56%, 54%, 1);
  }

</style>
