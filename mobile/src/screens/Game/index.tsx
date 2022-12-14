import {SafeAreaView} from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import {styles} from './styles';
import { useRoute } from '@react-navigation/native'
import { GameParams } from '../../@types/navigation';



export function Game(){
    const route = useRoute();
    const game = route.params as GameParams;

    return(
        <Background>
            <SafeAreaView>
                
            </SafeAreaView>
        </Background>
    );
}
