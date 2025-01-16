import React from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import { Link } from "expo-router";

const workoutsData = [
  "Abdominals",
  "Biceps",
  "Calves",
  "Chest",
  "Forearms",
  "Glutes",
  "Harmstrings",
  "Triceps",
];

const workoutPages = [
  "abdominals",
  "biceps",
  "calves",
  "chest",
  "forearms",
  "glutes",
  "hamstrings",
  "triceps",
];

export default function Workouts() {
  return (
    <ImageBackground
      source={require("../../assets/images/bg-image/img4.jpg")}
      className="flex-1 justify-center"
    >
      <ScrollView className="flex-1 px-4 py-6">
        <Text className="text-4xl font-bold drop-shadow-lg text-primary-500 text-center mb-4">
          Available Workouts
        </Text>
        <View className="flex flex-wrap flex-row justify-center gap-4">
          {workoutsData.map((workout, index) => (
            <Link
              key={index}
              href={`../bodyworkout/${workoutPages[index]}`}
              className="bg-white/90 p-4 rounded-lg shadow-md w-40 h-40 flex justify-center items-center backdrop-blur-md"
            >
              <Text className="text-primary-500 text-xl font-semibold text-center">
                {workout}
              </Text>
            </Link>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
