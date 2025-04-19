import { Text, View } from "react-native";
import "../global.css";

import { TitleProps } from "@/types/type";

const CustomSubTitle = ({ title, className, ...props }: TitleProps) => {
  return (
    <Text className="text-md font-JakartaSemiBold ml-5 mt-3 text-[#858585]">
      {title}
    </Text>
  );
};

export default CustomSubTitle;
