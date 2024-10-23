import { Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import Boat from "./components/Boats";
import Icon from "react-native-vector-icons/FontAwesome6";

// App component
const App = () => {
    return (
        <View>
            <Text></Text>
            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', margin: 15 }}>
                GetABoat - For Sale
            </Text>
            <ScrollView>
                <Boat
                    name="Sea Ray 500 Sundancer"
                    description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                    poster={require("./img/sea_ray.jpg")}
                    icon_name="sailboat"
                />
                <Boat
                    name="Four Winns Horizon 180"
                    description="A sporty look and refined details truly set the Horizon 180 above all others."
                    poster={require("./img/four_winns.jpg")}
                    icon_name="sailboat"
                />
                <Boat
                    name="Flipper 640 ST"
                    description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                    poster={require("./img/flipper.jpg")}
                    icon_name="sailboat"
                />
                <Boat
                    name="Princess V48"
                    description="A modern take on the classic, traditional hardtop and perfect for a family picnic. There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate-controlled interior."
                    poster={require("./img/princess.jpg")}
                    icon_name="sailboat"
                />
                <Boat
                    name="Bayliner 175 Bowrider"
                    description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                    poster={require("./img/bayliner.jpg")}
                    icon_name="sailboat"
                />
                <Boat
                    name="Fairline Targa 47"
                    description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                    poster={require("./img/fairline.jpg")}
                    icon_name="sailboat"
                />
            </ScrollView>
        </View>
    );
};

export default App;
