import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { authService } from '../services/authService';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      authService.onUserChanged((u) => {
        setUser(u);
        setLoading(false);
      }),
    [],
  );

  return {
    user,
    loading,
    login: authService.signInWithGoogle,
    logout: authService.signOut,
  };
}
