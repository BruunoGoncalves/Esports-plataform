import {View, Image} from 'react-native';
import {styles} from './styles';
import logoImg from '../../assets/games/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';

export function Home(){
    return(
        <View style={styles.container}>
            <Image source={logoImg} style={styles.logo} />

            <Heading title="Encontre o seu duo" subtitle="Seleciona o game que deseja jogar"/>
        </View>
    );
}