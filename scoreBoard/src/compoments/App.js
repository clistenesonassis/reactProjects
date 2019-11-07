import React from 'react';
import PlacarContainer from './PlacarContainer';

//Dados da partida.

const dados = {
    partida: {
        stadium: "Maracanâ/RJ",
        date: "01/06/2019",
        schedule: "19:00hrs"
    },
    casa: {
        name: "Fluminense"
    },
    visitante: {
        name: "Flamengo"
    }

};


export default class App extends React.Component {
    render() {
        return <PlacarContainer {...dados} />;
    }
}