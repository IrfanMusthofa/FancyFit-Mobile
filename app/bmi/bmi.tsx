import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
} from "react-native";

const BmiCalculator = () => {
  const [height, setHeight] = useState(""); // Height in centimeters
  const [weight, setWeight] = useState(""); // Weight in kilograms
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const [error, setError] = useState("");

  const calculateBmi = () => {
    Keyboard.dismiss();
    if (!height || !weight) {
      setError("Please enter both height and weight.");
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    if (heightInMeters <= 0) {
      setError("Height must be a positive number.");
      return;
    }

    const weightInKg = parseFloat(weight);
    if (weightInKg <= 0) {
      setError("Weight must be a positive number.");
      return;
    }

    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBmi(parseFloat(bmiValue.toFixed(1)));
    setError("");

    if (bmiValue < 18.5) {
      setBmiCategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setBmiCategory("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setBmiCategory("Overweight");
    } else {
      setBmiCategory("Obesity");
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/bg-image/img2.jpg")}
      className="flex-1 justify-center"
    >
      <View className="flex flex-col items-center justify-center rounded-lg bg-white/80 shadow-rose backdrop-blur-md p-8 mx-8">
        <Text className="text-2xl font-bold color-primary-100 mb-5">
          BMI Calculator
        </Text>
        <View className="w-full space-y-4">
          <View className="flex flex-col gap-2">
            <Text className="font-medium">Height (cm)</Text>
            <TextInput
              className="w-full p-3 border border-primary-100 color-slate-700 rounded"
              placeholder="Enter height in cm"
              placeholderTextColor="grey"
              keyboardType="numeric"
              value={height}
              onChangeText={setHeight}
            />
          </View>
          <View className="flex flex-col mt-4 gap-2">
            <Text className="font-medium">Weight (kg)</Text>
            <TextInput
              className="w-full p-3 border border-primary-100 rounded"
              placeholder="Enter weight in kg"
              placeholderTextColor="grey"
              keyboardType="numeric"
              value={weight}
              onChangeText={setWeight}
            />
          </View>
          <TouchableOpacity
            className="w-full mt-8 bg-primary-100 py-3 rounded-full items-center"
            onPress={calculateBmi}
          >
            <Text className="text-white font-bold">Calculate BMI</Text>
          </TouchableOpacity>
          {error && (
            <Text className="text-red-500 text-center mt-2">{error}</Text>
          )}
          {bmi && (
            <View className="mt-5 text-center">
              <Text className="text-lg justify-center font-bold">
                Your BMI: {bmi}
              </Text>
              <Text className="text-lg justify-center">
                Category: {bmiCategory}
              </Text>
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

export default BmiCalculator;
