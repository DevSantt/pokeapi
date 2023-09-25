import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PokemonsInfo } from "../../services/api";
import axios from "axios";



export const Profile = () => {
    const [pokemonData, setPokemonData] = useState({
        name: [],
        abilities: [],
        moves: [],
        abilitiesEffect: []

    })

    const { id } = useParams();

    useEffect(() => {
        getPokemonData()
    }, [])

    const getPokemonData = () => {
        PokemonsInfo
            .get(`${id}`)
            .then(res => setPokemonData({

                name: res.data.name,
                abilities: res.data.abilities,
                moves: res.data.moves
            }))

    }

    const [ability, setAbility] = useState([]);

    const abilitiesUrl = pokemonData.abilities.map(({ ability }) => {
        return ability.url
    })

    useEffect(() => {
        axios.all(abilitiesUrl.map(abilityUrl => axios.get(abilityUrl).then(res => {
                let effectData = []
                effectData.push(res.data)
                setAbility(effectData)
        })))
    }, [])


    return (
        <section>
            <h1>{pokemonData.name}</h1>
            <img src={`https://img.pokemondb.net/artwork/avif/${id}.avif`} alt={`Default sprite of ${pokemonData.name}`} style={{ width: 250 }} />


           <ul>
            {
                ability.map((element, index) =>{
                    return(
                        <li key={index}>
                            <h4>{element.name}</h4>
                            <p>{element.effect_entries[1].language.name === "en" ? element.effect_entries[1].effect : element.effect_entries[0].effect}</p>
                        </li>
                    )
                })
            }
           </ul>


        </section>

    )
}
