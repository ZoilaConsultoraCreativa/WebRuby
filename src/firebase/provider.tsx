// @ts-nocheck
'use client';
import { FirebaseApp } from 'firebase/app';
import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const FirebaseAppContext = createContext<FirebaseApp | undefined>(undefined);
const AuthContext = createContext<Auth | undefined>(undefined);
const FirestoreContext = createContext<Firestore | undefined>(undefined);

export const FirebaseProvider = ({
  children,
  firebaseApp,
  auth,
  firestore,
}: PropsWithChildren<{
  firebaseApp: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}>) => {
  return (
    <FirebaseAppContext.Provider value={firebaseApp}>
      <AuthContext.Provider value={auth}>
        <FirestoreContext.Provider value={firestore}>
          {children}
        </FirestoreContext.Provider>
      </AuthContext.Provider>
    </FirebaseAppContext.Provider>
  );
};

export function useFirebaseApp() {
  return useContext(FirebaseAppContext);
}

export function useAuth() {
  return useContext(AuthContext);
}

export function useFirestore() {
  return useContext(FirestoreContext);
}
