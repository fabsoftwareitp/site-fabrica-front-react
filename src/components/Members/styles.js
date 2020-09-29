import styled, { css } from 'styled-components';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';


import ReactCardFlip from 'react-card-flip';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
    margin: 30px auto;
    justify-content: center;
    align-items: center;
    grid-gap: 30px 40px;
    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 700px) {
        width: 100%;
        grid-template-columns: repeat(1, 1fr);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-self: center;    
        grid-row-gap: 40px;
    }
`;

export const Card = styled(ReactCardFlip)`
    display: grid;
    width: 100%;
    margin: 0 10px;
    height: 325px;
`;

const CardStyles = css`
    transition: box-shadow .2s ease;
    &:hover {
        box-shadow: 2px 2px 4px #000;
        cursor: pointer;
    }
`;

export const Front = styled.div`
height: 300px;
    width: 300px;
    max-width: 100%;
    ${CardStyles};
    @media screen and (max-width: 675px) {
        margin-top: 20px;
    }

`;

export const Back = styled.div`
    height: 300px;
    width: 300px;
    max-width: 100%;
    ${CardStyles};
    @media screen and (max-width: 675px) {
        margin-top: 20px;
    }
`;

export const CardHeader = styled.div`
    height: 80px;
    background: var(--bg-project);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CardBody = styled.div`
    position: relative;
    height: 74%;
    background: var(--circle-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover {
        .swap {
            transform: rotate(180deg);
            transition: transform 0.2s ease;
        }
    }
`;


export const Radius = styled.div`
    height: 90px;
    width: 90px;
    border-radius: 45px;
    background-color: gray;
    border: 2px solid var(--bg-welcome);
    display: flex;
    align-self: center;
    position: relative;
    bottom: 30px;
`;

export const Photo = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 100%;
`;

export const Title = styled.h1`
    font-size: ${props => props.FontSize+'px'};
    color: #fff;
`;

export const Graduate = styled.p`
    color: rgba(0,0,0,0.8);
    font-size: 14px;    
`;

export const Swap = styled(SwapHorizIcon)`
    margin: 20px auto 10px auto;
    font-size: 2rem !important;

`;

export const Description = styled.p`
    font-size: 1.4rem;
    padding: 15px 10px 0 10px;
    text-align: justify;
    height: 130px;
    overflow-y: auto;
    color: #fff;

    @media (max-width: 320px) {
        padding: 10px 20px 0 20px;
    }
`;

export const Contact = styled.div`
    display: flex;
    width: 30%;
    margin-top: 20px;
    justify-content: space-between;
`;

const iconCSS = css`
    font-size: 2.2rem !important;
    path {
        fill: #000;
    }
`;

export const Linkedin = styled(LinkedInIcon)`
    ${iconCSS};
    &:hover {
        path {
            fill:#2867B2;
        }
        box-shadow: 0 0 15px #2867B2;
        transition: all 0.5s ease;
        background: transparent;
    }
`;

export const Github = styled(GitHubIcon)`
    ${iconCSS};
    &:hover {
        box-shadow: 0 0 15px #001;
        transition: all 0.5s ease;
    }
`;



export const Instagram = styled(InstagramIcon)`
    ${iconCSS};
    &:hover {
        path {
            fill:#bc2a8d;
        }
        box-shadow: 0 0 15px #bc2a8d;
        transition: all 0.5s ease;
    }
`; 

