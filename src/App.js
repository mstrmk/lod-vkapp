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
import LessonView from "./pages/LessonView";
import BeginLesson from "./pages/BeginLesson";

let App = ({viewWidth}) => {
    return (
        <ConfigProvider platform = { Platform.IOS }>
            <AdaptivityProvider>
                <Epic>
                    <AppRoot>
                        <Router>
                            <Switch>
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

                        </Router>
                    </AppRoot>
                </Epic>
            </AdaptivityProvider>
        </ConfigProvider>
    );
};

export default App;
