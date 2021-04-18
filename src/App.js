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
import LessonView from "./pages/LessonView";
import BeginLesson from "./pages/BeginLesson";

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
                                        <Route path="/participants" exact={true}>
                                            <Participants />
                                        </Route>
                                        <Route path="/schedule/:id" exact={true}>
                                            <LessonView />
                                        </Route>
                                        <Route path="/schedule" exact={true}>
                                            <Schedule />
                                        </Route>
                                        <Route path="/begin-lesson" exact={true}>
                                            <BeginLesson />
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
