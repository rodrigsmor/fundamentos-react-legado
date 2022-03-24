import React from 'react';
import ReactDOM from 'react-dom';
import MultiElementos from './components/MultiElementos';
import { CompA, CompB } from './components/DoisComponentes';
import PrimeiroComponente from './components/PrimeiroComponente';
import FamiliaSilva from './components/FamiliaSilva';
import Familia from './components/Familia';
import Membro from './components/Membro'
import ComponenteComFuncao from './components/ComponenteComFuncao';

ReactDOM.render(
    <div>
        <MultiElementos />
        <CompA valor={'Olá, eu sou A!'} />
        <CompB valor={'B NA ÁREA!'} />
        <PrimeiroComponente valor={'Bom dia!'} />
        <FamiliaSilva sobrenome='Silva'/>
        <Familia sobrenome='Pereira'>
            <Membro nome='Rodrigo ' />
            <Membro nome='Mariana ' />
            <Membro nome='Carlos ' />
        </Familia>
        <ComponenteComFuncao />
    </div>,
    document.getElementById('root')
);