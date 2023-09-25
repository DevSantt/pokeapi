import { useEffect, useState } from "react";
import styled from "styled-components";
import '../../index.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";



import pokeApi from "../../services/api";
import { Link } from "react-router-dom";

export const Home = () => {
    const [pokemons, setPokemons] = useState({
        pokemonsList: []
    });

    useEffect(() => {
        getPokemons()

    }, [])

    const getPokemons = () => {
        pokeApi
            .get("pokemon?limit=10&offset=0")
            .then((res) => setPokemons({
                pokemonsList: [...res.data.results]
            }))
            .catch((err) => {
                console.error("something is wrong!" + err)
            })
    }


    const getMorePokemons = () => {

            pokeApi
            .get("pokemon?limit=10&offset=10")
            .then((res) => setPokemons({
                pokemonsList: [...pokemons.pokemonsList, ...res.data.results]}))
            .catch((err) => {
                console.error("something is wrong!" + err)
            })
        
    }

    


    return (
        <Section>
            <img style={{ width: 200 }} src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="Logo Pokemon" />
            <Div>
                <Ul>
                    {
                        pokemons.pokemonsList.map((pokemon, index) => {
                            return (
                                <Link to={`/profile/${pokemon.name}`} key={index}>
                                    <Li>
                                        <P>{pokemon.name}</P>
                                        <Img src={`https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`} />
                                        <Span> Click to view Pokemon Info</Span>
                                    </Li>
                                </Link>
                                
                            )
                        })
                    }
                </Ul>
            </Div>
           <Button onClick={getMorePokemons}><FontAwesomeIcon icon={faAnglesDown}/></Button>
        </Section>
    )

}



const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

const Div = styled.div`
    padding: 20px;

`

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    min-width: 800px;
    max-width: 900px;
    justify-content: center;
    @media (max-width: 732px) {
        min-width: 300px;
      }
    
`

const Li = styled.li`
    color: black;
    background: var(--white);
    font-family: 'Press Start 2P', cursive;
    font-weight: 300;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 220px;
    width: 140px;
    border: 2px solid var(--black);
    border-radius: 5px;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    &:hover{
        box-shadow: 0px -0px 20px var(--pastel-yellow-light)
      }
      &:hover Span{
        visibility: visible;
      }
      

`
const P = styled.p`
    position: absolute;
    top: 20px;
    font-size: 0.7rem;
    padding: 3px;
    border: 1px solid var(--black);
    border-radius: 5px;
    background-color: var(--pastel-yellow-light);

`

const Img = styled.img`
    max-width: 100px;
    background-color: var(--white);
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border: 1px solid var(--white);
    border-radius: 50%;
    color: var(--white);
    transition: 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 5px var(--white);
    }
  }
`

const Span = styled.span`
position: absolute;
bottom: 40px;
color: black;
visibility: hidden;
font-size: 0.5rem;
text-align: center;
background: var(--white)
line-height: 5px;
animation: floating 0.8s infinite alternate ease-in;
`


