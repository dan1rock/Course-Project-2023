import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { mockUsers } from "../../../data/mockData";
import {useContext} from "react";
import {ColorModeContext, palette} from "../../../theme";

const Users = () => {
    const colorMode = useContext(ColorModeContext);
    const colors = palette(colorMode.getMode());

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
                        <Box marginY="auto" marginLeft="5px" alignSelf="left">
                            <span className="material-icons-outlined">{icon}</span>
                        </Box>
                        <Typography  m="auto">
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
                        backgroundColor: colors.itemContainerLighter,
                        color: colors.default,
                        borderColor: colors.borderColor,
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.itemContainer,
                        color: colors.default,
                        borderColor: colors.borderColor,
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: colors.itemContainerLighter,
                        color: colors.default,
                        borderColor: colors.borderColor,
                    },
                    "& .MuiCheckbox-root": {
                        color: "#ffffff",
                    },
                    "& .MuiToolbar-root": {
                        color: colors.default,
                    },
                }}>
                <DataGrid
                    columns={columns}
                    rows={mockUsers}
                    sx={{
                        borderColor: colors.borderColor,
                        color: colors.default,
                    }}
                />
            </Box>
        </div>
    );
}

export default Users;