import { Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// دکمه حذف سفارشی با تم MUI
const ButtonErr = styled(Button)(({ theme }) => ({
  backgroundColor: "red",
  color: theme.palette.common.white,
  fontWeight: "bold",
  borderRadius: theme.shape.borderRadius,
  textTransform: "none",
  boxShadow: theme.shadows[3],
  "&:hover": {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
  },
  "&:active": {
    transform: "scale(0.98)",
  },
}));

export default function BoxAddHistory({ moment, onDelete }) {
  return (
    <div
      className="memory-card"
      style={{ backgroundColor: moment.color || "#eee" }}
    >
      <div id="tag_img">
        {moment.image && (
          <img
            src={moment.image}
            alt="خاطره"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        )}
      </div>

      <div>
        <Typography
          variant="h6"
          className="todo-card text_align_center"
        >
          {moment.title}
        </Typography>
        <Typography className="todo-card">{moment.text}</Typography>
      </div>

      <div className="container_clan_hour_history">
        <Typography className="todo-date">
          {" "}
          {moment.date
            ? new Date(moment.date).toLocaleDateString("fa-IR")
            : "بدون تاریخ"}
        </Typography>
        <Typography className="todo-date"> {moment.hour || "بدون ساعت"}</Typography>
      </div>

      <ButtonErr
        className="remove_btn"
        variant="outlined"
        onClick={onDelete}
      >
        حذف
      </ButtonErr>
    </div>
  );
}
