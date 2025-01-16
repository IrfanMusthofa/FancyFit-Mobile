import { View, Text, ScrollView, Image, ImageBackground } from "react-native";

export default function Calves() {
  return (
    <ImageBackground
      source={require("../../assets/images/bg-image/img5.jpg")}
      className="flex-1 relative"
    >
      <View className="absolute inset-0 bg-black/40 bg-opacity-20" />
      <ScrollView className="flex-1 px-4 py-6">
        <View className="items-center">
          <Text className="text-5xl font-bold text-white text-center shadow-lg my-8">
            Calves
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Calf Raises
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Beginner
          </Text>
          <Image
            source={require("../../assets/images/workout/male-bodyweight-calve-raise-front.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/workout/male-bodyweight-calve-raise-side.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Text className="text-white text-lg mb-4">
            1. Balance on the balls of your feet on the platform or plates,
            leaning forward to use the wall to assist with balance.
          </Text>
          <Text className="text-white text-lg mb-4">
            2. Lower the heels of your feet towards the ground and pause, then
            push through the balls of your feet like you are standing tip toe,
            pausing at the apex of the motion.
          </Text>
          <Text className="text-white text-lg mb-4">
            3. Repeat as necessary.
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Dumbbells Calf Raises
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Beginner
          </Text>
          <Image
            source={require("../../assets/images/workout/male-dumbbell-calf-raise-front.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/workout/male-dumbbell-calf-raise-side.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Text className="text-white text-lg mb-4">
            1. Stand tall with your feet on the ground. You can put the balls of
            your feet on top of a plate to extend the range of motion.
          </Text>
          <Text className="text-white text-lg mb-4">
            2. Imagine you have a string attached to your heels and pull your
            heels up toward the ceiling.
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Barbell Calf Raises
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Intermediate
          </Text>
          <Image
            source={require("../../assets/images/workout/male-barbell-calve-raise-front.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/workout/male-barbell-calve-raise-side.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Text className="text-white text-lg mb-4">
            1. Place the bar on your back.
          </Text>
          <Text className="text-white text-lg mb-4">
            2. Start with feet flat on the ground.
          </Text>
          <Text className="text-white text-lg mb-4">
            3. Extend your heels upwards while keeping your knees stationary,
            and pause at the contracted position.
          </Text>
          <Text className="text-white text-lg mb-4">
            4. Slowly return to the starting position. Repeat.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
