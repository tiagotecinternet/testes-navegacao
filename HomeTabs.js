import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home";
import Feed from "./Feed";
import Notifications from "./Notifications";

const HomeTabs = () => {
    
const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Feed" component={Feed} />
          <Tab.Screen name="Notifications" component={Notifications} />
        </Tab.Navigator>
      );
}

export default HomeTabs

const styles = StyleSheet.create({})