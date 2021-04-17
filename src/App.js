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
    SimpleCell, withAdaptivity, TabbarItem, Counter, Badge, Tabbar
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Layout from "./components/Layout/Layout";
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
        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <Router>
                        <Switch>
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
                        <Menu/>
                    </Router>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>

        // <ConfigProvider>
        //
        //     <AdaptivityProvider>
        //         <AppRoot>
        //             <Router>
        //                 <Switch>
        //                     <Route path="/teacher">
        //                         <Teacher />
        //                     </Route>
        //                     <Route path="/pupils">
        //                         <Pupils />
        //                     </Route>
        //                     <Route path="/groups">
        //
        //                         <Groups />
        //                     </Route>
        //                 </Switch>
        //             </Router>
        //         </AppRoot>
        //     </AdaptivityProvider>
        // </ConfigProvider>
    );
};

export default App;
