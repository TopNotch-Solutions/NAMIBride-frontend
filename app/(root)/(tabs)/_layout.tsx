import { icons } from '@/constants';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Image, ImageSourcePropType, View } from 'react-native';

export default function TabLayout() {

    const TabIcon = ({source, focused}: {source: ImageSourcePropType; focused: Boolean;}) =>(
        <View className={`flex flex-grow justify-center items-center rounded-full ${focused ? "bg-general-300" : ""} mt-10`}>
            <View className={`rounded-full w-12 h-12 items-center justify-center ${focused ? "bg-general-400" : ""}`}>
                <Image 
                source={source}
                tintColor="white"
                resizeMode='contain'
                className='w-10 h-10'
                />
            </View>
        </View>
    );

  return (
    <Tabs
    initialRouteName='home'
    screenOptions={{
        tabBarActiveTintColor:"white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle:{
            backgroundColor: "#333333",
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            height: 70,
            position: "absolute",
        }
    }}
    >
        <Tabs.Screen name='home' 
        options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({focused}) =>(
                <TabIcon source={icons.home} focused={focused}/>
            )
        }}
        />
         <Tabs.Screen name='rides' 
        options={{
            title: "Rides",
            headerShown: false,
            tabBarIcon: ({focused}) =>(
                <TabIcon source={icons.list} focused={focused}/>
            )
        }}
        />
         <Tabs.Screen name='chats' 
        options={{
            title: "Chats",
            headerShown: false,
            tabBarIcon: ({focused}) =>(
                <TabIcon source={icons.chat} focused={focused}/>
            )
        }}
        />
        <Tabs.Screen name='profile' 
        options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({focused}) =>(
                <TabIcon source={icons.profile} focused={focused}/>
            )
        }}
        />
    </Tabs>
  );
}
