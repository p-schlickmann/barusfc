import React from 'react'
import {Text, View} from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";


type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {

    return (
        <SafeAreaView>
            <Text onPress={() => navigation.navigate('BarDetail')}>
                Home
            </Text>
        </SafeAreaView>
    )
}

export default Home