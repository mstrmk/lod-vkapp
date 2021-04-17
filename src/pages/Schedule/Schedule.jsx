import Layout from "../../components/Layout/Layout";
import {Search} from "@vkontakte/vkui";
import {Icon24Filter} from "@vkontakte/icons";
import React from "react";

export default function Schedule() {
    const search = <Search
        value=""
        onChange={() => {}}
        icon={<Icon24Filter/>}
        onIconClick={() => {
        }}
    />;

    return <Layout title = "Личный кабинет" search = {search}>
        <div className={"calendar-title"}>
            <div className="calendar-title__main">20 апреля</div>
            <div className="calendar-title__sub">Сегодня</div>
        </div>
    </Layout>;
}