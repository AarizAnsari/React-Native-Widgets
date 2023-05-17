import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Row = (props:{children:any[]}) => {
  return (
    <View style={{flexDirection:'row'}}>
      {props.children}
    </View>
  )
}

export {Row}

const styles = StyleSheet.create({})