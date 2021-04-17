import React from 'react';
import {
    Badge,
    Cell, Counter, Div, Group,
    List,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    PanelHeaderButton, PanelHeaderContent, PanelHeaderContext, Search, Spacing,
    SplitCol,
    SplitLayout, Tabbar, TabbarItem, Title,
    View,
    ViewWidth,
    VKCOM, withAdaptivity, withPlatform
} from "@vkontakte/vkui";
import {
    Icon24Filter,
} from '@vkontakte/icons';

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
                        <PanelHeader left={<PanelHeaderBack/>}>
                            <PanelHeaderContent>
                                Учитель
                            </PanelHeaderContent>
                        </PanelHeader>
                        <Group>
                            <Spacing size={16}/>
                            <Spacing size={8}/>
                            <Div style={{paddingBottom: '0'}}>
                                <Title level="1" weight="medium"
                                       style={{marginBottom: 16}}>{this.props.title}</Title>
                            </Div>
                            {this.props.search}
                            {this.props.children}
                        </Group>
                    </SplitCol>
                </SplitLayout>
            )
        }
    }, {viewWidth: true}));

export default Layout;