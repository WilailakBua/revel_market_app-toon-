import React from 'react';
import {
    Image,
    StatusBar,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            username:"admin",
            password:"123456"
        }
    }

    componentDidMount() {
        this._getLogin();

    }
    
    _getLogin(param = 'Mickey Mouse'){
        Alert.alert("Hello " + param);
    }

    render() {
        return (
            <ScrollView style = {{ /* backgroundColor: '#FFFFFF' */ }}>
                <StatusBar hidden = {true} />
                <View style = {{ padding: 36 }}>
                    <Image 
                        resizeMode = "contain" 
                        source = { require('../../images/mickey_mouse.png') }
                        style = {{ 
                            width: 300,
                            height: 200,
                            marginTop: 54,
                            marginBottom: 24,
                            alignSelf: 'center'
                        }}
                    />
                    <View style = {[ styles.row_underline, { marginBottom: 16 }]}>
                        <Icon name = "email-outline" style = { styles.login_icon } />
                        <TextInput placeholder = "Email Address"
                            placeholderTextColor = "#ADADAD"
                            underlineColorAndroid = "transparent"
                            style = {{
                                color: '#B98257',
                                flex: 1,
                                fontSize: 16,
                                paddingLeft: 12
                            }}
                         
                            onChangeText = {
                                (val) => {
                                    this.setState({
                                        username : val
                                    })
                                }
                            }

                            value={this.state.username}
                        />
                    </View>
                    <View style = {[ styles.row_underline, { marginBottom: 24 }]}>
                        <Icon name = "lock-outline" style = { styles.login_icon } />
                        <TextInput placeholder = "Password"
                            placeholderTextColor = "#ADADAD"
                            underlineColorAndroid = "transparent"
                            style = {{
                                color: '#B98257',
                                flex: 1,
                                fontSize: 16,
                                paddingLeft: 12
                            }}
                            onChangeText = {
                                (val) => {
                                    this.setState({
                                        password : val
                                    })
                                }
                            }
                            secureTextEntry = {true}
                            value={this.state.password}
                        />
                    </View>
                    <TouchableOpacity style = {{
                        flex: 1,
                        backgroundColor: '#CA1515',
                        borderRadius: 2,
                        padding: 10
                        
                    }}
                    onPress ={()=>{ this._getLogin();}}
                    >
                        <Text style = {{
                            alignSelf: 'center',
                            fontSize: 16,
                            color: '#FFFFFF'
                        }}>
                            
                            {/* {this.props.btn} */}
                            {this.state.username}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create ({
    row_underline: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#B6B6B6'
    },

    login_icon: {
        alignSelf: 'center',
        fontSize: 20,
        color: '#ADADAD'
    }
})