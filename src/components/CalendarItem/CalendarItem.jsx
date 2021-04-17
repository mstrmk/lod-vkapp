import './menu.css';
import React from "react";


function CalendarItem({title, subTitle}) {
    return <div className={'calendar-item'}>
        <div className="calendar-title">
            <div className="calender-title__main">{title}</div>
            <div className="calender-title__sub">{subTitle}</div>
        </div>

    </div>;
}

export default CalendarItem;