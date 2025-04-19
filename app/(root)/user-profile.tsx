import {
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import InputField from "@/component/inputFied";
import { icons } from "@/constants";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function ProfileScreen() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImage = async () => {
    // Ask for permission if not already granted
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    // if (status !== 'granted') {
    //   alert('Permission to access gallery is required!');
    //   return;
    // }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Back Button */}
      <View className="absolute top-5 left-5 z-10">
        <Pressable
          onPress={() => router.back()}
          className="bg-black p-4 rounded-full"
        >
          <Ionicons name="arrow-back" size={25} color="white" />
        </Pressable>
      </View>

      {/* Profile Image and Info */}
      <View className="flex flex-col justify-center items-center pt-14">
        <View className="relative">
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
            className="w-40 h-40 rounded-full"
            resizeMode="cover"
          />

          {/* Edit Icon at Bottom Right of Image */}
          <Pressable
            onPress={() => console.log("Edit Profile Picture")}
            className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow"
          >
            <Feather name="edit-3" size={20} color="#000" />
          </Pressable>
        </View>

        <Text className="text-black text-4xl font-bold mt-4">
          Paulus Wilhelm
        </Text>
        <Text className="text-md font-JakartaSemiBold mx-4 text-[#858585]">
          pauluswilhelm85@gmail.com
        </Text>
      </View>
      <ScrollView className="px-5 mt-5 mb-5">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="my-2 w-full">
              <Text className={`text-lg font-JakartaSemiBold mb-3 `}>
                Full name
              </Text>
              <View
                className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-lg border border-neutral-100 focus:border-primary-500`}
              >
                {/* <Image source={icons.person} className={`w-6 h-6 ml-4`} /> */}

                <TextInput
                  className={`rounded-sm p-4 font-JakartaSemiBold text-[15px] flex-1 text-left`}
                  secureTextEntry={false}
                  placeholder="Enter full name"
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
                {/* <Image source={icons.email} className={`w-6 h-6 ml-4`} /> */}

                <TextInput
                  className={`rounded-sm p-4 font-JakartaSemiBold text-[15px] flex-1 text-left`}
                  secureTextEntry={false}
                  placeholder="Enter email"
                />
                <Image source={icons.email} className={`w-6 h-6 mr-4`} />
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
                Phone number
              </Text>
              <View
                className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-lg border border-neutral-100 focus:border-primary-500`}
              >
                {/* <Image source={icons.profile} className={`w-6 h-6 ml-4`} /> */}

                <TextInput
                  className={`rounded-sm p-4 font-JakartaSemiBold text-[15px] flex-1 text-left`}
                  secureTextEntry={false}
                  placeholder="Enter phone number"
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
                Car plate number
              </Text>
              <View
                className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-lg border border-neutral-100 focus:border-primary-500`}
              >
                {/* <Image source={icons.profile} className={`w-6 h-6 ml-4`} /> */}

                <TextInput
                  className={`rounded-sm p-4 font-JakartaSemiBold text-[15px] flex-1 text-left`}
                  secureTextEntry={false}
                  placeholder="Enter plate number"
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        <View className="w-full my-2">
  <Text className="text-lg font-JakartaSemiBold mb-3">
    Driving Licence front
  </Text>

  <Pressable
    onPress={pickImage}
    className="bg-neutral-100 rounded-lg border border-neutral-200 w-full justify-center items-center overflow-hidden"
    style={{ height: 128 }} // fixed height matching h-32 (32 * 4 = 128px)
  >
    {selectedImage ? (
      <Image
        source={{ uri: selectedImage }}
        style={{ height: '100%', width: '100%' }}
        resizeMode="cover"
      />
    ) : (
      <View className="h-full w-full justify-center items-center">
        <Text className="text-[#999] font-JakartaSemiBold">Tap to select an image</Text>
      </View>
    )}
  </Pressable>
</View>
<View className="w-full my-2">
  <Text className="text-lg font-JakartaSemiBold mb-3">
    Driving Licence back
  </Text>

  <Pressable
    onPress={pickImage}
    className="bg-neutral-100 rounded-lg border border-neutral-200 w-full justify-center items-center overflow-hidden"
    style={{ height: 128 }} // fixed height matching h-32 (32 * 4 = 128px)
  >
    {selectedImage ? (
      <Image
        source={{ uri: selectedImage }}
        style={{ height: '100%', width: '100%' }}
        resizeMode="cover"
      />
    ) : (
      <View className="h-full w-full justify-center items-center">
        <Text className="text-[#999] font-JakartaSemiBold">Tap to select an image</Text>
      </View>
    )}
  </Pressable>
</View>
<View className="w-full my-2">
  <Text className="text-lg font-JakartaSemiBold mb-3">
    ID front
  </Text>

  <Pressable
    onPress={pickImage}
    className="bg-neutral-100 rounded-lg border border-neutral-200 w-full justify-center items-center overflow-hidden"
    style={{ height: 128 }} // fixed height matching h-32 (32 * 4 = 128px)
  >
    {selectedImage ? (
      <Image
        source={{ uri: selectedImage }}
        style={{ height: '100%', width: '100%' }}
        resizeMode="cover"
      />
    ) : (
      <View className="h-full w-full justify-center items-center">
        <Text className="text-[#999] font-JakartaSemiBold">Tap to select an image</Text>
      </View>
    )}
  </Pressable>
</View>

<View className="w-full my-2">
  <Text className="text-lg font-JakartaSemiBold mb-3">
    ID back
  </Text>

  <Pressable
    onPress={pickImage}
    className="bg-neutral-100 rounded-lg border border-neutral-200 w-full justify-center items-center overflow-hidden"
    style={{ height: 128 }} // fixed height matching h-32 (32 * 4 = 128px)
  >
    {selectedImage ? (
      <Image
        source={{ uri: selectedImage }}
        style={{ height: '100%', width: '100%' }}
        resizeMode="cover"
      />
    ) : (
      <View className="h-full w-full justify-center items-center">
        <Text className="text-[#999] font-JakartaSemiBold">Tap to select an image</Text>
      </View>
    )}
  </Pressable>
</View>

<View className="w-full my-2">
  <Text className="text-lg font-JakartaSemiBold mb-3">
    Car front
  </Text>

  <Pressable
    onPress={pickImage}
    className="bg-neutral-100 rounded-lg border border-neutral-200 w-full justify-center items-center overflow-hidden"
    style={{ height: 128 }} // fixed height matching h-32 (32 * 4 = 128px)
  >
    {selectedImage ? (
      <Image
        source={{ uri: selectedImage }}
        style={{ height: '100%', width: '100%' }}
        resizeMode="cover"
      />
    ) : (
      <View className="h-full w-full justify-center items-center">
        <Text className="text-[#999] font-JakartaSemiBold">Tap to select an image</Text>
      </View>
    )}
  </Pressable>
</View>

<View className="w-full my-2">
  <Text className="text-lg font-JakartaSemiBold mb-3">
    Driver full 
  </Text>

  <Pressable
    onPress={pickImage}
    className="bg-neutral-100 rounded-lg border border-neutral-200 w-full justify-center items-center overflow-hidden"
    style={{ height: 128 }} // fixed height matching h-32 (32 * 4 = 128px)
  >
    {selectedImage ? (
      <Image
        source={{ uri: selectedImage }}
        style={{ height: '100%', width: '100%' }}
        resizeMode="cover"
      />
    ) : (
      <View className="h-full w-full justify-center items-center">
        <Text className="text-[#999] font-JakartaSemiBold">Tap to select an image</Text>
      </View>
    )}
  </Pressable>
</View>

        
      </ScrollView>
    </SafeAreaView>
  );
}
