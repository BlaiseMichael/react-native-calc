import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, TouchableOpacity, Text, StyleSheet, Dimensions, PanResponder} from 'react-native';
import { CalcButton, CalcDisplay } from './../Components/';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';


require("./../lib/swisscalc.lib.format.js");
require("./../lib/swisscalc.lib.operator.js");
require("./../lib/swisscalc.lib.operatorCache.js");
require("./../lib/swisscalc.lib.shuntingYard.js");
require("./../lib/swisscalc.display.numericDisplay.js");
require("./../lib/swisscalc.display.memoryDisplay.js");
require("./../lib/swisscalc.calc.calculator.js");


export default class CalculatorScreen extends React.Component {

constructor(props) {
super(props);
const {width, height} = Dimensions.get('window')

this.state = {
    display: "0",
    width,
    height

};

this.oc = global.swisscalc.lib.operatorCache;
this.calc = new global.swisscalc.calc.calculator();

this.panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
        if (Math.abs(gestureState.dx) >= 50)
        this.onBackspacePress();
    }
    
}

)

}






onDigitPress = (digit) =>{
    this.calc.addDigit(digit);
    this.setState({display: this.calc.getMainDisplay()});
}
onClearPress = () => {
    this.calc.clear();
    this.setState({display: this.calc.getMainDisplay()});

}

onPlusMinusPress = () =>{
    this.calc.negate();
    this.setState({display: this.calc.getMainDisplay()});

}

onBackspacePress = () =>{
    this.calc.backspace();
    this.setState({display: this.calc.getMainDisplay()});

}


onBinaryOperatorPress = (operator) => {
    this.calc.addBinaryOperator(operator);
    this.setState({display: this.calc.getMainDisplay()});
}

onUnaryOperatorPress = (operator) => {
    this.calc.addUnaryOperator(operator);
    this.setState({display: this.calc.getMainDisplay()});
}


onEqualsPress = () => {
    this.calc.equalsPressed ();
    this.setState({display: this.calc.getMainDisplay()});
}








render() {
return(

<View style={styles.container}>


    <View style={styles.displaycontainer} {...this.panResponder.panHandlers}>
    
<CalcDisplay display={this.state.display}/>

   </View>
   


    
     <View style={styles.buttoncontainer}>
        
        
        
     


     <View style = {styles.buttonrow}>
        
    
    <CalcButton onPress={this.onClearPress} style={{backgroundColor:"#DCC894"}}title="c" color="white" backgroundcolor="#DCC894"/>
    <CalcButton onPress={this.onPlusMinusPress} style={{backgroundColor:"#DCC894"}}title="+/-" color="white" backgroundcolor="#DCC894"/>
    <CalcButton onPress={() => {this.onUnaryOperatorPress(this.oc.PercentOperator)}} style={{backgroundColor:"#DCC894"}} title="%" color="white" backgroundcolor="#DCC894"/>
    <CalcButton onPress={() => {this.onBinaryOperatorPress(this.oc.DivisionOperator)}} style={{backgroundColor:"#DCA394"}} title="/" color="white" backgroundcolor="#DCA394"/>
    </View>

     <View style = {styles.buttonrow}>
    
    <CalcButton onPress={() =>{this.onDigitPress("7")}} title="7" color="white" backgroundcolor="#607D88"/>
    <CalcButton onPress={() =>{this.onDigitPress("8")}} title="8" color="white" backgroundcolor="#607D88"/>
    <CalcButton onPress={() =>{this.onDigitPress("9")}} title="9" color="white" backgroundcolor="#607D88"/>
    <CalcButton onPress={() => {this.onBinaryOperatorPress(this.oc.MultiplicationOperator)}} style={{backgroundColor:"#DCA394"}} title="x" color="white" backgroundcolor="#DCA394"/>
    </View>


     <View style = {styles.buttonrow}>
    <CalcButton onPress={() =>{this.onDigitPress("4")}} title="4" color="white" backgroundcolor="yellow"/>
    <CalcButton onPress={() =>{this.onDigitPress("5")}} title="5" color="white" backgroundcolor="#607D88"/>
    <CalcButton onPress={() =>{this.onDigitPress("6")}} title="6" color="white" backgroundcolor="#607D88"/>
    <CalcButton onPress={() => {this.onBinaryOperatorPress(this.oc.SubtractionOperator)}} style={{backgroundColor:"#DCA394"}} title="-" color="white" backgroundcolor="#DCA394"/>
    </View>


     <View style = {styles.buttonrow}>
    <CalcButton onPress={() =>{this.onDigitPress("1")}} title="1" color="white" backgroundcolor="#607D88"/>
    <CalcButton onPress={() =>{this.onDigitPress("2")}} title="2" color="white" backgroundcolor="#607D88"/>
    <CalcButton onPress={() =>{this.onDigitPress("3")}} title="3" color="white" backgroundcolor="#607D88"/>
    <CalcButton onPress={() => {this.onBinaryOperatorPress(this.oc.AdditionOperator)}} style={styles.ban} title="+" color="white" backgroundcolor="#DCA394"/>
    </View>


     <View style = {styles.buttonrow}>
    <CalcButton onPress={() =>{this.onDigitPress("0")}} title="0" color="white" backgroundcolor="yellow" style={{}}/>
    <CalcButton onPress={() =>{this.onDigitPress(".")}}title="." color="white" backgroundcolor="#607D88"/>
    <CalcButton style={{backgroundColor:"#DCC894"}} onPress={() => {this.onBinaryOperatorPress(this.oc.SquareRootOperator)}}title="sqrt" color="white" backgroundcolor="#DCC894"/>
<CalcButton onPress={this.onEqualsPress} style ={{backgroundColor:"#DCA394"}}title="=" color="white" backgroundcolor="#DCA394"/>
    
    </View>
     </View>
     
</View>

);


};

};


const styles = StyleSheet.create ({
buttonrow:{
    flexDirection: "row",
    justifyContent:"center",
},
displaycontainer:{
  flex:1,
  justifyContent:"flex-end",
//   backgroundColor:'red'
},
container:{
height:"100%",
width:"100%",
flex:1,
backgroundColor:'black',

},
buttoncontainer:{
paddingBottom:25
},
ban:{backgroundColor:"#DCA394"}

}

);