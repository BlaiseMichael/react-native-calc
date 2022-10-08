import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';





export default class CalcButton extends React.Component {


    static defaultProps =  {
        onPress: function () { },
        titles:"",
        color: "white",
        backgroundColor: "#607D88",
        style: { },
    }

  render(){
var bc = this.props.backgroundColor;



return(
<TouchableOpacity  onPress={this.props.onPress} 
style={[styles.container, {backgroundColor: bc}, {...this.props.style}]}>
   <Text   style ={[styles.text, {color: this.props.color}]}>{this.props.title}</Text>
</TouchableOpacity>

)

  }

}


const styles = StyleSheet.create ({


container:{
alignItems:'center',
justifyContent:'center',
width:70,
height:70,
borderRadius:35,
margin:7,
marginLeft: 10,
marginRight: 10,

 },
text:{
  fontSize: 25,
  fontWeight: 'bold',

 },

    }
)