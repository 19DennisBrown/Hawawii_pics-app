

import { View, Text, SafeAreaView, ScrollView, FlatList, ActivityIndicator } from 'react-native'
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
  return(
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          height:'100%',
          backgroundColor: 'pink'
        }}
      >
        <View
        className="grid text-center h-full items-center justify-center"
        >
          <Text className="text-3xl" > {"homepage"} </Text>

        </View>

        { loading ? (<ActivityIndicator color={'red'} size={'large'}/>) :
          error ? <View>{error}</View> :
         ( <FlatList
            showsVerticalScrollIndicator={false}
              data = {products}
              renderItem={( {item} )=><View>
                <Image
                  source={{ uri:item.image }}
                />
                <Text> "Kshs." {item.price }</Text>
              </View>}
          />)
        }
     </ScrollView>
   </SafeAreaView>
  )
}



export default Home;