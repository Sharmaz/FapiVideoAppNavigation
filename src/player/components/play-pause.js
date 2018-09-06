import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';

// Importamos Ionicons de react native vector
import Icon from 'react-native-vector-icons/Ionicons';

const PlayPause = (props) => (
  <TouchableOpacity
    onPress={props.onPress}
    underlayColor="red"
    hitSlop={{left: 5, right: 5, bottom: 5, top: 5}}
    style={styles.container}
  >
    {
      // Dependiendo de la plataforma vamos a renderizar los iconos
      props.paused ?
      Platform.select({
        ios: <Icon name="ios-play" size={20} color="#E82943" />,
        android: <Icon name="md-play" size={20} color="#E82943" />
      })
      :
      Platform.select({
        ios: <Icon name="ios-pause" size={20} color="#E82943" />,
        android: <Icon name="md-pause" size={20} color="#E82943" />
      })
    }
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
  }
});

export default PlayPause;