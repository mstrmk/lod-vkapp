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
import Menu from './components/Menu';
import Schedule from "./pages/Schedule/index";

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
                                <Route path="/schedule">
                                    <Schedule/>
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
