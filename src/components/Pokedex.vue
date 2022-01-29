<template>
    <main>
    <section class="search container">
      <input type="search" placeholder="Pesquisar" v-model="searchPokemon">
      <img v-if="searchPokemon == ''" :src="lupa" alt="lupa pesquisar">
    </section>
    <section class="pokedex" id="pokedex">

      <div v-if="list.length != 0" style="margin-bottom: 1rem" :class="pokemon.type" v-for:="pokemon in list" >
        <p v-if="pokemon.id < 10">#00{{ pokemon.id }}</p>
        <p v-else-if="pokemon.id < 100">#0{{ pokemon.id }}</p>
        <p v-else>#{{ pokemon.id }}</p>
        <img style="width: 100%" :src="pokemon.image" :alt="pokemon.name">
        <h4>{{ pokemon.name }}</h4>
      </div>
      <div v-else style="margin-bottom: 1rem" :class="pokemon.type" v-for:="pokemon in pokemons">
        <p v-if="pokemon.id < 10">#00{{ pokemon.id }}</p>
        <p v-else-if="pokemon.id < 100">#0{{ pokemon.id }}</p>
        <p v-else>#{{ pokemon.id }}</p>
        <img style="width: 100%" :src="pokemon.image" :alt="pokemon.name">
        <h4>{{ pokemon.name }}</h4>
      </div>

    </section>
  </main>
</template>

<script>


export default {
    name: "Pokedex",
    props: ['pokemons'],
    data() {
        return {
            lupa: 'images/lupa.svg',
            list: [],
            searchPokemon: ''
        }
    },
    watch: {
    searchPokemon(newValue) {
      this.list = this.pokemons.filter(pokemon => pokemon.name.match(newValue))
    },
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
    left: 1rem;
  }

  .pokedex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .pokedex img {
    padding: 0 1.6rem;
  }

/*======= STYLE POKEMON TYPES =======*/
  .grass,
  .fire,
  .water,
  .bug,
  .normal,
  .poison,
  .electric,
  .fairy,
  .ground,
  .fighting,
  .psychic,
  .rock,
  .ghost,
  .ice,
  .dragon {
    max-width: 10rem;
    border: 1px solid hsla(100, 56%, 54%, 1);
    border-radius: 8px;
    border-end-end-radius: 8px;
    border-end-start-radius: 8px;
    margin-right: .4rem;
  }

  .grass p,
  .fire p,
  .water p,
  .bug p,
  .normal p,
  .poison p,
  .electric p,
  .fairy p,
  .ground p,
  .fighting p,
  .psychic p,
  .rock p,
  .ghost p,
  .ice p,
  .dragon p {
    font-size: 1.15rem;
    text-align: end;
    padding-right: .8rem;
    color: hsla(100, 56%, 54%, 1);
  }

  .grass h4,
  .fire h4,
  .water h4,
  .bug h4,
  .normal h4,
  .poison h4,
  .electric h4,
  .fairy h4,
  .ground h4,
  .fighting h4,
  .psychic h4,
  .rock h4,
  .ghost h4,
  .ice h4,
  .dragon h4 {
    font-size: 1.1rem;
    text-align: center;
    color: #FFFFFF;
    background-color: hsla(100, 56%, 54%, 1);
    border-end-end-radius: 3px;
    border-end-start-radius: 3px;
  }

  .fire {
    border: 1px solid hsla(23, 91%, 58%, 1);
  }

  .fire p {
    color: hsla(23, 91%, 58%, 1);
  }

  .fire h4 {
    background-color: hsla(23, 91%, 58%, 1);
  }

  .water {
    border: 1px solid hsla(219, 77%, 66%, 1);
  }

  .water p {
    color: hsla(219, 77%, 66%, 1);
  }

  .water h4 {
    background-color: hsla(219, 77%, 66%, 1);
  }

  .bug {
    border: 1px solid hsla(66, 68%, 43%, 1);
  }

  .bug p {
    color: hsla(66, 68%, 43%, 1);
  }

  .bug h4 {
    background-color: hsla(66, 68%, 43%, 1);
  }

  .normal {
    border: 1px solid hsla(54, 20%, 58%, 1);
  }

  .normal p {
    color: hsla(54, 20%, 58%, 1);
  }

  .normal h4 {
    background-color: hsla(54, 20%, 58%, 1);
  }

  .poison {
    border: 1px solid hsla(304, 45%, 44%, 1);
  }

  .poison p {
    color: hsla(304, 45%, 44%, 1);
  }

  .poison h4 {
    background-color: hsla(304, 45%, 44%, 1);
  }

  .electric {
    border: 1px solid hsla(47, 94%, 58%, 1);
  }

  .electric p {
    color: hsla(47, 94%, 58%, 1);
  }

  .electric h4 {
    background-color: hsla(47, 94%, 58%, 1);
  }

  .rock {
    border: 1px solid hsla(49, 58%, 45%, 1);
  }

  .rock p {
    color: hsla(49, 58%, 45%, 1);
  }

  .rock h4 {
    background-color: hsla(49, 58%, 45%, 1);
  }

  .psychic {
    border: 1px solid hsla(343, 95%, 66%, 1);
  }

  .psychic p {
    color: hsla(343, 95%, 66%, 1);
  }

  .psychic h4 {
    background-color: hsla(343, 95%, 66%, 1);
  }

  .ghost {
    border: 1px solid hsla(263, 29%, 47%, 1);
  }

  .ghost p {
    color: hsla(263, 29%, 47%, 1);
  }

  .ghost h4 {
    background-color: hsla(263, 29%, 47%, 1);
  }

  .flying {
    border: 1px solid hsla(255, 71%, 75%, 1);
  }

  .flying p {
    color: hsla(255, 71%, 75%, 1);
  }

  .flying h4 {
    background-color: hsla(255, 71%, 75%, 1);
  }

  .fairy {
    border: 1px solid 	hsl(347, 71%, 77%, 1);
  }

  .fairy p {
    color: 	hsl(347, 71%, 77%, 1);
  }

  .fairy h4 {
    background-color:hsl(347, 71%, 77%, 1);
  }

  .ground {
    border: 1px solid hsl(44, 66%, 64%, 1);
  }

  .ground p {
    color: 	hsl(44, 66%, 64%, 1);
  }

  .ground h4 {
    background-color:hsl(44, 66%, 64%, 1);
  }

  .ice {
    border: 1px solid hsl(180, 45%, 72%, 1);
  }

  .ice p {
    color: hsl(180, 45%, 72%, 1);
  }

  .ice h4 {
    background-color: hsl(180, 45%, 72%, 1);
  }

  .dragon {
    border: 1px solid hsl(258, 93%, 60%, 1);
  }

  .dragon p {
    color: hsl(258, 93%, 60%, 1);
  }

  .dragon h4 {
    background-color: hsl(258, 93%, 60%, 1);
  }

  .fighting {
    border: 1px solid hsl(351, 71%, 44%, 1);
  }

  .fighting p {
    color: hsl(351, 71%, 44%, 1);
  }

  .fighting h4 {
    background-color:hsl(351, 71%, 44%, 1);
  }

</style>
