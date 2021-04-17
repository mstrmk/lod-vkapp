import Layout from "../../components/Layout/Layout";
import {Div, Search} from "@vkontakte/vkui";
import {Icon24Filter} from "@vkontakte/icons";
import React from "react";
import CalendarItem from "../../components/CalendarItem";
import CourseItem from "../../components/CourseItem/index";

export default function Schedule() {
    const search = <Search
        value=""
        onChange={() => {}}

        onIconClick={() => {
        }}
    />;

    return <Layout title = "Мое расписание" search = {search}>
        <Div>
            <CalendarItem title="20 Апреля" subTitle="Сегодня">
                <CourseItem />
            </CalendarItem>
            <CalendarItem title="21 Апреля" subTitle="Завтра">
            </CalendarItem>
            <CalendarItem title="22 Апреля" subTitle="Понедельник">
                <CourseItem />

            </CalendarItem>
        </Div>
    </Layout>;
}