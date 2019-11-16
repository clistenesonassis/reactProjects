import React from 'react';
import { Icon } from 'antd';

export default class ActionsButton extends React.Component {
    render() {
        return (
            <div className="ActionsButton">
                <div className="ActionsButton">
                    <a><Icon type="download" /></a>
                </div>
                <div className="ActionsButton">
                    <a><Icon type="play-circle" /></a>
                </div>
            </div>
        );
    }    
}