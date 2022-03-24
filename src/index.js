import React from 'react';
import ReactDOM from 'react-dom';
import MultiElementos from './components/MultiElementos';
import { CompA, CompB } from './components/DoisComponentes';
import PrimeiroComponente from './components/PrimeiroComponente';
import FamiliaSilva from './components/FamiliaSilva';
import Familia from './components/Familia';
import Membro from './components/Membro'
import ComponenteComFuncao from './components/ComponenteComFuncao';
import Pai from './components/Pai'
import ComponenteClasse from './components/ComponenteClasse';
import Contador from './components/Contador'

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
        <Pai />
        <ComponenteClasse valor={'Sou um componente de classe!'} />
        <Contador numeroInicial={10}/>
    </div>,
    document.getElementById('root')
);