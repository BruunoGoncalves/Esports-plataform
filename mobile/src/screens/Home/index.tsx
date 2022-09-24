import React from 'react';
import { Image, FlatList} from 'react-native';
import {styles} from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GameCard, GameCardprops } from '../../components/GameCard';
import {useEffect, useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { Background } from '../../components/Background';
import {useNavigation} from '@react-navigation/native'

export function Home(){
    const [games, setGames] = useState<GameCardprops[]>([]);

    const navigation = useNavigation();

    function handleOpenGame({id, title, bannerUrl}: GameCardprops){
        navigation.navigate('game',{id, title, bannerUrl});
    }

    useEffect(() => {
        fetch('http://192.168.0.8:3333/games')
        .then(response => response.json())
        .then(data => setGames(data))
    },[])

    return(
        <Background>
            <SafeAreaView style={styles.container}>
                <Image source={logoImg}
                        style={styles.logo}
                />

                <Heading title="Encontre o seu duo" 
                        subtitle="Seleciona o game que deseja jogar"
                />

                <FlatList data={games} 
                            keyExtractor={item => item.id} 
                            renderItem={({item}) => (
                                                        <GameCard data={item} onPress={() => handleOpenGame(item)} />
                                                    )
                                        } 
                            horizontal showsVerticalScrollIndicator={false}
                />
                
            </SafeAreaView>
        </Background>
    );
}