import { View, Text, ScrollView, Image, ImageBackground } from "react-native";

export default function Obliques() {
  return (
    <ImageBackground
      source={require("../../assets/images/bg-image/img5.jpg")}
      className="flex-1 relative"
    >
      <View className="absolute inset-0 bg-black/40 bg-opacity-20" />
      <ScrollView className="flex-1 px-4 py-6">
        <View className="items-center">
          <Text className="text-5xl font-bold text-white text-center shadow-lg my-8">
            Obliques
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Russian Twist
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Intermediate
          </Text>
          <Image
            source={require("../../assets/images/workout/male-dumbbell-russian-twist-front.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/workout/male-dumbbell-russian-twist-side.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Text className="text-white text-lg mb-4">
            1. Sit on the floor and flex your knees and hips to a 90 degree
            angle.
          </Text>
          <Text className="text-white text-lg mb-4">
            2. Your feet should be hovering off the ground. (If that's too hard
            start with heels on the floor)
          </Text>
          <Text className="text-white text-lg mb-4">
            3. Rotate your upper spine to engage your obliques.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
