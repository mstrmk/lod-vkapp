import './calendarItem.css';
import React from "react";
import {Div} from "@vkontakte/vkui";


function CalendarItem({title, subTitle, children}) {
    return <div className={'calendar-item'}>
        <div className="calendar-title">
            <div className="calendar-title__main">{title}</div>
            <div className="calendar-title__sub">{subTitle}</div>
        </div>
        { (!children || children.length === 0) && <Div style={{fontSize: '20px', fontWeight: 300, paddingTop: 0}}>Нет занятий</Div> }
        {
            children
        }
    </div>;
}

export default CalendarItem;