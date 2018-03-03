import React from 'react';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Animated,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  
  // Store Animated.Value as state property
  state = {
    textRotateY: new Animated.Value(0),
  };

  handleOnEnter = () => {
    Animated.timing(this.state.textRotateY, {
      toValue: 45,
      duration: 300,
    }).start();
  }

  handleOnExit = () => {
    Animated.timing(this.state.textRotateY, {
      toValue: 0,
      duration: 300,
    }).start();
  }

  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        
        {
        /*
         * Change <Text> to <Animated.Text>, to
         * enable animations on text element
         */
        }
        <Animated.Text
          style={{
            fontSize: 0.8,
            layoutOrigin: [0.5, 0.5],
            transform: [{
              translate: [0, 0, -4]
            }, {
              // Assign rotation Y to state property
              rotateY: this.state.textRotateY,
            }],
            color: 'aquamarine',
          }}

          onEnter={ this.handleOnEnter }
          onExit={ this.handleOnExit }
        >
          Hello World
        </Animated.Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);