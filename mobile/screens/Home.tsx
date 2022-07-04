import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootStackParamList, "Inicio">;

export interface barI {
    id: number;
    name: string;
    address: string;
    openingTime: string;
    menu: [
        {
            foodName: string;
            price: number;
        }
    ];
    locationLink: string;
}

const bars = [
    {
        id: 1,
        name: "Container Bar Carvoeira",
        address: "Carvoeira, Florianopolis.",
        openingTime: "18h-00h",
        menu: [
            {
                foodName: "Risoto",
                price: 30,
            },
            {
                foodName: "Bolacha",
                price: 5,
            },
        ],
        locationLink: "https://g.page/CTNRBAR?share",
    },
    {
        id: 2,
        name: "Container Bar Pantanal",
        address: "Pantanal, Florianopolis.",
        openingTime: "18h-00h",
        menu: [
            {
                foodName: "Marisco",
                price: 30,
            },
            {
                foodName: "Bolacha",
                price: 5,
            },
        ],
        locationLink: "https://goo.gl/maps/tGyCfDqJTY68Gpn47",
    },
    {
        id: 3,
        name: "Meu Escritorio Bar",
        address: "Pantanal, Florianopolis.",
        openingTime: "18h-00h",
        menu: [
            {
                foodName: "Bacalhau",
                price: 30,
            },
            {
                foodName: "Bolacha",
                price: 5,
            },
        ],
        locationLink: "https://goo.gl/maps/g1GdGAht56pff3ZBA",
    },
];

const Home = ({ navigation }: Props) => {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text style={styles.barTitle}>BARUFSC</Text>
                    {bars.map((bar: any) => {
                        return (
                            <Pressable
                                style={styles.listItem}
                                key={bar.id}
                                onPress={() =>
                                    navigation.navigate("Detalhes", {
                                        bar: bar,
                                    })
                                }
                            >
                                <View style={styles.titleContainer}>
                                    <Text style={styles.title}>{bar.name}</Text>
                                    <Text style={styles.text}>
                                        {bar.openingTime}
                                    </Text>
                                </View>
                                <Text style={styles.text}>{bar.address}</Text>
                            </Pressable>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
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
    barTitle: {
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
});

export default Home;
