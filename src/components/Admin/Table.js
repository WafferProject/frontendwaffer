import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

import "./Table.css"

const Table = ({ columns, rows, handleDelete, isBusiness}) => {
    const navigate = useNavigate();
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 260,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <div className="viewButton" onClick={() => {
                            const path = isBusiness ? `/BusinessList/${params.row.id}` : `/ConsumerList/${params.row.id}`;
                            navigate(path);
                        }}>View</div>
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="userTable">
            <DataGrid
                rows={rows}
                columns={columns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 9 },
                    },
                }}
                pageSizeOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default Table