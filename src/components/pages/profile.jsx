import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PokemonsInfo } from "../../services/api";
import axios from "axios";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved, faFireFlameSimple, faHouse, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { AccordionComp } from "../accordion/accordion";
import { useThemeContext } from "../../contexts/theme";
import { ThemeSwitcher } from "../themeSwitcher";


export const Profile = () => {


    const [pokemonData, setPokemonData] = useState({
        name: [],
        types: [],
        abilities: [],
        moves: [],
        id: [],
        weight: []

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
                id: res.data.id,
                weight: res.data.weight
            });

            setAbility(pokemonAbilitiesDescriptions);
        } catch (error) {
            console.error("Something is wrong!", error);
        }
    };

    useEffect(() => {
        getPokemonData();
    }, [id]);


    return (
        <Main>
            <Header>
                <HomeIcon>
                    <Link to={'/'}>
                        <FontAwesomeIcon icon={faHouse} />
                    </Link>
                </HomeIcon>
                <HeaderTittle>Pokemon Info</HeaderTittle>
                <ThemeSwitcher />


            </Header>
            <Container>
                <PokeInfo >
                    <PokeName>{pokemonData.name}</PokeName>

                    <PokeBaseInfo>
                        <Info>Type: {pokemonData.types.map((types, index) => {
                            return (
                                <Type key={index} type={types.type.name}>{types.type.name}</Type>
                            )
                        })}
                        </Info>
                        <Info>Number: #0{pokemonData.id}</Info>
                        <Info>Weight: {pokemonData.weight}</Info>
                    </PokeBaseInfo>

                </PokeInfo>


            </Container>
            <ImgContainer >
                <Img src={`https://img.pokemondb.net/artwork/avif/${id}.avif`} alt={`Default sprite of ${pokemonData.name}`} />
            </ImgContainer>

            <PokePrincipalInfo>
                <InfoTitle> <FontAwesomeIcon icon={faFireFlameCurved} style={{ marginRight: '15px' }} />Abilities</InfoTitle>

                <AbilityContainer>
                    {
                        ability.map((element, index) => {
                            return (

                                <AccordionComp key={index} header={`${element.name} `} body={element.effect_entries[1].language.name === "en" ? element.effect_entries[1].effect : element.effect_entries[0].effect} />

                            )
                        })
                    }
                </AbilityContainer>

            </PokePrincipalInfo>


            <PokePrincipalInfo>
                <InfoTitle> <FontAwesomeIcon icon={faFireFlameSimple} /> Moves</InfoTitle>
                <MoveList>
                    {
                        pokemonData.moves.map(({ move }, index) => {
                            return (
                                <Move key={index}>{move.name}</Move>
                            )
                        })
                    }
                </MoveList>
            </PokePrincipalInfo>

            
        </Main>

    )
}

const Main = styled.main`
    background-color: ${props => props.theme.bgCardAndInfo};
    font-family: 'Roboto', sans-seriff;
    transition: 0.5s ease-in-out;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }


`

const Header = styled.header`
    display: flex;
    color: white;
    background-color: ${props => props.theme.background};
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    position: relative;
    transition: 0.5s ease-in-out;
    @media (max-width: 768px) {
    justify-content: flex-start;
}
    
`

const HeaderTittle = styled.h1`
    position: absolute;
    left: 80px;
    text-transform: uppercase;
    font-size: 1.8rem;
    
    @media (max-width: 768px) {
        left: 50px;
        font-size: 1.4rem;
}

`

const HomeIcon = styled.div`
    border-right: 1px solid rgba(128, 128, 128, 0.3);
    margin-left: 20px; 
    padding-right: 20px;
    display: flex;
    align-items: center;
    height: 30px;
    @media (max-width: 768px) {
        margin-left: 0px;
        border: none;
}

   
    `




const Container = styled.div`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    
    
`

const PokeInfo = styled.div`
background-color:  ${props => props.theme.background};
height: fit-content;
width: 100vw;
position: relative;
transition: 0.5s ease-in-out;

@media (max-width: 768px) {
display: flex;
justify-content: center;}

`

const PokeName = styled.h1`
    font-size: 3.6rem;
    letter-spacing: 15px;
    color: white;
    margin-left: 25px;
    @media (max-width: 768px) {
    font-size: 3.0rem;
}
`

const PokeBaseInfo = styled.div`
    display: flex;
    color: ${props => props.theme.colorCardAndInfo};
    background-color: ${props => props.theme.color};
    transition: 0.5s ease-in-out;

    width: fit-content;
    position: absolute;
    bottom: -18px;
    padding: 5px 0px;
    padding-right: 40px;
    border-radius: 0px 0px 200px 0px;
-webkit-border-radius: 0px 0px 200px 0px;
-moz-border-radius: 0px 0px 200px 0px;
@media (max-width: 768px) {
    display: flex;
    padding-right: 0px;
    justify-content: space-around;
    width: 100%;
    border-radius: 0;
}
`

const Info = styled.p`
    margin-left: 40px;
    font-size: 0.8rem;
    font-weight: 700;
    @media (max-width: 768px) {
        margin-left: 0;
}
`

const ImgContainer = styled.div`
background-color: ${props => props.theme.background};
transition: 0.5s ease-in-out;

padding: 15px;
width: fit-content;
position: absolute;
right: 0px;
top: 40px;
@media (max-width: 768px) {
    position: inherit;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    width: 100%;
}

`

const Img = styled.img`
    width: 200px;
    border: 5px double #c2c2c2;
`

const PokePrincipalInfo = styled.div`
    margin-top: 40px;

    @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`

const InfoTitle = styled.h3`
    background-color: ${props => props.theme.background};
    width: fit-content;
    transition: 0.5s ease-in-out;
    padding: 2px 30px 0px 10px;
    text-transform: uppercase;
    color: white;
    border-radius: 0px 0px 14px 0px;
-webkit-border-radius: 0px 0px 14px 0px;
-moz-border-radius: 0px 0px 14px 0px;
@media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
}

`

const AbilityContainer = styled.div`
    margin-top: 20px;
`

const MoveList = styled.ul`
text-transform: uppercase;
display: flex;
justify-content: center;
flex-wrap: wrap;
margin-top: 20px;
padding: 10px;
border: 2px solid black;
background-color: ${props => props.theme.bgCardAndInfo};
max-width: 100vw;
transition: 0.5s ease-in-out;

`

const Move = styled.li`
border: 1px solid black;
color: ${props => props.theme.colorCardAndInfo};
background-color: ${props => props.theme.bgCardAndInfo};
padding: 5px;
border-radius: 5px;
max-width: 150px;
margin: 5px 5px 8px 5px;
cursor: default;
transition: 0.5s ease-in-out;

&:hover{
    background-color: ${props => props.theme.color}
}

`


const Type = styled.span`
border: 1px solid #000;
border-radius: 5px;
margin-left: 5px;
padding: 0px 10px;
font-family: 'Roboto Mono', monospace;
font-weight: 700;
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
