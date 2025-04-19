import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import { icons, images } from "@/constants";
import CustomSubTitle from "@/component/subTitle";
import InputField from "@/component/inputFied";
import CustomButton from "@/component/customButton";
import { Link, router } from "expo-router";

export default function signin() {
  return (
    <SafeAreaView className="flex h-full bg-white relative">
      <View className="flex-1 bg-white">
        <View>
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-3xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome Back
          </Text>
        </View>
        <ScrollView className="flex-1">
          <Text className="text-md font-JakartaSemiBold mx-5 mt-1 text-[#858585]">
            Log in to your account and continue your journey with NAMIBride.
            Whether you're commuting, exploring the city, or catching up with
            friends, your next ride is just a tap away. Enjoy quick access,
            reliable drivers, and real-time tracking—wherever you go.
          </Text>
          <View className="p-5">
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
                      placeholder="Enter your email"
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
                      placeholder="Enter your password"
                    />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <CustomButton title="Sign in" className="mt-5" onPress={() => router.replace("/(root)/(tabs)/home")}/>
            <Link
              href="/(auth)/sign-up"
              className="text-lg text-center text-general-200 mt-5 p-2"
            >
              Don't have an account?{" "}
              <Text className="text-success-700">Sign up</Text>
            </Link>
          </View>
        </ScrollView>
      </View>
      <Text className="absolute bottom-5 text-md font-JakartaSemiBold mx-5 mt-3 text-center text-[#858585]">
      🔒 Keep your account secure, never share your username or password with anyone.
      </Text>
    </SafeAreaView>
  );
}
