import React, { Component } from 'react';
import { 
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import Video from 'react-native-video';

// Importamos los componentes que van a ser parte del player
import Layout from '../components/player-layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
import FullScreen from '../components/fullscreen';
import TimeLeft from '../components/time-left';
import ProgressBar from '../components/progress-bar';

class Player extends Component {
  // Establecemos el estado con las propiedades de los controles 
  state = {
    loading: true,
    paused: false,
    fullScreen: false,
    duration: 0.00,
    currentTime: 0.00,
    progress: 0.0
  }
  
  // Cada vez que el video se tarde en cargar (buffer) mostaremos la animación del loader
  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering
    })
  }
  
  // Seteamos la propiedad de paused
  playPause = () => {
    this.setState({
      paused: !this.state.paused
    })
  }
  
  // En caso de que estemos en fullScreen
  fullScreen = () => {
    this.setState({
      fullScreen: !this.state.fullScreen
    })
  }
  
  // Activamos fullScreen
  onFullScreen = () => {
    this.fullScreen();
    if (!this.state.fullScreen) {
      this.player.presentFullscreenPlayer();
    } else {
      this.player.dismissFullscreenPlayer();
    }
  }
  
  // Una vez cargado el video obtenemos y convertimos la duración a un formato legible
  onLoad = (payload) => {
    let duration = payload.duration / 60;
    let minutes = Math.floor(duration);
    let seconds = duration % 1;
    seconds = (seconds * 60) / 1000;
    let time = (minutes + seconds * 10).toFixed(2);
    this.setState({
      duration: time
    });
  }
  
  // Una vez cargado el video obtenemos el tiempo transcurrido y lo convertimos a formato legible
  onProgress = (payload) => {
    let currentTime = payload.currentTime / 60;
    let minutes = Math.floor(currentTime);
    let seconds = currentTime % 1;
    seconds = (seconds * 60) / 1000;
    let time = (minutes + seconds * 10).toFixed(2);
    this.setState({
      currentTime: time,
      progress: (payload.currentTime / payload.seekableDuration)
    });
  }
  // hacemos una referencia al componente Video
  videoRef = (ref) => {
    this.player = ref;
  }

  render() {
    // Rendereamos el video, el loader y los controles como definimos en nuestro layout
    return(
      <Layout
        loading={this.state.loading}
        style={styles.container}
        video={
          <Video
            style={styles.video}
            source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            paused={this.state.paused}
            ref={this.videoRef}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
          />
        }
        loader={
          <ActivityIndicator color="red" />
        }
        controls={
          <ControlLayout>
            <PlayPause
              onPress={this.playPause}
              paused={this.state.paused}
            />
            <ProgressBar
              progress={this.state.progress}
            />
            <TimeLeft
              duration={this.state.duration}
              currentTime={this.state.currentTime}
            />
            <FullScreen
              onPress={this.onFullScreen}
              fullScreen={this.state.fullScreen}
            />
          </ControlLayout>
        }
      >
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    height: 100
  },
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  }
});

export default Player;
