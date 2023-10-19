import { useState } from 'react';
import {Text, View,TextInput,Button } from 'react-native'
import styles from '../styles';
import BudgetListing from './BudgetListing';
import {addBudget} from "./redux/action"
import { useDispatch } from 'react-redux';

// const budgetFromParams = route?.params?.budget;
// const [name,setName]=useState(budgetFromParams?.name || '');
// const [plannedAmount,setPlannedAmount]=useState(budgetFromParams?.plannedAmount || '');
// const [actualAmount,setActualAmount]=useState(budgetFromParams?.actualAmount || '');


// const dispatch=useDispatch();
// const handleSaveButton=(budget)=>{
//   dispatch(addBudget(budget));
// }
const BudgetEntry=(props)=>{
    const dispatch = useDispatch();
    const [name,setName]=useState('');
    const [plannedAmount,setPlannedAmount]=useState('');
    const [actualAmount,setActualAmount]=useState('');
    return(
    <View style={{flex:1,justifyContent:'center'}}>
        <View style={styles.textInputs}>
          <Text style={styles.label}>Name:</Text>
            <TextInput
            style={styles.textInput}
            placeholder='Name(Sports,Education,....)'
            value={name}
            onChange={e => {
              setName(e.nativeEvent.text);
            }}/>
            <Text style={styles.label}>Planned Amount:</Text>
            <TextInput
            style={styles.textInput}
            placeholder='1000,2000,3000,.....'
            value={plannedAmount}
            onChange={e => {
              setPlannedAmount(e.nativeEvent.text);
            }}/>
            <Text style={styles.label}>Actual Amount:</Text>
            <TextInput
            style={styles.textInput}
            placeholder='1000,2000,3000,.....'
            value={actualAmount}
            onChange={e => {
              setActualAmount(e.nativeEvent.text);
            }}/>
        </View>
        <View style={styles.buttons}>
            <View style={[styles.button]}><Button  
                                            onPress={() => {
                                              
                                              if (!name || !plannedAmount || !actualAmount) {
                                                alert('Please enter the values');
                                                return;
                                              }
                                              else{
                                                dispatch(addBudget({name, plannedAmount, actualAmount}));
                                                alert('Budget Added!');
                                                props.navigation.navigate("Budget Listing");
                                              }
                                            }} title="Save"></Button></View>
            
            <View style={styles.button}><Button onPress={()=>props.navigation.navigate("Budget Listing")} title="Show Items"></Button></View>
        </View>
      </View>
    )
}
export default BudgetEntry;