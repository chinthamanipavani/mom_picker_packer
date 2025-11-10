import { COLOR } from "@/constants/color";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useLocationContext } from "@/context/locationContext";
 const { width, height } = Dimensions.get("window");

 const TopNavBar = ({ showBack = false, onBack})=>{
    const { shortAddress } = useLocationContext();

    const [selectedAddress, setSelectedAddress] = useState(shortAddress);
    const [AddressData, setAddressData] = useState([]);
    const [loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    const renderBackButton = () => 
        showBack ? (
            <TouchableOpacity onPress={onBack ? onBack :()=> router.back()} style={styles.backButton}>
                <MaterialIcons name="arrow-back" size={32} color="#00a99d"/>
            </TouchableOpacity>
        ) : (
            <View style={styles.backButton}/>
        );
    
    return(
        <View style={styles.container}>
            <View style={styles.headerRow}>
                {renderBackButton()}
                <Text style={styles.title}>medicine on minutes</Text>
                <View style={{ width:32 }}/>
            </View>

            <View style={styles.addressContainer}>
                <AddressButton style={styles.loactionWrapper}>
                    <View style={styles.loactionWrapper}>
                        <Group2 width={25} height={25}/>
                        <Text style={styles.locationText} numberOfLines={1} ellipsizeMode="tail">{shortAddress}</Text>
                    </View>
                </AddressButton>
                <View style={styles.alarmIcon}>
                    <NotificationIcon/>
                </View>
            </View>
        </View>
    );
 };

 const styles = StyleSheet.create({
    container:{
        height: height * 0.13,
        width: width,
        backgroundColor: COLOR.light,
        paddingHorizontal:20,
        paddingTop:5,
        marginTop:-10,
    },
    headerRow:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:2,
    },
    loactionWrapper:{
        flexDirection:"row",
        alignItems:"center",
    },
    backButton:{
        width:32,
        alignItems:"flex-start",
        justifyContent:"center",
    },
    title:{
        color:COLOR.primary,
        fontSize:24,
        fontWeight:"700",
        textAlign:"center",
        flex:1,
        marginTop:10,
    },
    addressContainer:{
        width:"100%",
        height:70,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:3,
    },

    locationText:{
        color:"#000",
        fontSize:16,
        marginLeft:3,
        flexShrink:1,
    },
    alarmIcon:{
        flexDirection:"row",
        alignItems:"center",
    },
 });

 export default TopNavBar;