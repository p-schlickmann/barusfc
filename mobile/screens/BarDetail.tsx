import React from "react";
import { Dimensions, Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Detalhes">;

const BarDetail = ({ route }: Props) => {
    const { bar } = route.params;
    console.log(bar);
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>{bar.name}</Text>
                <Text>Horário de Funcionamento: {bar.opening_time}</Text>
                <Pressable
                    onPress={() => Linking.openURL(bar.location_link)}
                    style={styles.seeButton}
                >
                    <Text>Ver endereço</Text>
                </Pressable>
                <Text
                    style={[styles.title, { marginTop: 40, marginBottom: 10 }]}
                >
                    Cardápio:
                </Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {bar.menu.map((food) => {
                        return (
                            <View key={food.food_name} style={styles.listItem}>
                                <Text>
                                    {food.food_name} - R${food.price}
                                </Text>
                            </View>
                        );
                    })}
                </ScrollView>
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
    seeButton: {
        marginTop: 20,
        backgroundColor: "#aeaeae",
        padding: 10,
        borderRadius: 10,
    },
});

export default BarDetail;
