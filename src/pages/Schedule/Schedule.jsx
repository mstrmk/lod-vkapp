import Layout from "../../components/Layout/Layout";
import {Div, Search, Spacing} from "@vkontakte/vkui";
import React from "react";
import CalendarItem from "../../components/CalendarItem";
import CourseItem from "../../components/CourseItem/index";
import {connect} from "react-redux";
import store from "../../store";
import {teacher as teacherActions} from "../../store/actions";

const Schedule = ({teacher}) => {
    const search = <Search
        value=""
        onChange={() => {
        }}
        onIconClick={() => {
        }}
    />;

    const classes = teacher.class;

    const groupedByDate = {};

    if (classes) {
        classes.forEach((item) => {
            let dateKey = new Date(item.dateFrom).toDateString();

            if (!groupedByDate[dateKey]) {
                groupedByDate[dateKey] = [];
            } else {
                groupedByDate[dateKey].push(item);
            }
        })
    }

    React.useEffect(() => {
        !classes && store.dispatch(teacherActions.getClass());
    }, []);

    let calendarItems = [];
    let now = new Date();

    for (let i = 0; i < 7; i++) {
        if (i > 0) {
            now.setDate(now.getDate() + 1);
        }
        let subTitle;

        if (i === 0) {
            subTitle = 'Сегодня';
        } else if (i > 0 && i < 2) {
            subTitle = 'Завтра';
        } else {
            subTitle = now.toLocaleString('ru-RU', {weekday: 'long'});
        }

        let items = groupedByDate[now.toDateString()];
        calendarItems.push(<CalendarItem title={now.getDate() + ' ' + now.toLocaleString('ru-RU', {month: 'long'})}
                                         subTitle={subTitle}>
            {items && items.map(item => {
                return <><CourseItem name={item.course.name} id = {item.id} extra={item.description}/><Spacing size={16}/> </>
            })}
        </CalendarItem>)
    }

    return <Layout title="Мое расписание" search={search}>
        <Div>
            {calendarItems}
        </Div>
    </Layout>;
}

export default connect(({teacher}) => ({
    teacher
}))(Schedule);
