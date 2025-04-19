import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import "../../../global.css";
import ProfileCard from '@/component/profileCard';
import { Ionicons, MaterialIcons, Feather, Entypo } from "@expo/vector-icons";
import { router } from 'expo-router';
export default function profile() {
  return (
    <SafeAreaView className="flex h-full bg-white">
        <View className='flex flex-col justify-center items-center pt-5'>
          <Image 
          source={{uri: "https://randomuser.me/api/portraits/women/44.jpg"}}
          className='w-40 h-40 rounded-full'
          resizeMode='contain'
          />
          <Text className='text-black text-4xl font-bold mt-2'>Paulus Wilhelm</Text>
          <Text className="text-md font-JakartaSemiBold mx-4 text-[#858585]">pauluswilhelm85@gmail.com</Text>
        </View>
       <ScrollView>
       <View className='mt-10 px-5'>
          <Text className='text-lg font-JakartaSemiBold text-[#858585] mb-2'>Preferences</Text>
          <ProfileCard 
  LeftIcon={Ionicons} 
  RightIcon={MaterialIcons} 
  title="User Profile" 
  description="Email, Phone number, Address, etc"
  onPress={() => router.push("/(root)/user-profile")}
  leftIconName="person-outline"
  rightIconName="keyboard-arrow-right"
/>

<ProfileCard 
  LeftIcon={Feather} 
  RightIcon={MaterialIcons} 
  title="Security" 
  description="Password, 2FA, and more"
  onPress={() => console.log('Security Pressed')}
  leftIconName="lock"
  rightIconName="keyboard-arrow-right"
/>

<ProfileCard 
  LeftIcon={Entypo} 
  RightIcon={MaterialIcons} 
  title="Support" 
  description="Contact us or read FAQs"
  onPress={() => console.log('Support Pressed')}
  leftIconName="help"
  rightIconName="keyboard-arrow-right"
/>

<ProfileCard 
  LeftIcon={MaterialIcons} 
  title="Logout" 
  description="Log out of your account"
  onPress={() => console.log('Logout Pressed')}
  leftIconName="logout"
  color='red'
/>

        </View>
       </ScrollView>
    </SafeAreaView>
  )
}