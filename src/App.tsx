import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, createNavigationContainerRef, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import TaskList from './pages/taskList';
import GetStarted from './pages/getStarted';
import AddTask from './pages/addTask';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './slice/store';

const Stack = createStackNavigator();
export const navigationRef = createNavigationContainerRef();
export function navigate(name: any, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}
export function onAuthSuccess() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: "TaskList",
          },
        ],
      }),
    );
  }
}

function App(): JSX.Element {
  const Appstore = store;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName="GetStarted">
            <Stack.Screen options={{ headerShown: false }} name="GetStarted" component={GetStarted} />
            <Stack.Screen options={{ headerShown: false }} name="AddTask" component={AddTask} />
            <Stack.Screen options={{ headerShown: false }} name="TaskList" component={TaskList} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
