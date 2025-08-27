import Lottie from "lottie-react";
import Typography from "@mui/material/Typography";
export default function Eye() {
    return(
        <div className="Animation_eye">
            <Lottie 
                path="/animation/Green-eye.json" 
                loop={true} 
                autoplay={true} 
                style={{ width: 300, height: 300, margin: "0 auto" }}
            />
            <div className="container_text_eye">
                <Typography variant="h4" className="center_text">حواسم بهت هست!</Typography>
            </div>
            
        </div>
    )
}