import React from 'react';
import { Table } from 'antd';
import ActionsButton from './ActionsButton';

// BD
const data = [
    {
    key: '1',
    Id: 'sdf1dd242wcruirfas',
    Data: '20-abr-19',
    Hora: '17:53:27',
    Duração: '19:26',
    Anfitrião: 'Carlos Neves Gomes Filho',
    Status: 'Andamento',
    Ações: <ActionsButton />,
    },
    {
    key: '2',
    Id: 'sdf1dd2rurfas',
    Data: '20-abr-19',
    Hora: '17:53:27',
    Duração: '19:26',
    Anfitrião: 'Matheus Perreira Filho',
    Status: 'Andamento',
    Ações: <ActionsButton />,
    },
    {
    key: '3',
    Id: 'd242wcruirfas',
    Data: '20-abr-19',
    Hora: '17:53:27',
    Duração: '19:26',
    Anfitrião: 'João Pedro Gomes Filho',
    Status: 'Finalizado',
    Ações: <ActionsButton />,
    },
    {
    key: '4',
    Id: 's0000f1dd242wcr',
    Data: '20-abr-19',
    Hora: '09:23:57',
    Duração: '09:54',
    Anfitrião: 'Paulo Junior Neves Filho',
    Status: 'Andamento',
    Ações: <ActionsButton />,
    },
];

export default class RecordedSessions extends React.Component {

    render() {
        const columns = [
            {
            title: 'Id',
            dataIndex: 'Id',
            key: 'Id',
            },
            {
            title: 'Data',
            dataIndex: 'Data',
            key: 'Data',
            },
            {
            title: 'Hora',
            dataIndex: 'Hora',
            key: 'Hora',
            },
            {
            title: 'Duração',
            dataIndex: 'Duração',
            key: 'Duração',
            },
            {
            title: 'Anfitrião',
            dataIndex: 'Anfitrião',
            key: 'Anfitrião',
            },
            {
            title: 'Status',
            dataIndex: 'Status',
            key: 'Status',
            },
            {
            title: 'Ações',
            dataIndex: 'Ações',
            key: 'Ações',
            },
        ];
        return (
            <div id="RecordedSessionsContainer">
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}

