import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import CustomButton from "@/component/customButton";

export default function welcome() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const lastSlide = activeIndex === onboarding.length - 1;
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        className="w-full flex justify-end items-end p-5"
        onPress={() => {
          router.replace("/(auth)/selection");
        }}
      >
        <Text className="text-black font-JakartaBold text-md">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[50px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full"></View>
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-black rounded-full"></View>
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <View className="relative w-full h-[300px]">
            <Image
              source={item.image}
              className="w-full h-[300px] z-0"
              resizeMode="contain"
            />
            </View>
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold text-center mx-10">
                {item.title}
              </Text>
            </View>
            <Text className="text-md font-JakartaSemiBold text-center mx-10 mt-3 text-[#858585]">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <TouchableOpacity
        onPress={() => {
          lastSlide
            ? router.replace("/(auth)/selection")
            : swiperRef.current?.scrollBy(1);
        }}
        className={`w-11/12 rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70  bg-black mt-10 mb-10`}
      >
        <Text className={`text-lg font-bold text-white`}>
          {lastSlide ? "Get started" : "Next"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
