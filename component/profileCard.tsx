import { Text, View, Pressable } from "react-native";
import "../global.css";
import { ProfileCardProps } from "@/types/type";

const ProfileCard = ({
    title,
    description,
    LeftIcon,
    RightIcon,
    leftIconName,
    rightIconName,
    color,
    onPress
  }: ProfileCardProps) => {
    return (
      <Pressable
        className="mt-5 mb-2 flex flex-row justify-between items-center"
        onPress={onPress}
      >
        <View className="flex flex-row items-center">
          {LeftIcon && leftIconName && (
            <LeftIcon name={leftIconName} size={25} color={color ? color: "green"} />
          )}
          <View className="px-5">
            <Text className="text-black text-xl font-bold" numberOfLines={1}>
              {title}
            </Text>
            <Text className="text-md font-JakartaSemiBold mt-1 text-[#858585]" numberOfLines={1}>
              {description}
            </Text>
          </View>
        </View>
        {RightIcon && rightIconName && (
          <RightIcon name={rightIconName} size={25} color="grey" />
        )}
      </Pressable>
    );
  };
  
  export default ProfileCard