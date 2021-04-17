import {CellButton, Header, SimpleCell, Spacing} from "@vkontakte/vkui";
import {Icon28AddOutline} from "@vkontakte/icons";
import Layout from "../../components/Layout/Layout";
import { Icon20MessageOutline } from '@vkontakte/icons';
export default function Pupils() {
    return <Layout title = "Личный кабинет">
        <Header mode="secondary">Ученики</Header>
        <SimpleCell after={<Icon20MessageOutline />} description="10 лет">Школьник 1</SimpleCell>
        <SimpleCell after={<Icon20MessageOutline />} description="10 лет">Школьник 1</SimpleCell>
        <Spacing separator size={16} />
    </Layout>;
}