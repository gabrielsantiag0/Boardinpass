import { ImageBackground, View, Text } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import  QRCode  from 'react-native-qrcode-svg';
import Svg, { Line, Circle } from 'react-native-svg';


import { styles } from './style';
import { colors } from '@/Styles/colors';

import { Flitght } from '@/components/flitght';
import { Info } from '@/components/info';

export function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground 
      style={styles.header} 
      source={require("@/assets/fundo.jpg")}>

    <Text style={styles.title}>Cartão de embarque</Text>
    <Text style={styles.subTitle}>Falta 45 dias para sua viagem </Text>
      </ImageBackground>

      <View style={styles.ticket}>
      <View style={styles.content}>
      <View style={styles.flitght}>
        <Flitght label='São Paulo' value='GRU'/>
        <View style={styles.duration}>
          <Ionicons name="airplane-sharp" size={32} color={colors.black}/>
          <Text style={styles.hours}>9h 45m</Text>
        </View>


        <Flitght label='Nova York' value='JFK'/>
      </View>

    <Text style={styles.label}>Passageiro</Text>
    <Text style={styles.name}>Gabriel Santiago</Text>

    <View style={styles.details}>
      <View style={styles.inlile}>
      <Info label='Data' value='17 de nov.'/>
      <Info label='Embarque' value='17h25'/>
      </View>
    </View>
 
      </View>

    <View>
      <Svg height={20} width='100%'>
        <Line 
        x1='0%'
        y1='50%'
        x2='100%'
        y2='50%'
        stroke={colors.gray[400]}
        strokeWidth={2}
        strokeDasharray="5,5"
        />
        <Circle 
        r={8}
        cx='0%'
        cy='50%'
        fill={colors.black}
        />
        <Circle 
        r={8}
        cx='100%'
        cy='50%'
        fill={colors.black}
        />
      </Svg>
    </View>

    <View style={styles.footer}>
    <View style={styles.footerDetails}>
      <View style={styles.inlile}>
        <Info label='Voo' value='YZ 607'/>
        <Info label='Assento' value='29G'/>
      </View>
      <View style={styles.inlile}>
        <Info label='Terminal' value='03'/>
        <Info label='Portão' value='04'/>
      </View>

    </View>

    <QRCode value='boarding code' size={130}/>
    
    </View>
      </View>
    </View>
  );
}