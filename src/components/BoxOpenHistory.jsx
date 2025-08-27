import { TextField, Button, Typography, Paper } from "@mui/material";
import { Fragment } from "react";
import { Inform } from "./Store/Store";

export default function BoxHistoryOpen({ onSelect, setTitle, titleValue, handleImageChange, image }) {
  const textValue = Inform((state) => state.textValue);
  const setTextValue = Inform((state) => state.setTextValue);

  return (
    <Fragment>
      <Paper elevation={4} className="pos_paper container_box_open" style={{backgroundImage:image ? `url(${image})`: "none", backgroundPosition:"center", backgroundSize: "cover"}}>
        <TextField
          fullWidth
          label="عنوان"
          variant="outlined"
          className="native-textfield"
          value={titleValue}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="input_field">
          <TextField
            fullWidth
            multiline
            rows={4}
            label="متن خاطره"
            variant="outlined"
            className="native-textfield"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
        </div>
        <div className="diary-image-upload">
          <label htmlFor="image-upload">
            <Button
              className="image-label"
              variant="outlined"
              component="span"
              style={{
                color: image ? "white" : "#1976d2",
                border: image ? "1px solid green" : "1px solid #1976d2",
                backgroundColor: image ? "green" : "none",              }}
            >
              انتخاب عکس
            </Button>
          </label>
          <input
            id="image-upload"
            style={{ display: "none" }}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className="container_Btn_BoxOpen">
          <Button variant="contained" onClick={() => onSelect("calendar")}>تاریخ</Button>
          <Typography variant="subtitle" id="text_lign_center">لحظه تو بنویس</Typography>
        </div>
      </Paper>
    </Fragment>
  );
}