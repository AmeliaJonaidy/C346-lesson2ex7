import { Image, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome6";

const Boat = ({ name, description, icon_name, poster }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={icon_name} size={30} />
                <Text style={{ fontSize: 24, color: 'blue', marginLeft: 8 }}>{name}</Text>
            </View>
            <Text style={{ fontSize: 15,color: 'red' }}>{description}</Text>
            <Image source={poster} style={{ width: 400, height: 500 }} />
            <Text></Text>
            <Text></Text>
        </View>
    );
};

export default Boat;
