import React from 'react';
import {
    Badge,
    Cell, Counter, Group,
    List,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    PanelHeaderButton, PanelHeaderContent, PanelHeaderContext,
    SplitCol,
    SplitLayout, Tabbar, TabbarItem,
    View,
    ViewWidth,
    VKCOM, withAdaptivity, withPlatform
} from "@vkontakte/vkui";
import {Icon28ClipOutline, Icon28MessageOutline, Icon28NewsfeedOutline, Icon28Profile} from '@vkontakte/icons';
import { Icon24MessageOutline } from '@vkontakte/icons';
import Menu from "../Menu";

const Layout = withPlatform(withAdaptivity(
    class Layout extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                contextOpened: true,
                mode: 'all'
            }
            this.select = this.select.bind(this);
        }

        select(e) {
            const mode = e.currentTarget.dataset.mode;
            this.setState({mode});
            requestAnimationFrame(this.toggleContext);
        }

        render() {
            const hasHeader = this.props.platform !== VKCOM;
            const isDesktop = this.props.viewWidth >= ViewWidth.SMALL_TABLET;

            return (
                <>
                    <SplitLayout
                        style={{justifyContent: "center"}}
                        header={hasHeader && <PanelHeader separator={false}/>}
                    >
                        <SplitCol
                            animate={!isDesktop}
                            spaced={isDesktop}
                            width={isDesktop ? '560px' : '100%'}
                            maxWidth={isDesktop ? '560px' : '100%'}
                        >
                            <View activePanel="context2">
                                <Panel id="context2">
                                    <PanelHeader left={<PanelHeaderBack/>}>
                                        <PanelHeaderContent>
                                            {this.props.title}
                                        </PanelHeaderContent>
                                    </PanelHeader>
                                    <Group>
                                        {this.props.children}
                                    </Group>
                                </Panel>
                            </View>
                        </SplitCol>
                    </SplitLayout>

                </>
            )
        }
    }, {viewWidth: true}));

export default Layout;