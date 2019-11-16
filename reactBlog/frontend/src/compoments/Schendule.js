import React from 'react';
import { Calendar } from 'antd';


export default class Schendule extends React.Component {
    render() {
        return (
            <div id="schendule" style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 10 }}>
                <Calendar fullscreen={false}/>
            </div>
        );
    }
}