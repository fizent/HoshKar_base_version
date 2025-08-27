import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import BoxAdd from "./Box_add_page";
import { Inform } from "./Store/Store";

export default function BoxOpen({title, desc1, onSelect}) {
    const textValue = Inform((state)=> state.textValue)
    const setTextValue = Inform((state)=> state.setTextValue)
    const ColorInput = Inform((state)=> state.ColorInput)
    const setColorInput = Inform((state)=> state.setColorInput)

    return(
    <div className="container_box_open">
        <Typography variant="h3" className="Title_BoxOpen">{title}</Typography>
        <div>
            <div className="container_field">
                <TextField
                    fullWidth
                    className="native-textfield"
                    value={textValue}
                    placeholder={desc1.trim() === "" ? "برم کلاس" : ""}
                    rows={4}
                    margin="normal"
                    onChange={(e)=> setTextValue(e.target.value)}
                ></TextField>
                <div className="field_color">
                    <input
                        id="width_color"
                        className="native-colorpicker"
                        type="color"
                        value={ColorInput || "#47008a"}
                        onChange={(e)=> setColorInput(e.target.value)}
                    ></input>
                </div>
            </div>
            <div className="container_Btn_BoxOpen">
                <Button variant="contained" onClick={()=> onSelect("calendar")}>تاریخ</Button>
                <Button variant="contained" onClick={()=> onSelect("hour")}>ساعت</Button>
            </div>
        </div>
    </div>
    )
}