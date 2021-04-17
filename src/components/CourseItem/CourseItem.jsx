import React from "react";
import {Button, Card} from "@vkontakte/vkui";
import './course-item.css';


function CourseItem({title, subTitle, children}) {
    return <Card mode="shadow" className={"course-item"}>
        <div className="course-item__text">
            <div className="course-item__title">
                Название курса
            </div>
            <div className="course-item__sub">
                Дополнительная информация
            </div>
            <Button mode="secondary">Изменить</Button>
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