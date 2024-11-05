

import { View, Text, SafeAreaView, ScrollView,StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'


const Home =()=>{
  const URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchApi=()=>{
    fetch(URL)
    .then((response)=>{
      if(!response.ok){
        throw new Error("No data found.")
      }
      return response.json()
    })
    .then((data)=>{
      setProducts(data)
      setLoading(false)
      console.log(data)
    })
    .catch((err)=> {
      setError(err.message)
      setLoading(false)
      console.log(err.message)
    });

  }

  useEffect(()=>{
    fetchApi()
  }, [])

  const Product=({price, imageLink})=>{
    return(

      <View style={styles.itemContainer} className="  bg-blue-300" >
        <Image source={{uri:imageLink}} style={styles.image} className="w-90" />
        <Text style={styles.title}>{price}</Text>
      </View>

    )
  }
  return(
    <SafeAreaView>
      
        <View
        className="grid pt-20 text-center w-full h-full items-center justify-center w-90 bg-blue-300"
        >
          <Text className="text-3xl pb-10" > {"homepage"} </Text>
          { loading ? (<ActivityIndicator color={'green'} size={'large'}/>) :
          error ? <View> <Text>{error}</Text></View> :
          ( <FlatList
            showsVerticalScrollIndicator={false}
              data = {products}
              keyExtractor={(item) => item.id}
              renderItem={( {item} )=><Product price={item.price} imageLink={item.image} />}
          />)
        }
        </View>

       
          
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  }
})


export default Home;