import { View, Text, FlatList } from "react-native"


const products =[
    {id:'1',name:'Articulo 1',price:100, image:'https://picsum.photos/200/300/?random'},
    {id:'2',name:'Articulo 2',price:200, image:'https://picsum.photos/200/300/?random'},
    {id:'3',name:'Articulo 3',price:300, image:'https://picsum.photos/200/300/?random'}
]
const HomeScreen = ({navigation})=>{
    return(
        <View style={styles.container}>
            <FlatList/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,

    }
})
export default HomeScreen