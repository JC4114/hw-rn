import React from "react";
import { View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 17,
          lineHeight: 22,
          fontFamily: "Roboto-Medium",
        },
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Posts") {
            return <SimpleLineIcons name="grid" size={size} color={color} />;
          } else if (route.name === "Create") {
            return <Fontisto name="plus-a" size={size} color={color} />;
          } else if (route.name === "Profile") {
            return <Feather name="user" size={size} color={color} />;
          }
        },
        tabBarShowLabel: false,
      })}
    >
      <Tabs.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={{ width: 24, marginRight: 10 }}
              onPress={() => {}}
              activeOpacity={0.8}
            >
              <MaterialIcons name="logout" size={24} color="#bdbdbd" />
            </TouchableOpacity>
          ),
          tabBarIcon: () => (
            <SimpleLineIcons name="grid" size={24} color="#bdbdbd" />
          ),
          tabBarShowLabel: false,
        }}
        name="Публікації"
        component={PostsScreen}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: () => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 70,
                height: 40,
                backgroundColor: "#FF6C00",
                borderRadius: 20,
              }}
            >
              <Fontisto name="plus-a" size={24} color="#fff" />
            </View>
          ),
          tabBarShowLabel: false,
        }}
        name="Створити публікацію"
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: () => <Feather name="user" size={24} color="#bdbdbd" />,
          tabBarShowLabel: false,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

export default Home;
