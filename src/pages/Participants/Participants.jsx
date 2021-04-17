import Layout from "../../components/Layout/Layout";
import {
    Card,
    CardGrid, CellButton, Div,
    Header, HorizontalScroll, Panel,
    SimpleCell,
    Spacing, Tabs, TabsItem, View
} from "@vkontakte/vkui";
import { useState } from 'react';
import {Icon28AddOutline} from "@vkontakte/icons";

const Participants = () => {

    let [tab, setTab] = useState('all');

    return <Layout title = "Личный кабинет">
        <Tabs>
            <HorizontalScroll>
                <TabsItem
                    onClick={() => setTab('all')}
                    selected={tab === 'all'}
                >
                    Все
                </TabsItem>
                <TabsItem
                    onClick={() => setTab('parents')}
                    selected={tab === 'parents'}
                >
                    Родители
                </TabsItem>
                <TabsItem
                    onClick={() => setTab('pupils')}
                    selected={tab === 'pupils'}
                >
                    Ученики
                </TabsItem>
                <TabsItem
                    onClick={() => setTab('groups')}
                    selected={tab === 'groups'}
                >
                    Группы
                </TabsItem>
            </HorizontalScroll>
        </Tabs>
        <Spacing separator size={16} />

        {tab === 'all' && <Div>
            <SimpleCell description="Утреннее занятие">12 февраля 10:00 - 12:00</SimpleCell>
            <SimpleCell description="Утреннее занятие">12 февраля 10:00 - 12:00</SimpleCell>
            <SimpleCell description="Утреннее занятие">12 февраля 10:00 - 12:00</SimpleCell>
        </Div>}

        {tab === 'parents' && <Div>
            <SimpleCell description="Утреннее занятие">12 февраля 10:00 - 12:00</SimpleCell>
            <SimpleCell description="Утреннее занятие">12 февраля 10:00 - 12:00</SimpleCell>
        </Div>}

        {tab === 'pupils' && <Div>
            <SimpleCell description="Утреннее занятие">12 февраля 10:00 - 12:00</SimpleCell>
        </Div>}

        {tab === 'groups' && <Div>
            <SimpleCell description="Утреннее занятие">xxx</SimpleCell>
        </Div>}
    </Layout>
}

export default Participants;