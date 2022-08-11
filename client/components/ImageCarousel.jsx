import React,{useState} from 'react'
import {View,Image,Text,ScrollView,Dimensions,StyleSheet} from 'react-native';

const {width} = Dimensions.get("window");
const height = width;

const images = [
  {
    description: "Comida",
    uri: "https://4.imimg.com/data4/WX/DX/MY-2463817/dog-food-500x500.jpg",
    id: 1,
  },
  {
    description: "Accesorios",
    uri: "https://4.imimg.com/data4/WX/DX/MY-2463817/dog-food-500x500.jpg",
    id: 2,
  },
  {
    description: "Juguetes",
    uri: "https://4.imimg.com/data4/WX/DX/MY-2463817/dog-food-500x500.jpg",
    id: 3,
  },
  {
    description: "Alimentos",
    uri: "https://4.imimg.com/data4/WX/DX/MY-2463817/dog-food-500x500.jpg",
    id: 4,
  },
];

export const ImageCarousel = () => {
  const [state, setFirst] = useState({
    active:0
  })
const change = ({nativeEvent}) =>{
  const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
  if(slide !== state.active){
    setFirst({active:slide})
  }
}
  return (
    <View style={style.container}>
    
      <ScrollView 
      pagingEnabled 
      horizontal
      onScroll={change}
      showsHorizontalScrollIndicator={false}
      style={style.scroll}>
        {
          images.map((image,index)=>(
            <Image
            key={image.id}
            source={{uri: image.uri}}
            style={style.image}
          />
          ))
        }
      </ScrollView>
      <View style={style.pagination}>
        {
          images.map((i,index)=>(
            <Text key={i.id} style={ index==state.active ? style.pagingActiveText : style.pagingText }>⬤</Text>
          ))
        }
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container:{width,height},
  scroll:{width,height},
  image:{width,height,resizeMode:'cover'},
  pagination:{flexDirection:'row',position:'absolute',bottom:0,alignSelf:'center'},
  pagingText:{fontSize:(width/30),color:'#888',margin:3},
  pagingActiveText:{fontSize:(width/30),color:'#fff',margin:3}
})
