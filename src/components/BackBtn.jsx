import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
export default function BackBtn() {
    const navigate = useNavigate()
    return (
        <AppBar>
            <Toolbar className="header_tool">
                <IconButton onClick={()=> navigate("/")}>
                    <ArrowCircleRightIcon 
                        sx={{ fontSize: 30, color: "#1976d2" }} 
                    />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
