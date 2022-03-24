import React, { Component } from "react";

class ComponenteClasse extends Component {
    render() {
        return (
            <div>
                <h1>Olá, classe!</h1>
                <li>{ this.props.valor || 'Padrão' }</li>
            </div>
        );
    }
}

export default ComponenteClasse;