import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useClerk } from "@clerk/clerk-react";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { useUser } from "@clerk/clerk-react";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function Home() {
  useWarmUpBrowser();
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    try {
      await signOut();
      // Redirect to your desired page
      Linking.openURL(Linking.createURL("/"));
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const { user } = useUser();
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" }),
        });

      // If sign in was successful, set the active session
      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp returned from startOAuthFlow
        // for next steps, such as MFA
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  }, []);

  return (
    <ImageBackground
      source={require("../assets/images/bg-image/img2.jpg")}
      className="flex-1 justify-center"
    >
      <View className="flex-1 justify-center items-center px-4">
        <Text className="text-4xl font-bold text-white text-center shadow-lg mb-4">
          Stay Fancy, Stay Fit!
        </Text>
        <Text className="text-lg font-semibold text-white text-center shadow-md mb-8">
          Get fit with our workout programs and tools!
        </Text>
        <Link
          href="/bodymap/bodymaplist"
          className="flex-center w-1/2 h-1/8 rounded-3xl bg-primary-100 px-4 py-2 font-bold text-white focus:outline-none"
        >
          <Text className="text-center">Get Fit!</Text>
        </Link>
        <Link
          href="/bmi/bmi"
          className="flex-center m-4 w-1/2 h-1/8 rounded-3xl bg-primary-500 px-4 py-2 font-bold text-white focus:outline-none"
        >
          <Text className="text-center">BMI Calculator</Text>
        </Link>

        {!user ? (
          <TouchableOpacity onPress={onPress}>
            <Text className="mt-64 text-center text-2xl bg-primary-500/50 p-6 rounded-2 text-white">
              Login with Google
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={async () => {
              try {
                await signOut();
                console.log("User logged out successfully.");
              } catch (error) {
                console.error("Error logging out:", error);
              }
            }}
          >
            <Text className="text-center text-4xl mt-16 p-6 rounded-2 text-white">
              Welcome, {user.fullName}!
            </Text>
            <Text className="mt-48 text-center text-2xl bg-primary-500/50 p-6 rounded-2 text-white">
              Logout
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
}
