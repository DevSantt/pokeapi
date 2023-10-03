import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import styled from "styled-components";


// eslint-disable-next-line react/prop-types
export const AccordionComp = ({ header, body }) => {
    return (
        <Accordion>
            <AccordionItem>
                <AccordionHeader>
                    <Tittle>{header}</Tittle>
                    <AccordionBody>
                    <Description>
                        {body}
                    </Description>
                </AccordionBody>
                </AccordionHeader>
                
            </AccordionItem>
        </Accordion>
    )
}

const Tittle = styled.h3`
    background-color:  ${props => props.theme.bgCardAndInfo};
    color:   ${props => props.theme.colorCardAndInfo};
    text-align: left;
    text-transform: uppercase;
    font-size: 1.1rem;
    padding: 15px 5px;
    transition: 0.5s ease-in-out;


`

const Description = styled.div`
background-color:   ${props => props.theme.bgCardAndInfo};
color:   ${props => props.theme.colorCardAndInfo};
    max-width: 50vw;
    text-align: left;
    font-size: 1.2rem;
    padding: 10px 5px;
    transition: 0.5s ease-in-out;

    @media (max-width: 768px) {
    max-width: 80vw;
}
    
`