import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SearchList from './components/SearchList';
import ResultDetail from './components/ResultDetail'

const RootRouter = createStackNavigator({
  Home: {screen: SearchList},
  Detail: {screen: ResultDetail}

});

export default class App extends React.Component {
  render() {
    return (
      <RootRouter/>
    );
  }
}
