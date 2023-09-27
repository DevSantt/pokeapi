import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonsInfo } from "../../services/api";
import axios from "axios";
import styled, {css} from "styled-components";


export const Profile = () => {
    const [pokemonData, setPokemonData] = useState({
        name: [],
        types: [],
        abilities: [],
        moves: [],
        
    });

    const [ability, setAbility] = useState([]);

    const { id } = useParams();

    const getPokemonData = async () => {
        try {
            const res = await PokemonsInfo.get(`${id}`);
            const abilitiesUrl = res.data.abilities.map(
                ({ ability }) => ability.url
            );

            const pokemonAbilitiesDescriptions = await Promise.all(
                abilitiesUrl.map((abilityUrl) =>
                    axios.get(abilityUrl).then((res) => res.data)
                )
            );

            setPokemonData({
                name: res.data.name,
                types: res.data.types,
                abilities: res.data.abilities,
                moves: res.data.moves,
            });

            setAbility(pokemonAbilitiesDescriptions);
        } catch (error) {
            console.error("Something is wrong!", error);
        }
    };

    useEffect(() => {
        getPokemonData();
    }, [id]); 

    console.log(pokemonData.types)

    return (
        <section>
            <div>
            <h1>{pokemonData.name}</h1>
            <img src={`https://img.pokemondb.net/artwork/avif/${id}.avif`} alt={`Default sprite of ${pokemonData.name}`} style={{ width: 250 }} />
            <p>{pokemonData.types.map((types, index) => {
                return(
                    <Type key={index} type={types.type.name}>{types.type.name}</Type>
                )
            })}</p>
            </div>

            <div>
                <h3>Abilities</h3>
                <ul>
                    {
                        ability.map((element, index) => {
                            return (
                                <li key={index}>
                                    <h4>{element.name}</h4>
                                    <p>{element.effect_entries[1].language.name === "en" ? element.effect_entries[1].effect : element.effect_entries[0].effect} </p>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
            <div>
                <h3>Moves</h3>
                <ul>
                    {
                        pokemonData.moves.map(({move}, index) => {
                            return(
                                <li key={index}>{move.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>

    )
}

const Type = styled.span`
border: 1px solid #000;
border-radius: 5px;
padding: 0px 10px;
color: white;
font-family: 'Roboto Mono', monospace;
font-weight: 400;
font-size: 0.8rem;
text-transform: uppercase;
${props => props.type === "fire" && css`
background-color:#B42126;
`}
${props => props.type === "bug" && css`
background-color: #1C4B27
`}
${props => props.type === "normal" && css`
background-color: #76525C
`}
${props => props.type === "fighting" && css`
background-color: #EF613B
`}
${props => props.type === "flying" && css`
background-color: #48667E
`}
${props => props.type === "poison" && css`
background-color: #602b8d
`}
${props => props.type === "ground" && css`
background-color: #a66f2c
`}
${props => props.type === "rock" && css`
background-color: #49180a
`}
${props => props.type === "ghost" && css`
background-color: #33326c
`}
${props => props.type === "steel" && css`
background-color: #5d766e
`}
${props => props.type === "water" && css`
background-color: #1552e1
`}
${props => props.type === "grass" && css`
background-color: #157a3e
`}
${props => props.type === "electric" && css`
background-color: #E2E429
`}
${props => props.type === "psychic" && css`
background-color: #a22a6a
`}
${props => props.type === "ice" && css`
background-color: #86D1F4
`}
${props => props.type === "dragon" && css`
background-color: #438998
`}
${props => props.type === "dark" && css`
background-color: #05060A
`}
${props => props.type === "fairy" && css`
background-color: #EC1469
`}`