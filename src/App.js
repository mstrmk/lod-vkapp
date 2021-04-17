import React from "react";
import {
    AdaptivityProvider,
    ConfigProvider,
    useAdaptivity,
    AppRoot,
    SplitLayout,
    SplitCol,
    ViewWidth as vW,
    View,
    Panel,
    PanelHeader,
    Header,
    Group,
    SimpleCell, withAdaptivity, TabbarItem, Counter, Badge, Tabbar, Epic, Platform
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Teacher from "./pages/Teacher/index";
import Pupils from "./pages/Pupils";
import Groups from "./pages/Groups";
import Menu from './components/Menu';

let App = ({viewWidth}) => {


    return (
        <ConfigProvider platform = { Platform.IOS }>
            <AdaptivityProvider>
                <Epic>
                    <AppRoot>
                        <Router>
                            <Switch>
                                <Route path="/participants">
                                    <Teacher/>
                                </Route>
                                <Route path="/teacher">
                                    <Teacher/>
                                </Route>
                                <Route path="/pupils">
                                    <Pupils/>
                                </Route>
                                <Route path="/groups">
                                    <Groups/>
                                </Route>
                            </Switch>
                            <Menu />
                        </Router>
                    </AppRoot>
                </Epic>
            </AdaptivityProvider>
        </ConfigProvider>
    );
};

export default App;
