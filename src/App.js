import React from "react";
import {
    AdaptivityProvider,
    ConfigProvider,
    AppRoot, Epic, Platform
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Participants from "./pages/Participants/index";
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
                                    <Participants/>
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
