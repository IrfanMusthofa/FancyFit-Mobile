import { View, Text, ScrollView, Image, ImageBackground } from "react-native";

export default function Traps() {
  return (
    <ImageBackground
      source={require("../../assets/images/bg-image/img5.jpg")}
      className="flex-1 relative"
    >
      <View className="absolute inset-0 bg-black/40 bg-opacity-20" />
      <ScrollView className="flex-1 px-4 py-6">
        <View className="items-center">
          <Text className="text-5xl font-bold text-white text-center shadow-lg my-8">
            Traps
          </Text>
        </View>
        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Dumbbells Shrugs
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Beginner
          </Text>

          <Image
            source={require("../../assets/images/workout/male-dumbbell-shrug-front.gif")}
            className="w-full mb-4 h-64 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/workout/male-dumbbell-shrug-side.gif")}
            className="w-full mb-4 h-64 border-4 border-pink-700"
            resizeMode="contain"
          />
        </View>
        <Text className="text-white text-lg mb-4">
          1. Stand tall with two dumbbells. Pull your shoulder blades up. Give a
          one second squeeze at the top.
        </Text>

        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Dumbbells Seated Shrugs
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Beginner
          </Text>
          <Image
            source={require("../../assets/images/workout/male-dumbbell-seated-shrug-front.gif")}
            className="w-full mb-4 h-64 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/workout/male-dumbbell-seated-shrug-side.gif")}
            className="w-full mb-4 h-64 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Text className="text-white text-lg mb-4">
            1. Sit on a bench with dumbbells in both hands, palms facing your
            body, back straight.
          </Text>
          <Text className="text-white text-lg mb-4">
            2. Elevate your shoulders and hold the contracted position at the
            apex of the motion.
          </Text>
          <Text className="text-white text-lg mb-4">
            3. Slowly lower your shoulders back to starting position.
          </Text>
        </View>
        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Barbell Upright Row
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Advanced
          </Text>

          <Image
            source={require("../../assets/images/workout/male-barbell-upright-row-front_3ROsKgm.gif")}
            className="w-full mb-4 h-64 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/workout/male-barbell-upright-row-side_NBzD3il.gif")}
            className="w-full mb-4 h-64 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Text className="text-white text-lg mb-4">
            1. Take a double overhand roughly shoulder width grip.
          </Text>
          <Text className="text-white text-lg mb-4">
            2. Pull your elbows straight up the ceiling. Aim to get the bar to
            chin level or slightly higher.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
