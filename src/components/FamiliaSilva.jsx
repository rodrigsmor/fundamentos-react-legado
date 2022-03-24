import React from 'react';
import Membro from './Membro';

const FamiliaSilva = (props) => {
    return (
        <div>
            <Membro nome='Rafaela ' sobrenome={props.sobrenome} />
            <Membro nome='Daniela ' sobrenome={props.sobrenome} />
            <Membro nome='Pedro ' sobrenome={props.sobrenome} />
            <Membro nome='Ana ' sobrenome={props.sobrenome} />
        </div>
    );
}

export default FamiliaSilva;