import React from "react"
import { SafeAreaView, ScrollView, Text, View } from "react-native"
import Flatcard from "./Components/Flatcard"
import ElevatedCard from "./Components/ElevatedCard"

const App = ()=> {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcard />
        <ElevatedCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App