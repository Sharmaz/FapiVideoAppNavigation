import React from 'react';
import {
  View,
  Image,
  SafeAreaView,
  StyleSheet
} from 'react-native';

const Header = (props) => (
  <View>
    <SafeAreaView style={styles.statusBar}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
        <View style={styles.right}>
          {props.children}
        </View>
      </View>
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain'
  },
  statusBar: {
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    padding: 20
  },
  right: {
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'row'
  }
});

export default Header;
