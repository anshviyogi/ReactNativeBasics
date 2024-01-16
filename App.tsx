import React from "react"
import { SafeAreaView, ScrollView, Text, View } from "react-native"
import Flatcard from "./Components/Flatcard"
import ElevatedCard from "./Components/ElevatedCard"
import FancyCard from "./Components/FancyCard"
import ActionCard from "./Components/ActionCard"

const App = ()=> {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcard />
        <ElevatedCard/>
        <FancyCard isTitle={true} title={"A city of Love"} location={"Delhi, India"} time={"1hr ago"} />
        <FancyCard isTitle={false} title={"Explore the fun"} location={"Mumbai, India"} time={"30min ago"} />
        <FancyCard isTitle={false} title={"Childish Mode"} location={"Bareilly, India"} time={"1min ago"} />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App