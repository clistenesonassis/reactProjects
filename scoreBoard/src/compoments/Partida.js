import React from 'react';


export default class Partida extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-body" >
                    <h2>{this.props.stadium}</h2>
                    <div>
                        <span>{this.props.date}</span>
                        <span> - </span>
                        <span>{this.props.schedule}</span>
                    </div>
                </div>
            </div>
        );
    }

}