import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import CalculatorScreen from './Screens/CalculatorScreen';
export default function App() {




  
  return (

   <View style={styles.calc}>

<CalculatorScreen/>
    <StatusBar style='auto'/>


   </View>
    
  );
}

const styles = StyleSheet.create({
  calc:{
    width:'100%',
    height:'100%',
    backgroundColor:'black'
    
  },


}

)


