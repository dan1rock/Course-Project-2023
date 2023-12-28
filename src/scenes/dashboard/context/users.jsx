import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
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
            renderCell: ({row: {access}}) => {
                let icon;
                if (access === "admin") {
                    icon = "shield";
                } else if (access === "manager") {
                    icon = "manage_accounts";
                } else {
                    icon = "person";
                }
                return (
                    <Box
                        width="150px"
                        height="30px"
                        m="0 auto"
                        p="5 px"
                        display="flex"
                        justifyContent="center"
                        color="#ffffff"
                        backgroundColor={
                            () => {
                                if (access === "admin") return "#21232d"
                                if (access === "manager") return "#4a4e64"
                                return "#6a708f"
                            }
                        }
                        borderRadius="4px"
                    >
                        <Box marginY="auto" ml="15px">
                            <span className="material-icons-outlined">{icon}</span>
                        </Box>
                        <Typography  m="auto" ml="5px">
                            {access}
                        </Typography>
                    </Box>
                );
            }
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