import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut, User } from 'firebase/auth';

import { env } from '../config/env';
import { auth } from './firebase';

GoogleSignin.configure({ webClientId: env.googleWebClientId });

export const authService = {
  onUserChanged(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
  },

  async signInWithGoogle() {
    await GoogleSignin.hasPlayServices();
    const res = await GoogleSignin.signIn();
    if (res.type !== 'success' || !res.data.idToken) return;
    await signInWithCredential(auth, GoogleAuthProvider.credential(res.data.idToken));
  },

  async signOut() {
    await GoogleSignin.signOut();
    await signOut(auth);
  },
};
