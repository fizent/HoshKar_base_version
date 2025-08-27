import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyDo from './MyDo';
export default function Footer() {
    const [value, setValue] = useState(0)
    const navigate  = useNavigate()
    function NewValue(event, valueNew) {
        setValue(valueNew)
        if (valueNew === 0) navigate("/");
        if (valueNew === 1) navigate("/TimerFocuse");
        if (valueNew === 2) navigate("/History");
        if (valueNew === 3) navigate("/MyDo")
        if (valueNew === 4) navigate("/Chat")

    }
    return(
        <div className='container_footer'>
            <BottomNavigation showLabels value={value} onChange={NewValue}>
                <BottomNavigationAction label="خانه" icon={<HomeIcon/>} />
                <BottomNavigationAction label="تمرکز" icon={<AvTimerIcon/>} />
                <BottomNavigationAction label="خاطره" icon={<HistoryEduIcon/>} />
                <BottomNavigationAction label="کار من" icon={<PendingActionsIcon/>} />
                <BottomNavigationAction label="چت" icon={<SmartToyIcon/>} />

            </BottomNavigation>
        </div>
    )
}