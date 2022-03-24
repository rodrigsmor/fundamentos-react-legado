import React, { useState, useEffect } from "react";

export default props => {
    const [ contador, setContador ] = useState(100);
    const [ status, setStatus ] = useState('Par');

    useEffect(() => {
        contador % 2 === 0 
            ? setStatus('Impar')
            : setStatus('Par')
    }, [ contador ])

    return (
        <div style={{
            color: 'darkblue',
            padding: '20px',
            marginTop: '20px',
            background: 'green'
        }}>
            <h1>{contador}</h1>
            <h2>{status}</h2>
            <button onClick={() => setContador(contador + 1)}>
                Inc
            </button>

            <button onClick={() => setContador(contador - 1)}>
                Dec
            </button>
        </div>
    );
}