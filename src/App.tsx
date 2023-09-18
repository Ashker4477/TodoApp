import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, createNavigationContainerRef, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import TaskList from './pages/taskList';
import GetStarted from './pages/getStarted';
import AddTask from './pages/addTask';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor, useAppSelector } from './slice/store';
import { Routes } from './route';

const Stack = createStackNavigator();
export const navigationRef = createNavigationContainerRef();
export function navigate(name: any, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}
export function onAddSuccess() {
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
export function onEditSuccess(name: string, index: number) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: name, params: { index }
          },
        ],
      }),
    );
  }
}
function App(): JSX.Element {
  const task = useAppSelector((state: any) => state?.card);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName={task?.length > 0 ? Routes?.TaskList : Routes?.GetStarted}>
            <Stack.Screen options={{ headerShown: false }} name={Routes?.GetStarted} component={GetStarted} />
            <Stack.Screen options={{ headerShown: false }} name={Routes?.AddTask} component={AddTask} />
            <Stack.Screen options={{ headerShown: false }} name={Routes?.TaskList} component={TaskList} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
