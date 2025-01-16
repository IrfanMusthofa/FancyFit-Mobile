import { View, Text, ScrollView, Image, ImageBackground } from "react-native";

export default function LowerBack() {
  return (
    <ImageBackground
      source={require("../../assets/images/bg-image/img5.jpg")}
      className="flex-1 relative"
    >
      <View className="absolute inset-0 bg-black/40 bg-opacity-20" />
      <ScrollView className="flex-1 px-4 py-6">
        <View className="items-center">
          <Text className="text-5xl font-bold text-white text-center shadow-lg my-8">
            Lower Back
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Deadlift
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Advanced
          </Text>
          <Image
            source={require("../../assets/images/workout/male-barbell-deadlift-front.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/workout/male-barbell-deadlift-side.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Text className="text-white text-lg mb-4">
            1. Stand with your mid-foot under the bar and grip the bar with your
            hands, about shoulder width apart.
          </Text>
          <Text className="text-white text-lg mb-4">
            2. Bend your knees, then lift the bar by straightening your back. It
            is important to keep your back straight.
          </Text>
          <Text className="text-white text-lg mb-4">
            3. Stand to your full height and hold.
          </Text>
          <Text className="text-white text-lg mb-4">
            4. Lower the bar to the floor by bending your knees and keeping your
            back straight.
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Sumo Deadlift
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Intermediate
          </Text>
          <Image
            source={require("../../assets/images/workout/male-barbell-sumo-deadlift-front_aeM2BqT.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/workout/male-barbell-sumo-deadlift-side_av3A2PM.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Text className="text-white text-lg mb-4">
            1. Stance width can vary with a sumo DL. Some prefer toes near the
            plates. Others prefer a more narrow stance to get more drive off the
            floor.
          </Text>
          <Text className="text-white text-lg mb-4">
            2. Make sure your arms are inside your legs. The bar should be just
            over your mid-foot. Flatten your back and push your heels into the
            floor.
          </Text>
          <Text className="text-white text-lg mb-4">
            3. Try to extend your knees and hips simultaneously.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
