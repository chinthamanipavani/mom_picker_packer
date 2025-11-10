import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profileSections=[
  {
    title: 'My Reports',
    icon :<Image source={require('@/assets/images/logo.png')} style={{ height:28, width:28}}/>,
    link: '/BottomNavBar/home',
  },
  {
    title: 'Terms & Conditions',
    icon: <Image source={require('@/assets/images/logo.png')} style={{ height:32, width:25 }}/>,
    link:'/BottomNavBar/home',
  },
  {
    title: 'Settings',
    icon: <Image source={require('@/assets/images/logo.png')} style={{ height:28, width:28}}/>,
    link: '/BottomNavBar/home',
  }
];

export default function ProfileScreen(){
  return(
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.screen} contentContainerStyle={{ paddingBottom: 20}}>
        <View style={styles.box}>
          <View style={styles.editContainer}>
            <View style={styles.header}>
              <View style={styles.headerRow}>
                <Text style={styles.headerTitle}>Account & Settings</Text>
              </View>
              <TouchableOpacity style={styles.MaterialIcons} onPress={()=>router.back()}>
                <MaterialIcons name="arrow-back" size={32} color="#00a99d"/>
              </TouchableOpacity>
            </View>
            <Pressable onPress={()=>router.push('/BottomNavBar/home')}>
              <Image source={require('@/assets/images/logo.png')} style={{ height:20, width:20}}/>
            </Pressable>
          </View>
          <View style={styles.profileContainer}>
            <Image style={styles.avatar} source={require('@/assets/images/logo.png')}/>
            <View style={styles.profileDetails}>
              <Text style={styles.name}>mom pharmacy</Text>
              <Text style={styles.mobileNo}>+91 7702068334</Text>
            </View>
          </View>
        </View>
        <FlatList data={profileSections}
        keyExtractor={(item)=>item.title}
        renderItem={({ item })=>(
          <TouchableOpacity onPress={() => router.push(item.link)} style={styles.profileBox}>
            <View style={styles.row}>
              {item.icon}
              <Text style={styles.sectionTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        scrollEnabled={false}
        contentContainerStyle={{paddingBottom: 20}}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
    backgroundColor:'#fff'
  },
  screen:{
    flex:1,
    backgroundColor:'#fff',
  },
  box:{
    backgroundColor: '#ceebe7',
    paddingBottom:16,
    marginBottom:10,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  header:{
    paddingVertical:20,
    marginRight:50
  },
  headerRow:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:16,
  },
  headerTitle:{
    fontSize:25,
    fontWeight:'bold',
    color:'#007e71',
    marginLeft:12,
    marginBottom: -5,
  },
  editContainer:{
    alignItems:'flex-end',
    paddingHorizontal:20,
    marginTop:10,
  },
  profileContainer:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:20,
    marginVertical:20,
  },
  avatar:{
    width:150,
    height:100,
    borderRadius:40,
  },
  profileDetails:{
    marginLeft:16,
  },
  name:{
    fontSize:20,
    fontWeight:"700",
    color:"#444",
    width:"80%",
  },
  mobileNo:{
    fontSize: 15,
    fontWeight:'700',
    color:'#444',
  },
  email:{
    fontSize:14,
    color:'#fff',
    marginTop:4,
  },
  profileBox:{
    backgroundColor:'#f2faf9',
    borderRadius: 12,
    padding:20,
    marginHorizontal:16,
    marginVertical:6,
    elevation:3,
    shadowColor:'#007e71',
    shadowOffset:{ width:0, height:2},
    shadowOpacity:0.1,
    shadowRadius:-20,
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
  },
  sectionTitle:{
    fontSize:16,
    fontWeight:'600',
    color:'#007e71',
    marginLeft:12,
  },
  MaterialIcons:{
    marginLeft:-50,
    marginTop:-30,
  },
});