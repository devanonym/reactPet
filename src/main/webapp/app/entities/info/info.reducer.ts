import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { SERVER_API_URL } from 'app/config/constants';

import { IInfo } from 'app/shared/model/info.model';

export const ACTION_TYPES = {
  FETCH_INFO: 'info/FETCH_INFO',
  UPDATE_INFO: 'pet/UPDATE_INFO',
  DELETE_INFO: 'pet/DELETE_INFO',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [],
  entity: {},
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

// Reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_INFO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.UPDATE_INFO):
    case REQUEST(ACTION_TYPES.DELETE_INFO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_INFO):
    case FAILURE(ACTION_TYPES.UPDATE_INFO):
    case FAILURE(ACTION_TYPES.DELETE_INFO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_INFO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.UPDATE_INFO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_INFO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {}
      };
    default:
      return state;
  }
};

const apiUrl = SERVER_API_URL + '/api/info';

// Actions


export const getEntity: ICrudGetAction<IInfo> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_INFO,
    payload: axios.get(requestUrl) as Promise<IInfo>
  };
};

export const updateEntity: ICrudPutAction<IInfo> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_INFO,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IInfo> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_INFO,
    payload: axios.delete(requestUrl)
  });
  return result;
};

