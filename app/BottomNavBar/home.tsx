import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [isOnline, setIsOnline] = React.useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.location}>1st Netajinagar, Kempapura, Hebbal</Text>
        <View style={styles.box}>
        <View style={styles.hi}>
        <Text style={styles.greeting}>Good Morning, Srinivas</Text>
        <Text style={styles.subText}>Stay safe on the road, and have a great day!</Text>
        </View>
        <View style={styles.onlineContainer}>
          <Switch value={isOnline} onValueChange={setIsOnline} />
          <Text style={styles.onlineText}>{isOnline ? 'Online' : 'Offline'}</Text>
        </View>
        </View>
      </View>
      <Text style={styles.moduleTitle}>Modules</Text>

      <View style={styles.moduleGrid}>
        <ModuleButton
          title="Inbound"
          icon="truck-delivery-outline"
          onPress={() => router.push("/Home/Inbound")}
        />
        <ModuleButton
          title="Inventory"
          icon="warehouse"
          onPress={() => router.push('/Home/Inventory')}
        />
        <ModuleButton
          title="Outbound"
          icon="truck-fast-outline"
          onPress={() => router.push('/Home/Outbound')}
        />
        <ModuleButton
          title="Return"
          icon="package-variant"
          onPress={() => navigation.navigate('Return')}
        />
        <ModuleButton
          title="Security"
          icon="shield-lock-outline"
          onPress={() => navigation.navigate('Security')}
        />
      </View>
    </ScrollView>
  );
}

function ModuleButton({ title, icon, onPress }) {
  return (
    <TouchableOpacity style={styles.moduleBox} onPress={onPress}>
      <MaterialCommunityIcons name={icon} size={82} color="#00A6A6" />
      <Text style={styles.moduleText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FBFA',
  },
  box:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  hi:{
    flexDirection:"column",
  },
  header: {
    backgroundColor: '#EAF8F7',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
    flexDirection:"column"
  },
  location: {
    color: '#00A6A6',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subText: {
    color: '#555',
    marginBottom: 10,
  },
  onlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  onlineText: {
    color: '#008C7A',
    fontWeight: '500',
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },
  moduleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  moduleBox: {
    width: '40%',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    height:"30%",
  },
  moduleText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
},

});
