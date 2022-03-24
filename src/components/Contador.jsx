import React, { Component } from "react";

export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial
    }
    
    alterarNumero = (valor) => {
        this.setState({ numero: this.state.numero + valor });
    }
    
    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={() => this.alterarNumero(1)}>inc</button>
                <button onClick={() => this.alterarNumero(-1)}>dec</button>
            </div>
        );
    }
}