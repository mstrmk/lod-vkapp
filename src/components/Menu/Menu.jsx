import './menu.css';
import {Badge, Counter, Link, Tabbar, TabbarItem} from "@vkontakte/vkui";
import {Icon28ClipOutline, Icon28MessageOutline, Icon28NewsfeedOutline} from "@vkontakte/icons";
import React from "react";

function Menu() {
    return <Tabbar>
        <TabbarItem text="Новости">
            <Icon28NewsfeedOutline />
        </TabbarItem>
        <TabbarItem indicator={<Counter size="s" mode="prominent">12</Counter>} text="Сообщения">
            <Icon28MessageOutline />
        </TabbarItem>
        <TabbarItem indicator={<Badge mode="prominent" />} text="Клипы">
            <Icon28ClipOutline />
        </TabbarItem>
    </Tabbar>
}

export default Menu;