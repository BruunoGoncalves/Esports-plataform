import {View, TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType} from 'react-native';
import { styles } from './styles';

export interface GameCardprops {
    id: string;
    name:string;
    ads:string;
    cover: ImageSourcePropType;
}

interface Props extends TouchableOpacityProps{
    data: GameCardprops;
}

export function GameCard({data, ...rest}: Props){
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <ImageBackground source={data.cover} style={styles.cover}/>
        </TouchableOpacity>
    );
}