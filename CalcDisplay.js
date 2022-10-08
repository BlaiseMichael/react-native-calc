import React from 'react';
import { StyleSheet, View, Text} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default  class CalcDisplay extends React.Component {

    static defaultProps = {
        display: ""
        
     


        
    }

render() {
    return(



<View style={styles.container}>

    <Text style ={styles.display}>{this.props.display}</Text>
    <View style={{marginTop:40}}>
    

    </View>
    <View style={{width:'100%', margin:0, alignItems:"flex-end", paddingRight:10}}><FontAwesome5 style={{}} name="backspace"  size={40}  color="white"/>
</View>

    </View>


    )

}

}


const styles = StyleSheet.create ({

container: { 
    padding:20,
    marginBottom:10,
    flexDirection: "column",



},
display:{
    fontSize:50,
    color:'white',
    textAlign:'right',
    marginRight: 10,
},

}

)