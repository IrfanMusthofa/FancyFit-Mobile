import { View, Text, ScrollView, Image, ImageBackground } from "react-native";

export default function Chest() {
  return (
    <ImageBackground
      source={require("../../assets/images/bg-image/img5.jpg")}
      className="flex-1 relative"
    >
      <View className="absolute inset-0 bg-black/40 bg-opacity-20" />
      <ScrollView className="flex-1 px-4 py-6">
        <View className="items-center">
          <Text className="text-5xl font-bold text-white text-center shadow-lg my-8">
            Chest
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Push Up
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Beginner
          </Text>
          <Image
            source={require("../../assets/images/workout/male-bodyweight-pushup-front.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/workout/male-bodyweight-pushup-side.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Text className="text-white text-lg mb-4">
            1. Place your hands firmly on the ground, directly under shoulders.
          </Text>
          <Text className="text-white text-lg mb-4">
            2. Flatten your back so your entire body is straight and slowly
            lower your body.
          </Text>
          <Text className="text-white text-lg mb-4">
            3. Draw shoulder blades back and down, keeping elbows tucked close
            to your body.
          </Text>
          <Text className="text-white text-lg mb-4">
            4. Exhale as you push back to the starting position.
          </Text>
        </View>
        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Dumbbells Incline Chest Flys
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Beginner
          </Text>
          <Image
            source={require("../../assets/images/workout/male-dumbbell-incline-chest-flys-front.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/workout/male-dumbbell-incline-chest-flys-side.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Text className="text-white text-lg mb-4">
            1. Lay flat on the bench and place your feet on the ground.
          </Text>
          <Text className="text-white text-lg mb-4">
            2. Begin the exercise with the dumbbells held together above your
            chest, elbows slightly bent.
          </Text>
          <Text className="text-white text-lg mb-4">
            3. Simultaneously lower the weights to either side.
          </Text>
          <Text className="text-white text-lg mb-4">
            4. Pause when the weights are parallel to the bench, then raise your
            arms to the starting position.
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Incline Dumbbells Bench Press
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Beginner
          </Text>
          <Image
            source={require("../../assets/images/workout/male-dumbbell-incline-bench-press-front.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/workout/male-dumbbell-incline-bench-press-side.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Text className="text-white text-lg mb-4">
            1. Raise the bench to a 30 - 45 degree angle.
          </Text>
          <Text className="text-white text-lg mb-4">
            2. Lay on the bench and set your feet on the ground.
          </Text>
          <Text className="text-white text-lg mb-4">
            3. Raise the dumbbells with straight arms then slowly lower them to
            about shoulder width.
          </Text>
          <Text className="text-white text-lg mb-4">
            4. Raise them again until your arms are locked and at the starting
            position again.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
