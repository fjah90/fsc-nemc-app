import React from 'react';
import Card from 'react-bootstrap/Card'
import FilesTable from './components/FilesTable'

export default function Home() {
    return (
        <>
            <Card className="custom-card">
                <Card.Header>React Test App</Card.Header>
                <Card.Body>
                    <FilesTable />
                </Card.Body>
            </Card>
        </>
    )
}

