import React from "react";
import {Button, Card} from "@vkontakte/vkui";
import './course-item.css';
import {Link} from "react-router-dom";


function CourseItem({name, extra, id}) {
    return <Card mode="shadow" className={"course-item"}>
        <div className="course-item__text">
            <div className="course-item__title">
                { name }
            </div>
            <div className="course-item__sub">
                { extra }
            </div>
            <Link to={`/schedule/${id}`}>
                <Button mode="secondary">Изменить</Button>
            </Link>
        </div>
        <div className="course-item__date-time">
            <div className="course-item__date">
                по субботам
            </div>
            <div className="course-item__time">
                10:00 - 12:00
            </div>
        </div>
    </Card>;
}

export default CourseItem;