import { View, Text, ScrollView, Image, ImageBackground } from "react-native";

export default function Abdominals() {
  return (
    <ImageBackground
      source={require("../../assets/images/bg-image/img5.jpg")}
      className="flex-1 relative"
    >
      <View className="absolute inset-0 bg-black/40 bg-opacity-20" />
      <ScrollView className="flex-1 px-4 py-6">
        <View className="items-center">
          <Text className="text-5xl font-bold text-white text-center shadow-lg my-8">
            Abdominals
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Crunches
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Beginner
          </Text>
          <Image
            source={require("../../assets/images/workout/male-bodyweight-crunch-front.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/workout/male-bodyweight-crunch-side.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Text className="text-white text-lg mb-4">
            1. Lay flat on your back with your knees bent and your feet flat on
            the ground, about a foot from your lower back.
          </Text>
          <Text className="text-white text-lg mb-4">
            2. Place your fingertips on your temples with your palms facing out.
          </Text>
          <Text className="text-white text-lg mb-4">
            3. Draw your belly into the base of your spine to engage the
            muscles, then raise your head and shoulders off the floor. Return to
            starting position and repeat.
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Leg Raises
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Beginner
          </Text>
          <Image
            source={require("../../assets/images/workout/male-bodyweight-leg-raises-front.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/workout/male-bodyweight-leg-raises-side.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Text className="text-white text-lg mb-4">
            1. Lay on your back with your arms palms down on either side.
          </Text>
          <Text className="text-white text-lg mb-4">
            2. Keep your legs together and as straight as possible.
          </Text>
          <Text className="text-white text-lg mb-4">
            3. Slowly raise your legs to a 90° angle, pause at this position, or
            as high as you can reach your legs, and then slowly lower your legs
            back down.
          </Text>
          <Text className="text-white text-lg mb-4">
            4. Duration of these movements should be slow so that you do not
            utilize momentum, enabling you to get the most out of the exercise.
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-2xl font-bold text-white text-center shadow-md mb-4">
            Plank
          </Text>
          <Text className="text-xl font-semibold text-white text-center shadow-md mb-4">
            Difficulty: Beginner
          </Text>
          <Image
            source={require("../../assets/images/workout/male-bodyweight-forearm-plank-front.gif")}
            className="w-full h-64 mb-4 border-4 border-pink-700"
            resizeMode="contain"
          />
          <Text className="text-white text-lg mb-4">
            1. Place forearms on the ground with your elbows bent at a 90° angle
            aligned beneath your shoulders, with your arms parallel at
            shoulder-width.
          </Text>
          <Text className="text-white text-lg mb-4">
            2. Your feet should be together, with only your toes touching the
            floor.
          </Text>
          <Text className="text-white text-lg mb-4">
            3. Lift your belly off the floor and form a straight line from your
            heels to the crown of your head and hold.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
