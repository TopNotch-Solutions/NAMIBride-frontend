import { Text, View } from "react-native";
import "../global.css";

import { TitleProps } from "@/types/type";

const CustomTitle = ({ title, className, ...props }: TitleProps) => {
  return (
    <View className="flex flex-row items-center justify-center w-full mt-2">
      <Text className="text-black text-4xl font-bold text-center mx-10">
        {title}
      </Text>
    </View>
  );
};

export default CustomTitle;
