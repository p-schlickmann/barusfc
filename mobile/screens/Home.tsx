import React from 'react'
import {Text, View} from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";


type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

interface barI {
    id: number,
    name: string
}

const bars = [
    {id: 1, name: 'Container'},
    {id: 2, name: 'Container 2'},
    {id: 3, name: 'Meu escritorio'},
]

const Home = ({ navigation }: Props) => {

    return (
        <SafeAreaView>
            {bars.map((bar: barI) => {
                return (
                    <Text style={{marginVertical: 10}} key={bar.id} onPress={() => navigation.navigate('BarDetail', {barId: bar.id})}>
                        {bar.name}
                    </Text>
                )
            })}
        </SafeAreaView>
    )
}

export default Home