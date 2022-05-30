import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles } from '../../application/selectors/files';
import { pageLoaded } from '../../application/actions/ui';
import Loader from './Loader'
import { getLoading } from '../../application/selectors/ui';
import Table from 'react-bootstrap/Table'

export default function FilesTable() {
    const dispatch = useDispatch();
    const files = useSelector(getFiles);
    const loading = useSelector(getLoading);
    useEffect(() => {
        dispatch(pageLoaded);
    }, [dispatch]);
    return (
        <>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>File Name</th>
                        <th>Text</th>
                        <th>Number</th>
                        <th>Hex</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ?
                        <tr>
                            <td colSpan={4}>
                                <Loader />
                            </td>
                        </tr>
                        : (
                            files.map((item) => {
                                let fileName = item.file
                                return (
                                    item.lines.map((line, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{fileName}</td>
                                                <td>{line.text === "" ? "Data not found" : line.text}</td>
                                                <td>{line.number === 0 || line.number === "" ? "Data not found" : line.number}</td>
                                                <td>{line.hex === "" ? "Data not found" : line.hex}</td>
                                            </tr>
                                        )
                                    })
                                )
                            })
                        )}
                </tbody>
            </Table>
        </>
    )
}