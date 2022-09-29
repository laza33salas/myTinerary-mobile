import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Drawer from './navigation/Drawer';
import store from './redux/store';



export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </Provider>

  );
}


