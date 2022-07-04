import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
// @ts-ignore
import mapMarker from "../assets/map-marker.png";

type Props = NativeStackScreenProps<RootStackParamList, "Detalhes">;

const BarDetail = ({ route }: Props) => {
    const { bar } = route.params;

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>{bar.name}</Text>
                <Text>Endereço: {bar.address}</Text>
                <Text>Horário de Funcionamento: {bar.openingTime}</Text>
                <Text
                    style={[styles.title, { marginTop: 40, marginBottom: 10 }]}
                >
                    Cardápio:
                </Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {bar.menu.map((food) => {
                        return (
                            <View key={food.foodName} style={styles.listItem}>
                                <Text>
                                    {food.foodName} - R${food.price}
                                </Text>
                            </View>
                        );
                    })}
                </ScrollView>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={{
                        latitude: -16.7411414,
                        longitude: -49.351167,
                        latitudeDelta: 0.008,
                        longitudeDelta: 0.008,
                    }}
                >
                    <Marker
                        icon={mapMarker}
                        coordinate={{
                            latitude: -16.7411414,
                            longitude: -49.351167,
                        }}
                    >
                    </Marker>
                </MapView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        alignItems: "flex-start",
    },
    listItem: {
        marginBottom: 20,
        backgroundColor: "#aeaeae",
        padding: 15,
        borderRadius: 10,
        borderTopLeftRadius: 0,
        width: 300,
        borderLeftWidth: 4,
        borderLeftColor: "black",
    },
    bigTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    text: {
        fontSize: 15,
    },
    map: {
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
    },

    calloutContainer: {
        width: 160,
        height: 46,
        paddingHorizontal: 16,
        backgroundColor: "rgba(255, 255, 255, 0.90)",
        borderRadius: 16,
        justifyContent: "center",
    },

    calloutText: {
        fontFamily: "nunito700",
        color: "#0089a5",
        fontSize: 14,
    },
});

export default BarDetail;
