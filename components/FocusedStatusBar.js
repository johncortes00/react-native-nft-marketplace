import { StatusBar, Text } from 'react-native';

import { useIsFocused } from '@react-navigation/core';

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
  //return <Text>hI</Text>;
  //<StatusBar animated={true} {...props} />
};

export default FocusedStatusBar;
