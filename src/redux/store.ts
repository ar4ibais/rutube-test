import { combineReducers, configureStore } from "@reduxjs/toolkit";
import RootReducer from "./slices/root-slice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};

const reducers = combineReducers({
	RootReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	devTools: true,
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;
