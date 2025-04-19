// import { View, Text,Dimensions } from "react-native";
// import React from "react";
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withSpring,
//   runOnJS,
// } from 'react-native-reanimated';
// import { PanGestureHandler } from 'react-native-gesture-handler';
// import { SafeAreaView } from "react-native-safe-area-context";
// import "../../global.css";
// import CustomTitle from "@/component/title";

// export default function selection() {

//   const { height } = Dimensions.get('window');

//   const translateY = useSharedValue(0); // Start at center
//   const selectionThreshold = 100;

//   const onGestureEvent = Animated.event(
//     [{ nativeEvent: { translationY: translateY } }],
//     { useNativeDriver: true }
//   );

//   const handleGestureEnd = (event) => {
//     const { translationY } = event.nativeEvent;

//     if (translationY < -selectionThreshold) {
//       translateY.value = withSpring(-height / 3);
//       runOnJS(onSelect)('Driver');
//     } else if (translationY > selectionThreshold) {
//       translateY.value = withSpring(height / 3);
//       runOnJS(onSelect)('Passenger');
//     } else {
//       translateY.value = withSpring(0); // Snap back to center
//     }
//   };

//   const onSelect = (role) => {
//     console.log('Selected:', role);
//     // Here you can navigate or show animation
//   };

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [{ translateY: translateY.value }],
//   }));
//   return (
//     <SafeAreaView className="flex h-full bg-white">
//       <View className="flex flex-row items-center justify-center w-full mt-4">
//         <Text className="text-black text-4xl font-bold mx-2">
//           Hey! Are you a passenger or a Driver?
//         </Text>
//       </View>
//       <Text className="text-md font-JakartaSemiBold mx-4 mt-3 text-[#858585]">
//         Welcome! To personalize your journey, let us know how you’ll be using
//         the app. A are you looking to catch a ride as a passenger, or earn by
//         driving others as a driver?
//       </Text>
//       <View className="flex-1">
//         <Text>ME</Text>
//       </View>
//       <Text className="text-md font-JakartaSemiBold mx-4 mt-3 text-center text-[#858585] mb-3 ">Swipe up or down to make your selection</Text>
//     </SafeAreaView>
//   );
// }
import { View, Text, Dimensions } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import { router } from "expo-router";

export default function Selection() {
  const { height } = Dimensions.get("window");
  const translateY = useSharedValue(0);
  const selectionThreshold = 100;

  const onSelect = (role: string) => {
    console.log("Selected:", role);
    // You can navigate or trigger an animation here
  };

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      translateY.value = event.translationY;
    },
    onEnd: (event) => {
      if (event.translationY < -selectionThreshold) {
        translateY.value = withSpring(-height / 3);
        runOnJS(onSelect)("Driver");
      } else if (event.translationY > selectionThreshold) {
        translateY.value = withSpring(height / 3);
        runOnJS(onSelect)("Passenger");
      } else {
        translateY.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <SafeAreaView className="flex h-full bg-white">
      <View className="flex flex-row items-center justify-center w-full mt-4">
        <Text className="text-black text-4xl font-bold mx-2">
          Hey! Are you a passenger or a Driver?
        </Text>
      </View>
      <Text className="text-md font-JakartaSemiBold mx-4 mt-3 text-[#858585]">
        Welcome! To personalize your journey, let us know how you’ll be using
        the app. A are you looking to catch a ride as a passenger, or earn by
        driving others as a driver?
      </Text>

      <View className="flex-1 items-center justify-center">
        <View className="h-full justify-around ">
          <Text className="mb-4 text-3xl text-center font-JakartaExtraBold text-black" onPress={() => router.replace("/(auth)/sign-up")}>
            Driver
          </Text>

          {/* <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View
              style={animatedStyle}
              className="w-64 h-40 bg-red-500 rounded-2xl shadow-xl items-center justify-center"
            >
              <Text className="text-xl font-bold text-gray-800">
                Driver or Passenger?
              </Text>
            </Animated.View>
          </PanGestureHandler> */}

          <Text className="mb-4 text-3xl text-center font-JakartaExtraBold text-black" onPress={() => router.replace("/(auth)/sign-up")}>
            Passenger
          </Text>
        </View>
      </View>

      <Text className="text-md font-JakartaSemiBold mx-4 mt-3 text-center text-[#858585] mb-3">
      Select by clicking on the option
      </Text>
    </SafeAreaView>
  );
}
