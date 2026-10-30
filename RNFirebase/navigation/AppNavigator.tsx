import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator } from 'react-native';

import { LoginScreen } from '../screens/LoginScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { useAuth } from '../hooks/useAuth';

export type RootStackParamList = {
  Login: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  const { user, loading, login, logout } = useAuth();

  if (loading) return <ActivityIndicator style={{ flex: 1 }} />;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Profile" options={{ title: 'Perfil' }}>
            {() => <ProfileScreen user={user} onLogout={logout} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Login" options={{ title: 'Iniciar sesión' }}>
            {() => <LoginScreen onLogin={login} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
