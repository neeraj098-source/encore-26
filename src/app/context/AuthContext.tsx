import { createContext, useContext, useState, ReactNode } from 'react';

export interface User {
  name: string;
  email: string;
  college: string;
  rollNumber: string;
  isIETian: boolean;
  userId: string;
}

export interface CAData {
  referralCode: string;
  referralCount: number;
  points: number;
  rank: number;
  college: string;
}

interface AuthContextType {
  user: User | null;
  caData: CAData | null;
  isLoggedIn: boolean;
  isCAReg: boolean;
  login: (user: User, caMode: boolean) => void;
  logout: () => void;
  updateCAPoints: (points: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [caData, setCAData] = useState<CAData | null>(null);
  const [isCAReg, setIsCAReg] = useState(false);

  const login = (newUser: User, caMode: boolean) => {
    const isIETian = newUser.college.toLowerCase().includes('iet lucknow') || newUser.email.includes('@ietlucknow.ac.in');
    const userWithIETFlag = { ...newUser, isIETian, userId: `EN26-${Math.random().toString(36).substr(2, 9).toUpperCase()}` };
    setUser(userWithIETFlag);
    setIsCAReg(caMode);
    
    if (caMode) {
      setCAData({
        referralCode: `CA-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
        referralCount: 0,
        points: 0,
        rank: 0,
        college: newUser.college,
      });
    }
  };

  const logout = () => {
    setUser(null);
    setCAData(null);
    setIsCAReg(false);
  };

  const updateCAPoints = (points: number) => {
    if (caData) {
      setCAData({ ...caData, points: caData.points + points });
    }
  };

  return (
    <AuthContext.Provider value={{ user, caData, isLoggedIn: !!user, isCAReg, login, logout, updateCAPoints }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
