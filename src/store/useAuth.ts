import { create } from 'zustand';

export interface User {
  id?: number;
  email: string;
  name?: string;
  isAdmin?: boolean;
}

interface AuthStore {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
  isAdmin: () => boolean;
}

const getSavedUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  try {
    const saved = localStorage.getItem('terlikmart_user');
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
};

export const useAuth = create<AuthStore>((set, get) => ({
  user: getSavedUser(),
  token: (typeof window !== 'undefined' ? localStorage.getItem('terlikmart_token') : null),
  login: (user, token) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('terlikmart_user', JSON.stringify(user));
      localStorage.setItem('terlikmart_token', token);
    }
    set({ user, token });
  },
  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('terlikmart_user');
      localStorage.removeItem('terlikmart_token');
    }
    set({ user: null, token: null });
  },
  isAuthenticated: () => !!get().user,
  isAdmin: () => !!get().user?.isAdmin,
}));
