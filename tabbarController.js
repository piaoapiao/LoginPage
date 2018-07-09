import React, {Component} from 'react';
import {
    View,
    TabBarIOS,
    NavigatorIOS,
} from 'react-native';
import LoginViewController from "./LoginViewController";

import App from "./App";
import MeController from "./MeController";

export default class TabBarController extends Component<Props>
{
    constructor(props)
    {
        super(props);
        this.state = {selectedTabItem:0};
    }


    render()
    {
        return <TabBarIOS>
            <TabBarIOS.Item
                 // systemIcon="bookmarks"  // 系统图标(bookmarks)
                unselectedTintColor="yellow"
                selected={this.state.selectedTabItem === 0}
                onPress={() => {this.setState({selectedTabItem:0})}}
                title="首页"
                 icon={require('./images/icon_bot_01_nor.png')}

                selectedIcon={require('./images/elements_icon_bot_01_sel.png')}
            >

                <NavigatorIOS
                     style={{flex: 1}}
                    initialRoute={{
                        component: LoginViewController,    //设置根视图
                        title:'登录'}}
                     navigationBarHidden={true}
                     interactivePopGestureEnabled={true}

                     barStyle={"default"}
                     barTintColor={"NO"}
                     translucent={true}
                />

            </TabBarIOS.Item>

            <TabBarIOS.Item
                // systemIcon="downloads"  // 系统图标(downloads)
                 selected={this.state.selectedTabItem === 1}
                onPress={() => {this.setState({selectedTabItem:1})}}
                title={"我的"}
                icon={require('./images/icon_bot_01_nor.png')}
                selectedIcon={require('./images/elements_icon_bot_01_sel.png')}
            >
                <NavigatorIOS
                    style={{flex: 1}}
                    initialRoute={{
                        component: MeController,    //设置根视图
                        title:'登录'}}

                />
            </TabBarIOS.Item>
        </TabBarIOS>
    }
}