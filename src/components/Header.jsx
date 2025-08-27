import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { act, useState } from "react";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import RefreshIcon from "@mui/icons-material/Refresh";
import ShareIcon from "@mui/icons-material/Share";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((p) => !p);
  const navigation = useNavigate()

  function Reload() {
    window.location.reload()
  }

  function ShareContect() {
    if(navigator.share) {
      navigator.share({
        title: "هوشکار",
        text: "مدریت کار هوشمند برای افراد برنامه ریز",
      })
    }else {
      console.log("مشکل");
      
    }
  }
  const menuItems = [
    { icon: <RefreshIcon />, text: "تازه سازی", action: Reload},
    { icon: <ShareIcon />, text: "اشتراک گذاری", action: ShareContect},
    { icon: <PersonIcon />, text: "سازنده", action: ()=> window.open("https://fazelzare.liara.run/")},
    { icon: <SettingsIcon />, text: "تنظیمات", action: () => navigation("/Setting")},

  ];
  return (
    <AppBar>
      <Toolbar className="header_tool">
        <IconButton edge="end" onClick={toggleMenu}>
          <MenuIcon className="color_button" />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleMenu}
        classes={{ paper: "drawer_paper" }}
      >
        <div className="drawer_header">
          <div>
            <Typography variant="h4" className="drawer_title">
              هوشکار
            </Typography>
            <Typography variant="subtitle">
              مدریت هوشمند کارها
            </Typography>
          </div>
          <IconButton onClick={toggleMenu} className="drawer_close_btn">
            <img
              src="/HoshKar.png"
              alt="back"
              className="drawer_close_icon"
            />
          </IconButton>
        </div>
        <Divider />
        <List className="drawer_list">
          {menuItems.map((item, index) => (
            <ListItem button key={index} className="drawer_list_item" onClick={()=> {
              item.action && item.action()
              toggleMenu()
            }}>
              <ListItemIcon className="drawer_list_icon">{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} className="drawer_list_text" />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
