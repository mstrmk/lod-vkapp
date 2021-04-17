import Layout from "../../components/Layout/Layout";
import {
    Card,
    CardGrid, CellButton,
    Header,
    SimpleCell,
    Spacing
} from "@vkontakte/vkui";
import {Icon28AddOutline} from "@vkontakte/icons";

const Teacher = () => {
    return <Layout title = "Личный кабинет">
            <Header mode="secondary">Занятия</Header>
            <SimpleCell description="Утреннее занятие">12 февраля 10:00 - 12:00</SimpleCell>
            <SimpleCell description="Утреннее занятие">12 февраля 10:00 - 12:00</SimpleCell>
            <SimpleCell description="Утреннее занятие">12 февраля 10:00 - 12:00</SimpleCell>
            <Spacing separator size={16} />
            <CellButton before={<Icon28AddOutline />} mode = "primary">Запланировать занятие</CellButton>
    </Layout>
}

export default Teacher;