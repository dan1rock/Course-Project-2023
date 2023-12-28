import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { mockUsers } from "../../../data/mockData";

const Users = () => {
    const columns = [
        {
            field: "id",
            headerName: "ID"
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "access",
            headerName: "Access Level",
            flex: 1,
        }
        ];

    return (
        <div id="main_content">
            <div className="main-title">
                <p className="font-weight-bold">USERS</p>
            </div>
            <Box
                sx={{
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: "#fcfcfc",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: "#f8f8f8",
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: "#fcfcfc",
                    },
                    "& .MuiCheckbox-root": {
                        color: "#ffffff",
                    },
                }}>
                <DataGrid columns={columns} rows={mockUsers}/>
            </Box>
        </div>
    );
}

export default Users;