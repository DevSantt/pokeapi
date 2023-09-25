import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";


export const Btn = () => {
    return(
        <Button><FontAwesomeIcon icon={faAnglesDown}/></Button>
    )
}

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
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