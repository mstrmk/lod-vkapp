import './menu.css';
import {Tabbar, TabbarItem} from "@vkontakte/vkui";
import {Icon28NewsfeedOutline} from "@vkontakte/icons";
import React from "react";
import {useLocation, useHistory } from "react-router-dom";

const menuConfig = [
    {
        icon: <Icon28NewsfeedOutline/>,
        path: '/schedule',
        title: 'Календарь',
    },    {
        icon: <Icon28NewsfeedOutline/>,
        path: '/participants',
        title: 'Участики',
    },
    {
        icon: <Icon28NewsfeedOutline/>,
        path: '/groups',
        title: 'Профиль',
    },
];

function Menu() {
    const location = useLocation();
    const history = useHistory();
    const path = location.pathname;

    const checkSelected = (current) => {
        return path === current;
    }

    return <Tabbar>
        {menuConfig.map((item, key) => (
            <TabbarItem text={item.title} key={key} selected={checkSelected(item.path)} onClick = {() => { history.push(item.path) }}>
                {item.icon}
            </TabbarItem>
        ))}
    </Tabbar>
}

export default Menu;