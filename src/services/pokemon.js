import { http } from "./config";

export default {
    listPokemon: (id) => {
        return http.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    }
}