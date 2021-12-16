import React, { Component } from "react";
import {View,Text,StyleSheet,SafeAreaView, Platform,StatusBar,Image} from "react-native";
import firebase from "firebase"

export default class Logout extends Component{
    componentDidMount(){
        firebase.auth().signOut();
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text>LogOut</Text>
            </View>
        )
    }
}