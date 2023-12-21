import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ProductItem = ({product}) => {
  return (
    <TouchableOpacity>
        <Text>{product.title}</Text>
        <Image/>
    </TouchableOpacity>
  )
}

export default ProductItem

const styles = StyleSheet.create({})