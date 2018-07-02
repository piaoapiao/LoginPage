import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
} from 'react-native';


type Props = {};
export default class LoginViewController extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>

                    <Image style={styles.exitImg}
                                              source={require('./images/new_navClose.png')}/>

                    <Text style={styles.register}>
                        注册
                    </Text>

                </View>

                <Image  style={styles.imageLogo}
                        source={require('./images/logo.png')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    exitImg:{
        width:20,
        height:20,
        marginTop:30,
        marginLeft:10,
    },
    register: {
        fontSize: 15,
        textAlign: 'right',
        marginTop: 32,
        marginRight:15,
        color: 'gray',
        // alignSelf:'flex-start',
        // justifyContent:'flex-end',
        // alignItems:'flex-end',
        // backgroundColor:'green'
    },
    imageLogo: {
         alignSelf: 'center',   //center
         width: 100,
         height: 100,
         marginTop:20,
    },
});
