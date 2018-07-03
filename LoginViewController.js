import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    TextInput,
    Button,
    Alert,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';


type Props = {};
export default class LoginViewController extends Component<Props> {

    click() {
        Alert.alert('hello');
    }

    // const clickProblemBtn = () => {
    //     console.log('点击登录按钮');
    // }



    render() {
        return (
            <View style={styles.container}>

                {/*  justifyContent:'space-between' */}


                {/*https://blog.csdn.net/zhaoweizheng66/article/details/50614003*/}


                {/*justifyContent:'space-between*/}

                <View style={{flexDirection: 'row',justifyContent:'space-between'}}>

                    <Image style={styles.exitImg}
                           source={require('./images/new_navClose.png')}/>
                    <Text style={styles.register}>
                        注册
                    </Text>

                </View>


                <Image style={styles.imageLogo}
                       source={require('./images/logo.png')}/>

                <TextInput style={styles.phoneNumber}
                           placeholder="请输入手机号/用户名"
                />

                <View style={styles.line}/>

                <TextInput style={styles.passWord}
                           placeholder="请输入登录密码"
                />

                <View style={styles.line}/>

                <TouchableOpacity style={styles.loginView}
                                  onPress={() =>{
                                      Alert.alert('problem!');
                                  }}
                    // onPress={this.click}
                >
                    <Text style={{color:'white', marginTop:11, textAlign:'center', flex:1,}}>登录</Text>

                </TouchableOpacity>




                <View style={styles.bottomView}
                >
                    <TouchableOpacity style={styles.problemButton}
                        onPress={() =>{
                            Alert.alert('problem!');
                        }}
                        // onPress={this.click}
                    >

                        <Text >登录遇到问题?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        // backgroundColor: '#F5FCFF',
        backgroundColor: 'white',
    },
    exitImg: {
        width: 20,
        height: 20,
        marginTop: 30,
        marginLeft: 20,
        alignSelf: 'flex-start',
        // justifyContent:'flex-start',
    },
    register: {
        fontSize: 15,
        // textAlign: 'right',
        marginTop: 32,
        marginRight: 20,
        // bottom:20,
        color: 'gray',
         // justifyContent:'flex-end',
        // alignSelf: 'flex-end',
        // alignItems:'flex-end',
        // backgroundColor:'green'
    },
    imageLogo: {
        alignSelf: 'center',   //center
        width: 100,
        height: 100,
        marginTop: 20,
        borderRadius: 8,
    },
    phoneNumber: {
        marginLeft: 20,
        marginTop: 60,
        marginRight: 20,
        height: 30,
        // backgroundColor:'red',
    },
    line: {
        height: 0.5,
        marginTop: 5,
        marginRight: 20,
        marginLeft: 20,
        // position:'relative',
        // position:'absolute',    //absolute 下 bottom ,right 才有效果
        // left: 0,
        // right: 20,
        backgroundColor: 'gray',
    },
    passWord: {
        marginLeft: 20,
        marginTop: 20,
        marginRight: 20,
        height: 30,
        // backgroundColor:'red',
    },
    loginView:{
         // alignSelf:'center',
        height:40,
        marginTop:30,
        marginLeft:20,
        marginRight:20,
        borderRadius:20,
        backgroundColor:'#FFC395',
    },
    bottomView: {
        // marginTop:5,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        // height: 35,
        borderRadius: 0,
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'flex-end'
    },
    problemButton:{
        alignSelf:'center',
        bottom:20,

    },
});
