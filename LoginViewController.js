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
    AsyncStorage,

} from 'react-native';


type Props = {};
export default class LoginViewController extends Component<Props> {

    constructor(props)
    {
        super(props);
          this.click = this.click.bind(this);
          this.state = {
              userName :'',
              password :'',
          }
    }

    componentWillMount() {
         // super();


        AsyncStorage.getItem('userName',(error,result) => {
            if (error){
                alert('取值失败:'+error);
            }else{
                // alert('取值成功:'+result);
                this.setState({userName:result});
            }
        })


        AsyncStorage.getItem('password',(error,result) => {
            if (error){
                alert('取值失败:'+error);
            }else{
                // alert('取值成功:'+result);
                this.setState({password:result});
            }
        })

        // this.setState({userName:AsyncStorage.getItem('userName')});
        // this.setState({password:AsyncStorage.getItem('password')});
        // Alert.alert(this.state.userName + ":" + this.state.password );
    }

    setUserName(newUserName)
    {
        this.setState({userName:newUserName})
    }

    click() {

        // console.log('----');
        // console.log(this);
        // Alert.alert('hello');

        AsyncStorage.setItem('userName',this.state.userName);
        AsyncStorage.setItem('password',this.state.password);

         name = AsyncStorage.getItem('userName',)



        // Alert.alert(AsyncStorage.getItem('userName') + ":" + this.state.password );
        return;

        const container = {
            'setting': 'setting',
            'borrowDetails': 'borrowDetails',
            'repayDetails': 'borrowDetails',
            'resetLoginPassword': 'resetLoginPassword',
            'wantRepayment': 'wantRepayment',
        };

        Object.keys(container).forEach((key) => {
            console.log(key);
        });


        function msgAfterTimeout (msg, who, timeout) {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
            })
        }
        msgAfterTimeout("", "Foo", 100).then((msg) =>
            msgAfterTimeout(msg, "Bar", 200)
        ).then((msg) => {
            console.log(`done after 300ms:${msg}`)
        })


        this.props.navigator.push(
            {
                component: LoginViewController,
                title: 'LoginViewController',
                passProps: {myProp: 'genius'}
            });
    }

    // const clickProblemBtn = () => {
    //     console.log('点击登录按钮');
    // }







// });




render() {
        return (
            <View style={styles.container}>

                {/*  justifyContent:'space-between' */}


                {/*https://blog.csdn.net/zhaoweizheng66/article/details/50614003*/}


                {/*justifyContent:'space-between*/}

                <View style={{flexDirection: 'row',justifyContent:'space-between'}}>

                    <TouchableOpacity onPress={() =>{
                        Alert.alert("exit");
                        }
                    }>

                        <Image style={styles.exitImg}
                             source={require('./images/new_navClose.png')}/>


                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert("register");
                            }
                        }
                    >
                        <Text style={styles.register}>
                            注册
                        </Text>
                    </TouchableOpacity>

                </View>


                <Image style={styles.imageLogo}
                       source={require('./images/logo.png')}/>

                <TextInput style={styles.phoneNumber}
                    onChangeText={ (phoneNumber) => this.setUserName(phoneNumber)}
                           value={this.state.userName}
                           placeholder="请输入手机号/用户名"
                />

                <View style={styles.line}/>

                <TextInput style={styles.passWord}
                           placeholder="请输入登录密码"
                           value={this.state.password}
                           onChangeText={(pd) => { this.setState({password:pd}) }}
                />

                <View style={styles.line}/>

                <TouchableOpacity style={styles.loginView}

                                   onPress={this.click}
                                  //     this.props.navigator.push(
                                  //         {
                                  //             component: LoginViewController,
                                  //             title: 'LoginViewController',
                                  //             passProps: {myProp: 'genius'}
                                  //         });
                                  // }}
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
                        <Text style={{ color:'#757575',}} >登录遇到问题?</Text>
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
        backgroundColor: '#FFFFFF',
        // backgroundColor: 'white',
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
        height: 1,
        marginTop: 5,
        marginRight: 20,
        marginLeft: 20,
        // position:'relative',
        // position:'absolute',    //absolute 下 bottom ,right 才有效果
        // left: 0,
        // right: 20,
        backgroundColor: '#F6F6F6',
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
