import Layout from "../../components/Layout/Layout";
import {Button, Div, MiniInfoCell, Search, Spacing, Text} from "@vkontakte/vkui";
import React  from "react";
import { useParams } from 'react-router-dom';
import {Icon20WorkOutline, Icon28EditOutline} from '@vkontakte/icons';
import {Link} from "react-router-dom";
import store from "../../store";
import {teacher as teacherActions} from "../../store/actions";
import {connect} from "react-redux";

function LessonView({ teacher }) {
    let { id } = useParams();
    const classItem = teacher.classItem;

    React.useEffect(() => {
        !classItem && store.dispatch(teacherActions.getClassItem(id));
    }, [id]);

    if (!classItem) {
        return <></>;
    }
    const nextDate = new Date(classItem.dateFrom);
    const nextDateString = nextDate.getDate() + ' ' + nextDate.toLocaleString('ru-RU', {month: 'long'});

    return <Layout title="Мое расписание" titleAfter={<Icon28EditOutline fill={'#3F8AE0'}/>}>
        <Div style={{paddingTop: 0}}>
            <Div>
                <p className="text-light" style={{marginTop: '9px'}}>{ classItem.description }</p>
                <Spacing size={8}/>
                <Text>Каждый понедельник 10:00 - 12:00</Text>
                <Spacing size={2}/>
                <Text className={'text-light'}>Ближайшее занятие { nextDateString }</Text>
                <Spacing size={16}/>
            </Div>
            <MiniInfoCell
                before={<Icon20WorkOutline/>}
            >
                Место работы: Команда ВКонтакте
            </MiniInfoCell>
            <Spacing size={106}/>
            <div className="text-center">
                <Link to="/begin-lesson">
                    <Button size="l">Начать занятие</Button>
                </Link>
                <Spacing size={32}/>
                <Link to="/schedule" style={{color: '#E64646'}}>Отменить занятие</Link>
            </div>
        </Div>
    </Layout>;
}

export default connect(({ teacher }) => ({
    teacher
}))(LessonView);