import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

const TableUserData = ({data}) => {

    const cellStyles = {color: '', textAlign: 'center'};

    return (
        <div className="table">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={cellStyles}>
                                WPM
                            </TableCell>
                            <TableCell style={cellStyles}>
                                Accuracy
                            </TableCell>
                            <TableCell style={cellStyles}>
                                Characters
                            </TableCell>
                            <TableCell style={cellStyles}>
                                Date
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((i) => ( 
                                <TableRow>
                                    <TableCell style={cellStyles}>
                                        {i.wpm}
                                    </TableCell>
                                    <TableCell style={cellStyles}>
                                        {i.accuracy}
                                    </TableCell>
                                    <TableCell style={cellStyles}>
                                        {i.characters}
                                    </TableCell>
                                    <TableCell style={cellStyles}>
                                        {i.timeStamp.toDate().toLocaleString()}
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TableUserData;