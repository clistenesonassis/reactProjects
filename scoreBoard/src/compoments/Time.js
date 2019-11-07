import React from 'react';

import BotaoGol from './BotaoGol';

export default class Time extends React.Component {
    
    render(){
        return (
            <div className="card">
                <div className="card-body"> 
                    <h1>{this.props.name}</h1> 
                    <h2>{this.props.gols}</h2> 
                    <BotaoGol marcarGol={this.props.marcarGol} /> 
                </div> 
            </div>
        );
    };

}