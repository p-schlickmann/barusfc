import React from 'react'
import {Text, View} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, 'BarDetail'>;


const BarDetail = ({ route }: Props) => {

    const {barId} = route.params

    return (
        <SafeAreaView>
            <Text>
                Detalhe do bar {barId}
            </Text>
        </SafeAreaView>
    )
}

export default BarDetail