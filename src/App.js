import React, { Suspense } from 'react';
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

import store from './store';
import { Provider } from 'react-redux';

const Dev = React.lazy(() => import("./pages/Dev"));

let App = ({viewWidth}) => {
    return (
        <Provider store={store}>
            <ConfigProvider platform = { Platform.IOS }>
                <AdaptivityProvider>
                    <Epic>
                        <AppRoot>
                            <Router>
                                <Suspense fallback={ 'fallback' }>
                                    <Switch>
                                        <Route path="/dev">
                                            <Dev/>
                                        </Route>
                                        <Route path="/participants">
                                            <Participants/>
                                        </Route>
                                        <Route path="/schedule">
                                            <Schedule/>
                                        </Route>
                                    </Switch>
                                    <Menu />
                                </Suspense>
                            </Router>
                        </AppRoot>
                    </Epic>
                </AdaptivityProvider>
            </ConfigProvider>
        </Provider>
    );
};

export default App;
