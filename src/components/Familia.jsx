import React from "react";

export default props => 
    <div style={{
        marginTop: '20px',
        color: 'white',
        background: 'blue',
        borderRadius: '20px',
        padding: '20px'
    }}>
        <h1>Família</h1>
        { props.children }
    </div>