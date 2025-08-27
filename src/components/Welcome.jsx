import Lottie from "lottie-react";
import Typography from "@mui/material/Typography";
export default function Welcome() {
    return(
        <div className="Animation_eye">
            <Lottie 
                path="/animation/Loading Lottie animation.json" 
                loop={true} 
                autoplay={true} 
            />
            <div className="container_text_eye">
                <Typography variant="h4" className="center_text">هوشکار</Typography>
                <Typography variant="h4" className="center_text">مدریت هوشمند کارها</Typography>
            </div>
            
        </div>
    )
}