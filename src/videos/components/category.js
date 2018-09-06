import React from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  Platform
} from 'react-native';

// Nos vamos a traer en este componente los generos (categorías)
const Category = (props) => (
  <ImageBackground
    style={styles.container}
    source={{
      uri: props.background_image
    }}
  >
    <Text style={styles.genre}>{props.genres ? props.genres[0] : 'Sin categoría'}</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2
  },
  genre: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        textShadowColor: 'rgba(0,0,0,.75)',
        textShadowOffset: {
          width: 2,
          height: 2
        },
        textShadowRadius: 0,
      },
      android: {
        elevation: 2,
      }
    })
  }
});
export default Category;
