import {Image, Text, View} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome6";

const Boat = ({ name, description, icon_name, poster }) => {
    return (
        <View>
            <Icon name={icon_name} size={20}><Text>{name}</Text></Icon>
            <Text>{description}</Text>
            <Image source={poster} style={{ width: 400, height: 500 }} />
        </View>
    );
};

export default Boat;
