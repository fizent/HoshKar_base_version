import Lottie from "lottie-react";
export default function SettingAnimation() {
    return(
        <div className="Animation_eye">
            <Lottie 
                path="/animation/Gears.json" 
                loop={true} 
                autoplay={true} 
                style={{ width: 300, height: 300, margin: "0 auto" }}
            />            
        </div>
    )
}