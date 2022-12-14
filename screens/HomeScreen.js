import { View, Text, StyleSheet, SafeAreaView, Image, TextInputBase, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Icons from "react-native-heroicons/solid";
import { Modal } from 'react-native';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);




  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          className="h-7 w-7 bg-gray-300 rounded-full p-4"
          source={{ uri: "https://teknohocam.com/wp-content/uploads/2022/11/maxresdefault-46.jpg", }}
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">Current Location
          </Text>
        </View>
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 bg-gray-200 p-3">
          <Icons.MagnifyingGlassIcon />
          <TextInput
            placeholder="🔍 Resturants and Cuisines"
            keyboardType="default"

          />
        </View>
      </View>

      {/* Body */}
      <ScrollView className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,

        }}
      >
        {/* Categories */}
        <Categories />



        {/* Featured Rows */}
        <FeaturedRow
          title="Featured"
          description="Paid plac"
          featuredCategory="featured" />
          

      </ScrollView>
    </SafeAreaView>
  )
}


export default HomeScreen;
