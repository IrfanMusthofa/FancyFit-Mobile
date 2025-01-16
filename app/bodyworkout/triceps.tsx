import { View, Text, ScrollView, Image, ImageBackground } from "react-native";

export default function Triceps() {
  return (
    <ImageBackground
      source={require("../../assets/images/bg-image/img5.jpg")}
      className="flex-1 relative"
    >
      <View className="absolute inset-0 bg-black/40 bg-opacity-20" />
      <ScrollView className="flex-1 px-4 py-6">
        <View className="items-center">
          <Text className="text-5xl font-bold text-white text-center shadow-lg my-8">
            Triceps
          </Text>
        </View>
        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Seated Overhead Triceps Extension
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Intermediate
          </Text>
          <View className="flex flex-row justify-center gap-4 mb-4">
            <Image
              source={require("../../assets/images/workout/male-dumbbell-overhead-tricep-extension-front.gif")}
              className="w-1/2 h-64 border-4 border-pink-700"
              resizeMode="contain"
            />
            <Image
              source={require("../../assets/images/workout/male-dumbbell-overhead-tricep-extension-side.gif")}
              className="w-1/2 h-64 border-4 border-pink-700"
              resizeMode="contain"
            />
          </View>
          <Text className="text-white text-lg mb-4">
            1. Sit on the bench and hold a dumbbell with both hands. Raise the
            dumbbell overhead at arms length, holding the weight up with the
            palms of your hands.
          </Text>
          <Text className="text-white text-lg mb-4">
            2. Keep your elbows in while you lower the weight behind your head,
            your upper arms stationary.
          </Text>
          <Text className="text-white text-lg mb-4">
            3. Raise the weight back to starting position.
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Laying Triceps Extension
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Intermediate
          </Text>
          <View className="flex flex-row justify-center gap-4 mb-4">
            <Image
              source={require("../../assets/images/workout/male-barbell-laying-tricep-extensions-front.gif")}
              className="w-1/2 h-64 border-4 border-pink-700"
              resizeMode="contain"
            />
            <Image
              source={require("../../assets/images/workout/male-barbell-laying-tricep-extensions-side.gif")}
              className="w-1/2 h-64 border-4 border-pink-700"
              resizeMode="contain"
            />
          </View>
          <Text className="text-white text-lg mb-4">
            1. Lay on a flat bench while holding a barbell with a shoulder-width
            grip.
          </Text>
          <Text className="text-white text-lg mb-4">
            2. Fully extend your elbows until the barbell is directly over your
            chest.
          </Text>
          <Text className="text-white text-lg mb-4">
            3. Begin to flex your elbows and allow the barbell to nearly touch
            your forehead.
          </Text>
          <Text className="text-white text-lg mb-4">
            4. Extend your elbows back to the starting position and repeat.
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Barbell SkullCrusher
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Intermediate
          </Text>
          <View className="flex flex-row justify-center gap-4 mb-4">
            <Image
              source={require("../../assets/images/workout/male-barbell-skullcrusher-front_qpHWUa8.gif")}
              className="w-1/2 h-64 border-4 border-pink-700"
              resizeMode="contain"
            />
            <Image
              source={require("../../assets/images/workout/male-barbell-skullcrusher-side_B7Z6225.gif")}
              className="w-1/2 h-64 border-4 border-pink-700"
              resizeMode="contain"
            />
          </View>
          <Text className="text-white text-lg mb-4">
            1. Take a shoulder width grip. Break at the elbows. Try to keep your
            elbows tucked in. Don't let them flare out.
          </Text>
          <Text className="text-white text-lg mb-4">
            2. Stop the bar a few inches from your forehead and extend your
            elbows back up.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
