import { createAction } from '@reduxjs/toolkit';

export const apiRequest = createAction('api/request');
export const apiRequestSuccess = createAction('api/requestSuccess'); 
export const apiRequestFailed = createAction('api/requestFailed');

export const forgotApiRequest = createAction('forgot/apiRequest');
export const forgotApiRquestSuccess = createAction('forgot/apiRequestSuccess');
export const forgotApiRquestFailed = createAction('forgot/apiRequestFailed');

export const signoutRequest = createAction('signoutRequest');