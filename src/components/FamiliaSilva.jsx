import React from 'react';
import Membro from './Membro';

const FamiliaSilva = (props) => {
    return (
        <div>
            <Membro nome='Rafaela ' sobrenome='Silva' />
            <Membro nome='Daniela ' sobrenome='Silva' />
            <Membro nome='Pedro ' sobrenome='Silva' />
            <Membro nome='Ana ' sobrenome='Silva' />
        </div>
    );
}

export default FamiliaSilva;