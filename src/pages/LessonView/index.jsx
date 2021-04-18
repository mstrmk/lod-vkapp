import Layout from "../../components/Layout/Layout";
import {Button, Div, MiniInfoCell, Search, Spacing, Text} from "@vkontakte/vkui";
import React from "react";
import {Icon20WorkOutline, Icon28EditOutline} from '@vkontakte/icons';
import {Link} from "react-router-dom";

export default function LessonView() {
    return <Layout title="Мое расписание" titleAfter={<Icon28EditOutline fill={'#3F8AE0'}/>}>
        <Div style={{paddingTop: 0}}>
            <Div>
                <p className="text-light" style={{marginTop: '9px'}}>Информация о занятие. Информация о занятие.
                    Информация о занятие. Информация о занятие. Информация о занятие. </p>
                <Spacing size={8}/>
                <Text>Каждый понедельник 10:00 - 12:00</Text>
                <Spacing size={2}/>
                <Text className={'text-light'}>Ближайшее занятие 21 февраля</Text>
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