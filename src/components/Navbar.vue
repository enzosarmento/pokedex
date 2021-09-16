<template>
    <header>
        <nav class="navbar container">
            <div class="logo">
                <img :src="pokeballNav" alt="Icon Pokeball">
                <h1>Pokédex</h1> 
            </div>
            <div class="arrow">
                <span>#</span>
                <img :src="arrowDown" alt="Flecha para baixo">
            </div>
            
        </nav>
    </header>

</template>

<script>
export default {
  name: "Navbar",
  data() {
      return {
          pokeballNav: 'images/pokeball_nav.svg',
          arrowDown: 'images/arrow_down.svg'
      }
  }
};
</script>

<style scoped>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding-top: 2.4rem;
        padding-bottom: 1.2rem;
    }

    .logo {
        display: flex;
        align-items: center;
    }

    .logo h1 {
        font-size: 2.4rem;
        margin-left: 1.6rem;
    }

    .arrow {
        display: flex;
        align-items: center;
    }

    .arrow span {
        font-size: 1rem;
        margin-right: .2rem;
    }
</style>