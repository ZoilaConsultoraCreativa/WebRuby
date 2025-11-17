// @ts-nocheck
'use client';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { PropsWithChildren, createContext, useContext, useMemo } from 'react';
import { FirebaseProvider } from './provider';

export type FirebaseContextValue = {
  firebaseApp: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
};

const FirebaseContext = createContext<FirebaseContextValue | null>(null);

export function FirebaseClientProvider({ children, config }) {
  const value = useMemo<FirebaseContextValue>(() => {
    const firebaseApp = initializeApp(config);
    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);
    return {
      firebaseApp,
      auth,
      firestore,
    };
  }, [config]);

  return (
    <FirebaseContext.Provider value={value}>
      <FirebaseProvider {...value}>{children}</FirebaseProvider>
    </FirebaseContext.Provider>
  );
}

export function useFirebase() {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error(
      'useFirebase must be used within a FirebaseClientProvider'
    );
  }
  return context;
}
