import axios from "axios";

const pokeApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})

export const PokemonsInfo = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/"
})

export default pokeApi