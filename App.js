import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import { AppNavigator } from './routes';

export default class FreshApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('FreshApp', () => FreshApp);

// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';

// import { AvatarListItem } from './src/components';

// export default class FreshApp extends Component {
//   render() {
//     return (
//       <View style={styles.mainContainer}>
//         <View style={styles.topContainer}>
//           <Text style={styles.instructions}>1</Text>
//           <Text style={styles.instructions}>2</Text>
//         </View>

//         <View style={styles.bottomContainer}>
//           <AvatarListItem />
//           <AvatarListItem />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//   },
//   topContainer: {
//     flex: 1,
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: 'pink',
//   },
//   bottomContainer: {
//     flex: 0.5,
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('FreshApp', () => FreshApp);
