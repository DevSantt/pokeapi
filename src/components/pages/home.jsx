import { useEffect, useState } from "react";
import styled from "styled-components";
import '../../index.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "../../contexts/theme";


import pokeApi from "../../services/api";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "../themeSwitcher";

export const Home = () => {

    const { changeTheme } = useThemeContext();
    
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
            .get(`pokemon?limit=10&offset=${pokemons.pokemonsList.length}`)
            .then((res) => setPokemons({
                pokemonsList: [...pokemons.pokemonsList, ...res.data.results]}))
            .catch((err) => {
                console.error("something is wrong!" + err)
            })

        
    }

    


    return (
        <Main>
            <Section>
                <img style={{ width: 200 }} src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="Logo Pokemon" />
                <ThemeSwitcher/>
                <Div>
                    <Ul>
                        {
                            pokemons.pokemonsList.map((pokemon, index) => {
                                return (
                                    <Link to={`/profile/${pokemon.name}`} key={index}>
                                        <Li>
                                            <P>{pokemon.name}</P>
                                            <Img src={`https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`} alt='Pokemon image'/>
                                            <Span> Click to view Pokemon Info</Span>
                                        </Li>
                                    </Link>
            
                                )
                            })
                        }
                    </Ul>
                </Div>
               <Button onClick={getMorePokemons}>Load More</Button>
            </Section>
        </Main>
    )

}




const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.background};
transition: 0.5s ease-in-out;
height: 100vh;

    `


const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.background};
    transition: 0.5s ease-in-out;

    


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
    color: ${props => props.theme.colorCardAndInfo};
    background: ${props => props.theme.bgCardAndInfo};
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
    border: 2px solid black;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    &:hover{
        box-shadow: 0px -0px 20px ${props => props.theme.color};
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
    border: 1px solid black;
    border-radius: 5px;
    background-color: ${props => props.theme.color};
    transition: 0.5s ease-in-out;


`

const Img = styled.img`
    max-width: 100px;
    background-color: ${props => props.theme.bgCardAndInfo};
    transition: 0.5s ease-in-out;

`

const Button = styled.button`
    font-family: 'Press Start 2P', cursive;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    background-color: ${props => props.theme.bgCardAndInfo};
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: 5px;
    color: ${props => props.theme.colorCardAndInfo};
    transition: 0.3s ease-in-out;
    &:hover{
        background-color: ${props => props.theme.bgCardAndInfo};
    }

`

const Span = styled.span`
position: absolute;
bottom: 40px;
color: ${props => props.theme.colorCardAndInfo};
visibility: hidden;
font-size: 0.5rem;
text-align: center;
background: ${props => props.theme.bgCardAndInfo};
line-height: 10px;
animation: floating 0.8s infinite alternate ease-in;
`


