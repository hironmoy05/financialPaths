import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import rootReducer from './reducer';
import logger from './middleware/logger';
import toast from './middleware/toast'; 
import api from './middleware/api';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userId', 'userStore', 'projectStore'],
    blacklist: ['loading', 'lastFetch']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    // logger:logger({destination: 'console'}),
    // toast,
    // api
});

export const persistor = persistStore(store);