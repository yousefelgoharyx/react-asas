import React from 'react'
import {AppLayout, View, VStack, Scroll} from 'react-ui'
const App = () => {
    return (
        <AppLayout>
            <View style={{backgroundColor: "#111"}}>
                Navbar
            </View>
            <Scroll>
                <VStack gap={16} padding={32}>
                    <View style={{backgroundColor: "#222", height: 200}}>Hello boy</View>
                    <View style={{backgroundColor: "#222", height: 200}}>Hello boy</View>
                    <View style={{backgroundColor: "#222", height: 200}}>Hello boy</View>
                    <View style={{backgroundColor: "#222", height: 200}}>Hello boy</View>
                    <View style={{backgroundColor: "#222", height: 200}}>Hello boy</View>
                    <View style={{backgroundColor: "#222", height: 200}}>Hello boy</View>
                    <View style={{backgroundColor: "#222", height: 200}}>Hello boy</View>
                    <View style={{backgroundColor: "#222", height: 200}}>Hello boy</View>
                    <View style={{backgroundColor: "#222", height: 200}}>Hello boy</View>
                    <View style={{backgroundColor: "#222", height: 200}}>Hello boy</View>
                </VStack>
            </Scroll>
            <View style={{backgroundColor: "#444"}}>
                Bottom Navigation
            </View>
        </AppLayout>
    )
}

export default App
