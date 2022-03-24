import React from 'react';
import ReactDOM from 'react-dom';
import PrimeiroComponente from './components/PrimeiroComponente';

ReactDOM.render(
    <div>
        <PrimeiroComponente valor={'Bom dia!'} />
    </div>,
    document.getElementById('root')
);