import Layout from "../../components/Layout/Layout";
import {
    Avatar,
    Card,
    CardGrid, CardScroll, CellButton, ContentCard, Div, Group,
    Header, Headline, HorizontalScroll, Panel, Search,
    SimpleCell,
    Spacing, Tabs, TabsItem, View
} from "@vkontakte/vkui";
import React, {useState} from 'react';
import './participants.css';
import {Icon24Filter, Icon28AddOutline} from "@vkontakte/icons";
import {Icon28EditOutline} from '@vkontakte/icons';
import {Icon24DeleteOutlineAndroid} from '@vkontakte/icons';
import {Icon24UsersOutline} from '@vkontakte/icons';

const Participants = () => {
    let [tab, setTab] = useState('parents');

    const search = <Search
        value=""
        onChange={() => {}}
        onIconClick={() => {
        }}
    />;

    return <Layout title="Участники" search = {search}>
        <Tabs>
            <HorizontalScroll>
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
        <Spacing separator size={10}/>

        {tab === 'parents' && <Div>
            <SimpleCell expandable before={<Avatar style={{objectFit: 'cover'}}
                                                   src={'https://ichef.bbci.co.uk/news/640/cpsprodpb/16D6F/production/_117615539_gettyimages-1230688479.jpg'}/>}>Данил
                Даньшин</SimpleCell>
            <Spacing size={8}/>

            <SimpleCell expandable before={<Avatar style={{objectFit: 'cover'}}
                                                   src={'https://ichef.bbci.co.uk/news/640/cpsprodpb/16D6F/production/_117615539_gettyimages-1230688479.jpg'}/>}>Данил
                Даньшин</SimpleCell>
            <Spacing size={8}/>

            <SimpleCell expandable before={<Avatar style={{objectFit: 'cover'}}
                                                   src={'https://ichef.bbci.co.uk/news/640/cpsprodpb/16D6F/production/_117615539_gettyimages-1230688479.jpg'}/>}>Данил
                Даньшин</SimpleCell>
            <Spacing size={8}/>

            <SimpleCell expandable before={<Avatar style={{objectFit: 'cover'}}
                                                   src={'https://ichef.bbci.co.uk/news/640/cpsprodpb/16D6F/production/_117615539_gettyimages-1230688479.jpg'}/>}>Данил
                Даньшин</SimpleCell>
            <Spacing size={8}/>

            <SimpleCell expandable before={<Avatar style={{objectFit: 'cover'}}
                                                   src={'https://ichef.bbci.co.uk/news/640/cpsprodpb/16D6F/production/_117615539_gettyimages-1230688479.jpg'}/>}>Данил
                Даньшин</SimpleCell>
        </Div>}

        {tab === 'pupils' && <Div>
            <SimpleCell expandable before={<Avatar style={{objectFit: 'cover'}}
                                                   src={'https://ichef.bbci.co.uk/news/640/cpsprodpb/16D6F/production/_117615539_gettyimages-1230688479.jpg'}/>}>Данил
                Даньшин</SimpleCell>
        </Div>}

        {tab === 'groups' && <Div>
            <Card mode="outline" className={'card_group__item'}>
                <div className="card_group__item--icon">
                    <Icon24UsersOutline fill="#3F8AE0"/>
                </div>
                <div className="card_group__item--text">
                    <Headline weight="medium" style={{marginBottom: 2}}>Группа 1</Headline>
                    <div className="card_group__item--sub">12 детей</div>
                </div>
                <div className="card_group__item--actions">
                    <Icon28EditOutline fill="#3F8AE0"/>
                    <Icon24DeleteOutlineAndroid fill="#E64646"/>
                </div>
            </Card>
            <Spacing size={8}/>
            <Card mode="outline" className={'card_group__item'}>
                <div className="card_group__item--icon">
                    <Icon24UsersOutline fill="#3F8AE0"/>
                </div>
                <div className="card_group__item--text">
                    <Headline weight="medium" style={{marginBottom: 2}}>Группа 1</Headline>
                    <div className="card_group__item--sub">12 детей</div>
                </div>
                <div className="card_group__item--actions">
                    <Icon28EditOutline fill="#3F8AE0"/>
                    <Icon24DeleteOutlineAndroid fill="#E64646"/>
                </div>
            </Card>
            <Spacing size={8}/>
            <Card mode="outline" className={'card_group__item'}>
                <div className="card_group__item--icon">
                    <Icon24UsersOutline fill="#3F8AE0"/>
                </div>
                <div className="card_group__item--text">
                    <Headline weight="medium" style={{marginBottom: 2}}>Группа 1</Headline>
                    <div className="card_group__item--sub">12 детей</div>
                </div>
                <div className="card_group__item--actions">
                    <Icon28EditOutline fill="#3F8AE0"/>
                    <Icon24DeleteOutlineAndroid fill="#E64646"/>
                </div>
            </Card>
            <Spacing size={8}/>

        </Div>}
    </Layout>
}

export default Participants;