import React, { useState } from "react"
import { View, Text, Image, TouchableWithoutFeedback, Dimensions } from "react-native"

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

const ImageWidth = Math.floor(ScreenWidth * 0.3)
const ContenedorHeight = Math.floor(ScreenWidth * 0.5)



const BagItem  = (props) => {

    const [count, setCount] = useState(props.cantidad);

    /* En cada funcion onPress se debe de poner una peticion api para 
    cambiar el valor de cantidad de la base de datos. 
    Tampoco estamos validando stock */
    const onPressMenos = () => {
        setCount(count == 0 ? 0 : count - 1);
      };
    const onPressMas = () => {
        setCount(count + 1);
      };
    
    const valTotal = count * props.price

    return(
        <View key= {props.id} style={Styles.contenedor}>
            <View style={Styles.contenedorImagen}>
                <Image source={props.image} style={Styles.image} />
            </View>

            <View style={Styles.contenedorBag}>
                <View style={Styles.contenedorName}>
                    <Text style={Styles.name}>{props.name}</Text>
                </View>

                <View style={Styles.contenedorBrandSize}>
                    <Text style={Styles.brand}>{props.brand}</Text>
                    <Text style={Styles.size}>{props.size}</Text>
                </View>

                <View style={Styles.contenedorCountPrice}>
                    <View style= {Styles.contenedorCount}>
                        <TouchableWithoutFeedback onPress={onPressMenos}>
                            <View>
                                <Image style={Styles.minusIcon}
                                    source={require('../../assets/iconMenos.png')}
                                />
                            </View>
                        </TouchableWithoutFeedback>                    

                        <View style={Styles.countContainer}>
                            <Text style={Styles.countText}>{count}</Text>
                        </View>

                        <TouchableWithoutFeedback onPress={onPressMas}>
                            <Image style={Styles.plusIcon}
                                source={require('../../assets/iconMas.png')}
                            />
                        </TouchableWithoutFeedback>
                    </View>

                    <View style= {Styles.contenedorPrice}>
                        <Text style={Styles.price}>${valTotal}</Text>
                    </View>
                </View>

            </View>
        </View>
    )
    }

const Styles = {
    contenedor: {flex: 1, flexDirection: 'row', backgroundColor : 'rgb(255,255,255)', borderRadius : 10, 
                justifyContent : 'center', marginLeft : 10, marginRight : 10, marginTop:5, height: ContenedorHeight},
    contenedorImagen: {padding: 0, alignContent: 'flex-start', justifyContent : 'center', height: ContenedorHeight, borderRadius : 10},
    contenedorBag: {flex:1, flexDirection: 'column', padding: 5, marginTop: 2},
    image: {width: ImageWidth, height: ContenedorHeight, resizeMode: 'cover', borderRadius : 10},
    contenedorName: {color: '#222222', fontWeight: "bold", fontSize: 16, padding: 5},
    contenedorBrandSize: {flex: 1, flexDirection: 'row'},
    brand: {color: '#9B9B9B', fontSize: 11, padding: 5},
    size: {color: '#9B9B9B', fontSize: 11, padding: 5},
    contenedorCountPrice: {flex: 1, flexDirection: 'row', alignItems: 'center'},
    contenedorCount: {flex: 1, flexDirection: 'row', alignItems: 'center'},
    price: {color: '#222222', fontWeight: "bold", fontSize: 14, padding: 5}
}
    

export default BagItem 