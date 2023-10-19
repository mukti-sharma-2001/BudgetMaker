import { StyleSheet } from "react-native"
import { Dimensions } from "react-native";
const {width} = Dimensions.get('screen');
const styles=StyleSheet.create({
  main:{
    backgroundColor:'#fff',
    flex:1
  },
    textbox:{
      color:'black',
      fontWeight:"bold",
      fontSize:40,
      backgroundColor:'#eee',
      textAlign:'center',
      textAlignVertical:'center',
      padding:10,
    },
    textInput:{
      fontSize:18,
      borderWidth:2,
      borderColor:'black',
      color:"black",
      margin:10,
    },
    label:{
      fontSize:20,
      marginTop:10,
      marginLeft:10,
      marginBottom:2,
      color:'black'
    },
    listItem: {
      width: 0.98*width,
      height: 100,
      fontSize:30,
      borderRadius: 12,
      padding: 10,
      margin: 7,
      backgroundColor: 'black',
      flexDirection: 'row',
      alignContent:'center',
      tintColor:'white',
      // justifyContent: 'space-between',
      alignItems: 'center',
    },
    budgetText:{
      color:'white',
      fontSize:20
    },
    button:{
      fontSize:40,
      margin:10,
    },
    buttons:{
      flex:2,
      // justifyContent:'flex-end'
    },
    header:{
      flex:1
    },
    textInputs:{
      flex:4
    }
  })

export default styles;