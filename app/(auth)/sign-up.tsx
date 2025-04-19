import { View, Text, Image, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import "../../global.css";
import { icons, images } from '@/constants';
import CustomSubTitle from '@/component/subTitle';
import InputField from '@/component/inputFied';
import CustomButton from '@/component/customButton';
import { Link } from 'expo-router';

export default function signup() {
  return (
    <SafeAreaView className='flex h-full bg-white'>
        <View className='flex-1 bg-white'>
          <View>
            <Image 
            source={images.signUpCar}
            className='z-0 w-full h-[250px]'
            />
            <Text className='text-3xl text-black font-JakartaSemiBold absolute bottom-5 left-5'>Create Your Account</Text>
          </View>
         <ScrollView className='flex-1'>
         <Text className="text-md font-JakartaSemiBold mx-5 mt-1 text-[#858585]">
         Create your account and start riding in minutes. Whether you're heading to work, home, or out with friends, NAMIBride gets you there comfortably and safely. Enjoy seamless booking, real-time tracking, and trusted drivers right at your fingertips
                     </Text>
                <View className='p-5'>
                   <KeyboardAvoidingView
                           behavior={Platform.OS === "ios" ? "padding" : "height"}
                         >
                           <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                             <View className="my-2 w-full">
                               <Text className={`text-lg font-JakartaSemiBold mb-3 `}>
                                 Name
                               </Text>
                               <View
                                 className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-lg border border-neutral-100 focus:border-primary-500`}
                               >
                                 
                                   <Image source={icons.person} className={`w-6 h-6 ml-4`} />
                                
                                 <TextInput
                                   className={`rounded-sm p-4 font-JakartaSemiBold text-[15px] flex-1 text-left`}
                                   secureTextEntry={false}
                                  placeholder='Enter your full name'
                                 />
                               </View>
                             </View>
                           </TouchableWithoutFeedback>
                         </KeyboardAvoidingView>
                         <KeyboardAvoidingView
                           behavior={Platform.OS === "ios" ? "padding" : "height"}
                         >
                           <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                             <View className="my-2 w-full">
                               <Text className={`text-lg font-JakartaSemiBold mb-3 `}>
                                 Email
                               </Text>
                               <View
                                 className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-lg border border-neutral-100 focus:border-primary-500`}
                               >
                                 
                                   <Image source={icons.email} className={`w-6 h-6 ml-4`} />
                                
                                 <TextInput
                                   className={`rounded-sm p-4 font-JakartaSemiBold text-[15px] flex-1 text-left`}
                                   secureTextEntry={false}
                                  placeholder='Enter your email'
                                 />
                               </View>
                             </View>
                           </TouchableWithoutFeedback>
                         </KeyboardAvoidingView>
                         <KeyboardAvoidingView
                           behavior={Platform.OS === "ios" ? "padding" : "height"}
                         >
                           <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                             <View className="my-2 w-full">
                               <Text className={`text-lg font-JakartaSemiBold mb-3 `}>
                                 Password
                               </Text>
                               <View
                                 className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-lg border border-neutral-100 focus:border-primary-500`}
                               >
                                 
                                   <Image source={icons.lock} className={`w-6 h-6 ml-4`} />
                                
                                 <TextInput
                                   className={`rounded-sm p-4 font-JakartaSemiBold text-[15px] flex-1 text-left`}
                                   secureTextEntry={true}
                                  placeholder='Enter your password'
                                 />
                               </View>
                             </View>
                           </TouchableWithoutFeedback>
                         </KeyboardAvoidingView>
                         <CustomButton title='Sign up' className='mt-5'/>
                         <Link href="/(auth)/sign-in" className='text-lg text-center text-general-200 mt-5 p-2'>
                         Aleady have an account?{" "}
                         <Text className='text-success-700'>Log in</Text>
                         </Link>
                          
                </View>
         </ScrollView>
        </View>
    </SafeAreaView>
  )
}