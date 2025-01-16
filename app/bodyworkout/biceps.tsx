import { View, Text, ScrollView, Image, ImageBackground } from "react-native";

export default function Biceps() {
  return (
    <ImageBackground
      source={require("../../assets/images/bg-image/img5.jpg")}
      className="flex-1 relative"
    >
      <View className="absolute inset-0 bg-black/40 bg-opacity-20" />
      <ScrollView className="flex-1 px-4 py-6">
        <View className="items-center">
          <Text className="text-5xl font-bold text-white text-center shadow-lg my-8">
            Biceps
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Chin Ups
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Intermediate
          </Text>
          <Image
            source={require("../../assets/images/workout/male-bodyweight-chinup-front.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/workout/male-bodyweight-chinup-side.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Text className="text-white text-lg mb-4">
            1. Grab the bar shoulder width apart with a supinated grip (palms
            facing you).
          </Text>
          <Text className="text-white text-lg mb-4">
            2. With your body hanging and arms fully extended, pull yourself up
            until your chin is past the bar.
          </Text>
          <Text className="text-white text-lg mb-4">
            3. Slowly return to starting position. Repeat.
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Dumbbells Curl
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Beginner
          </Text>
          <Image
            source={require("../../assets/images/workout/male-dumbbell-curl-front.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/workout/male-dumbbell-curl-side.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Text className="text-white text-lg mb-4">
            1. Stand up straight with a dumbbell in each hand at arm's length.
          </Text>
          <Text className="text-white text-lg mb-4">
            2. Raise one dumbbell and twist your forearm until it is vertical
            and your palm faces the shoulder.
          </Text>
          <Text className="text-white text-lg mb-4">
            3. Lower to original position and repeat with opposite arm.
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Dumbbells Hammer Curls
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Beginner
          </Text>
          <Image
            source={require("../../assets/images/workout/male-dumbbell-hammer-curl-front_JbvhNLU.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/workout/male-dumbbell-hammer-curl-side_io6oHN7.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Text className="text-white text-lg mb-4">
            1. Hold the dumbbells with a neutral grip (thumbs facing the
            ceiling).
          </Text>
          <Text className="text-white text-lg mb-4">
            2. Slowly lift the dumbbell up to chest height.
          </Text>
          <Text className="text-white text-lg mb-4">
            3. Return to starting position and repeat.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
