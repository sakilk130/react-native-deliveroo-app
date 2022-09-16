import { StyleSheet, Platform, StatusBar } from 'react-native';

const SafeViewAndroid = (bg = '#fff') =>
  StyleSheet.create({
    AndroidSafeArea: {
      flex: 1,
      backgroundColor: bg,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
  });

export default SafeViewAndroid;
