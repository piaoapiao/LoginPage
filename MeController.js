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
    FlatList,

} from 'react-native';


// type Props = {};
export default class MeController extends Component<Props> {

    constructor(props) {
        super(props);
         // this.click = this.click.bind(this);
        this.data = [{icon: require('./images/me2.png'),title:'设置'},{icon:require('./images/me1.png'), title:'我要还款'}];
    }

    // render()
    // {
    //     return (
    //         <FlatList
    //             data={[{key: 'a'}, {key: 'b'},{key:'c'},{key:'d'}]}
    //             renderItem={({item}) => <Text>{item.key}</Text>}
    //         />
    //     );
    // }

    click =  (id) =>{
        this.test$()
        Alert.alert(id.toString());
    };

    test$ = () =>{
        subKey = ''
        storeKey = 'store'
        const subscriptionKey = subKey || `${storeKey}Subscription`
        console.log(subscriptionKey);
        // console.log(subscriptionKey);
    }


    _renderItem = ({item,index}) => {
        return (
            <MeItem
                icon={item.icon}
                id={index}
                title={item.title}
                onPress={this.click}
            />
        )
    }

    _keyExtractor = (item, index) => index.toLocaleString(); // 不加 toLocaleString() 会有警告

    render()
    {
        return (
            <FlatList style={{marginTop:20,}}
                         data={this.data}
                         renderItem={this._renderItem}
                         keyExtractor={this._keyExtractor}
            />
        );
    }

}

class MeItem extends  Component<props>{
    constructor(props)
    {
        super(props);
    }

    _onPress = () =>{
        this.props.onPress(this.props.id);
    }

    render()
    {
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={{height : 60, flexDirection:'row'}}>
                    <Image style={{width : 20, height:20,marginLeft:20,alignItems:'center',}}
                           source={this.props.icon}
                    />
                    <Text style={{height:20,marginLeft:20,marginTop:3,}}>
                        {this.props.title}</Text>

                    <Image style={{width:20,height:20,alignItems:'center',position:'absolute',right:20,}}
                        source={require("./images/detailArrow.png")}
                    />

                </View>
            </TouchableOpacity>
        );
    }

}