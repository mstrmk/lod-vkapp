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
import {withRouter} from 'react-router-dom';

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
                    <View popout={this.props.popout} activePanel="main">
                        <Panel id="main">
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
                                    <PanelHeader left={this.props.backButton ?? <PanelHeaderBack onClick={this.props.history.goBack}/>}>
                                        <PanelHeaderContent>
                                            Учитель
                                        </PanelHeaderContent>
                                    </PanelHeader>
                                    <Group>
                                        <Spacing size={12}/>
                                        <Div>

                                            <Div style={{
                                                paddingBottom: '16px',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-end'
                                            }}>
                                                <Title level="1" weight="medium"
                                                       style={{marginBottom: 0}}>{this.props.title}</Title>
                                                {this.props.titleAfter && <div>{this.props.titleAfter}</div>}
                                            </Div>
                                            {this.props.search}
                                        </Div>
                                        {this.props.children}
                                    </Group>
                                </SplitCol>
                            </SplitLayout>
                            <Spacing size={54}/>
                        </Panel>
                    </View>
                </>
            )
        }
    }, {viewWidth: true}));

export default withRouter(Layout);