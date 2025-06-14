import { View, Text,Dimensions,Button,FlatList,StyleSheet } from "react-native"
import React,{useEffect,useState} from "react"

const {width,height}=Dimensions.get('window')
const CartScreen =({ route })=>{
  const [cart, setCart] = useState([])
  
  useEffect(()=>{
    const product=route.params?.product;
    if(product && !cart.some(item => item.id === product.id)){
      setCart([...cart, product]);
    }
  },[route.params?.product])

  const placeOrder=()=>{
    alert('Order placed with Cash on Delivery!');
  }

  return(
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item)=>item.id}
        renderItem={({ item })=>(
          <View style={styles.itemContainer}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>${item.price}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty</Text>}
      />
      <Button title="Place Order (COD)" onPress={placeOrder} />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  itemContainer:{
        marginBottom:20,
        alignItems:"center",
        borderWith:1,
        borderColor:'#ddd',
        padding:10,
        backgroundColor:'#fff',
        shadowColor:'#000',
        shadowOffset:{width:10,height:2},
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5,
    },
    image:{
        width:width*0.2,
        height:height* 0.1,
        borderRadius:10,
    }
})
export default CartScreen