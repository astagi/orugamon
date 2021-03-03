<template>
  <div id="app">
    <o-field :variant="fieldType" :message="fieldMessage" label="Search your Pokèmon">
      <o-input type="text" value="" v-model="search"> </o-input>
    </o-field>
    <div class="buttons-container">
      <o-button @click="searchPokemon" :disabled="search.length === 0">Search Pokèmon</o-button>
    </div>
    <img :src="pokemon ? pokemon.sprites.front_default : null">
    <o-table v-if="pokemon" :data="pokemon ? pokemon.stats : []" :columns="columns"></o-table>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      search: '',
      pokemon: null,
      isPokemonFound: null,
      data: [],
      columns: [
        {
          field: 'stat.name',
          label: 'Stat',
          numeric: true
        },
        {
          field: 'base_stat',
          label: 'Value'
        },
        {
          field: 'effort',
          label: 'Effort'
        }
      ]
    }
  },
  components: {},
  computed: {
    fieldType(){
      if (this.isPokemonFound === true) {
        return 'success'
      } else if (this.isPokemonFound === false) {
        return 'error'
      }
      return null
    },
    fieldMessage(){
      if (this.isPokemonFound === true) {
        return 'Catched!'
      } else if (this.isPokemonFound === false) {
        return 'Pokèmon not found!'
      }
      return null
    }
  },
  methods: {
    searchPokemon () {
      this.pokemon = null
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.search.toLowerCase()}`)
      .then(response => response.json())
      .then(data => {
        this.pokemon = data
        this.isPokemonFound = true
      })
      .catch(() => {
        this.isPokemonFound = false
      });
    }
  }
}
</script>

<style>
@font-face {
  font-family: "Press Start 2P";
  src: local("Press Start 2P"),
   url(./fonts/PressStart2P-Regular.ttf) format("truetype");
}
#app {
  text-align: center;
  color: #2c3e50;
  padding: 3rem;
}
.buttons-container {
  padding: 1rem;
}
</style>
