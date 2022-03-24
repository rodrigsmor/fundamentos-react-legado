import React from 'react';
import ReactDOM from 'react-dom';
import MultiElementos from './components/MultiElementos';
import { CompA, CompB } from './components/DoisComponentes';
import PrimeiroComponente from './components/PrimeiroComponente';

ReactDOM.render(
    <div>
        <MultiElementos />
        <CompA valor={'Olá, eu sou A!'} />
        <CompB valor={'B NA ÁREA!'} />
        <PrimeiroComponente valor={'Bom dia!'} />
    </div>,
    document.getElementById('root')
);