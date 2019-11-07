import React from 'react';
import PropTypes from 'prop-types';

import Time from './Time';
import Partida from './Partida';

export default class Contador extends React.Component {

    constructor() {
        super();
        
        this.state = {
            gols_casa: 0,
            gols_visitante: 0
        };
    }

    marcarGolCasa() {
        this.setState({
            gols_casa: this.state.gols_casa + 1
        });
    }

    marcarGolVisitante() {
        this.setState({
            gols_visitante: this.state.gols_visitante + 1
        });
    }

    render() {
        const { partida } = this.props;
        const estilo = {float: "left", "marginRight": "30px"};
        const style_card = {"width": "950px", "alignItems": "center", "margin": "10px auto", "background-color":"#C4C4C4"};

        return (
            <div className="card" style={style_card}>
                <div className="card-body">
                    <div style={estilo}>
                        <h3>Casa</h3>
                        <Time name={this.props.casa.name}
                            gols={this.state.gols_casa}
                            marcarGol={this.marcarGolCasa.bind(this)} />
                    </div>
                        
                    <div style={estilo}>
                        <Partida {...partida} />
                    </div>

                    <div style={estilo}>
                        <h3>Visitante</h3>
                        <Time name={this.props.visitante.name}
                            gols={this.state.gols_visitante}
                            marcarGol={this.marcarGolVisitante.bind(this)} />
                    </div>

                </div>
            </div>
        );
    };

}

// You can use prop-types to document the intended types of properties passed to components. 
Contador.propTypes = {
    tempo_de_jogo: PropTypes.number.isRequired
};

// You can apply defaults properties.
Contador.defaultProps = {
    tempo_de_jogo: 90
};
