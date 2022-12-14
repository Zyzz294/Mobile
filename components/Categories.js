import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}

        >
            {/* CategoryCard */}
            <CategoryCard imgUrl="https://teknohocam.com/wp-content/uploads/2022/11/maxresdefault-46.jpg" title="test1 " />
            <CategoryCard imgUrl="https://teknohocam.com/wp-content/uploads/2022/11/maxresdefault-46.jpg" title="test2 " />
            <CategoryCard imgUrl="https://teknohocam.com/wp-content/uploads/2022/11/maxresdefault-46.jpg" title=" test3" />
        </ScrollView>
    )
}

export default Categories