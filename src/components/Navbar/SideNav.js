import React from 'react';
import {Ul} from './styles';


const SideNav = ({ open }) => {
    return (
        <Ul open={open} className="not-title">
            <li>Inicio</li>
            <li>Projetos</li>
            <li>Sobre</li>
            <li>Contato</li>
        </Ul>
    )
}

export default SideNav