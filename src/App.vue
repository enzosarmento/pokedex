<template>
  <div class="global">
    <Navbar />
    <Pokedex :pokemons="pokemons"/>
  </div>
</template>


<script>
import Navbar from "./components/Navbar.vue"; 
import Pokedex from "./components/Pokedex.vue"


export default {
  name: "App",
  data() {
    return {
      pokemons: [{id: '',  name: '', image: '', type: ''}],
    }
  },
  components: {
    Navbar,
    Pokedex,
  },
  methods: {
    async listPokemon() {

      for (let i = 0; i < 151; i++) {
        const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`)
        const data = await req.json()

        this.pokemons[i] = {}
        this.pokemons[i].id = data.id
        this.pokemons[i].name = data.forms[0].name
        this.pokemons[i].image = data.sprites.other['official-artwork'].front_default
        this.pokemons[i].type = data.types[0].type.name
      }
    }
  },
  mounted() {

    this.listPokemon()
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
}

.container {
  margin-left: 2.4rem;
  margin-right: 2.4rem;
}

.global {
  background-color: hsla(0, 0%, 97%, 1);
}
</style>
