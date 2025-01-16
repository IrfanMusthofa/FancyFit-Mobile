import { Text, View, ImageBackground } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <ImageBackground
      source={require("../assets/images/bg-image/img2.jpg")}
      className="flex-1 justify-center"
    >
      <View className="flex-1 justify-center items-center px-4">
        <Text className="text-4xl font-bold text-white text-center shadow-lg mb-4">
          Stay Fancy, Stay Fit!
        </Text>
        <Text className="text-lg font-semibold text-white text-center shadow-md mb-8">
          Get fit with our workout programs and tools!
        </Text>
        <Link
          href="/bodymap/bodymaplist"
          className="flex-center w-1/2 h-1/8 rounded-3xl bg-primary-100 px-4 py-2 font-bold text-white focus:outline-none"
        >
          <Text className="text-center">Get Fit!</Text>
        </Link>
      </View>
    </ImageBackground>
  );
}
