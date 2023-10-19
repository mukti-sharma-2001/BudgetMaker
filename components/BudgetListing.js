import {Text, View,ScrollView, TextComponent,FlatList } from 'react-native'
import styles from '../styles'
// import {addBudget} from './redux/action'
import {useDispatch, useSelector} from 'react-redux';



const BudgetListing=()=>{
    const {budgets}=useSelector(store=>store.reducer)
    return(
        <View style={{flex:1,justifyContent:'center'}} >
            {/* <View>
                <Text>{budgets}</Text>
            </View> */}
            <FlatList
                data={budgets}
                renderItem={({item, index}) => {
                return (
                    <View style={styles.listItem}>
                        <View>
                            {/* alert(JSON.stringify()); */}
                            {/* <Text>1</Text> */}
                            <Text style={styles.budgetText}>Name: {item.name}</Text>
                            <Text style={styles.budgetText}>Planned Amount: {item.plannedAmount}</Text>
                            <Text style={styles.budgetText}>Actual Amount: {item.actualAmount}</Text>
                        </View>
                    </View>
                );
                }}
            />
        </View>
    )
}
export default BudgetListing;