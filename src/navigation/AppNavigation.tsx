import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {CommunityScreen} from '../screens/CommunityScreen';
import {FeedScreen} from '../screens/FeedScreen';
import {ExploreScreen} from '../screens/ExploreScreen';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

interface Label {
  focused: boolean;
}

const tabBarLabel = ({focused}: Label, label: string) => (
  <Text
    style={{
      fontWeight: focused ? 'bold' : 'normal',
      textTransform: 'capitalize',
      width: 80,
      color: focused ? 'black' : 'grey',
      textAlign: 'center',
    }}>
    {label}
  </Text>
);

function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarLabelStyle: {fontSize: 12},
          tabBarStyle: {backgroundColor: 'transparent'},
          tabBarIndicatorStyle: {backgroundColor: 'transparent'},
        }}>
        <Tab.Screen
          name="Feeds"
          component={FeedScreen}
          options={{
            tabBarLabel: ({focused}) => tabBarLabel({focused}, 'Feeds'),
          }}
        />
        <Tab.Screen
          name="Community"
          component={CommunityScreen}
          options={{
            tabBarLabel: ({focused}) => tabBarLabel({focused}, 'Community'),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarLabel: ({focused}) => tabBarLabel({focused}, 'Explore'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
