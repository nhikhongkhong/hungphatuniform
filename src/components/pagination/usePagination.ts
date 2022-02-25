import React, { useReducer } from 'react'
// import { InputProps } from '@interfaces/atoms'

interface TableState {
  listPageSize?: Array<number>
  canPreviousPage: boolean
  canNextPage: boolean
  pageCount: number | null
  pageIndex: number
  pageSize: number | string
}
export enum InputActionKind {
  GO_TO_PAGE = 0,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  SET_PAGE_SIZE,
  SET_PAGE_COUNT,
  SET_CAN_NEXT,
  SET_CAN_PREVIOUS,
}
export enum FieldName {
  EMAIL = 'email',
  PASSWORD = 'password',
}

type InputAction =
  | {
      type: InputActionKind.GO_TO_PAGE
      payload: number
    }
  | { type: InputActionKind.PREVIOUS_PAGE }
  | { type: InputActionKind.NEXT_PAGE }
  | { type: InputActionKind.SET_PAGE_SIZE; payload: number }
  | { type: InputActionKind.SET_PAGE_COUNT; payload: number }
  | { type: InputActionKind.SET_CAN_NEXT; payload: boolean }
  | { type: InputActionKind.SET_CAN_PREVIOUS; payload: boolean }

const TableReducer = (state: TableState, action: InputAction): TableState => {
  const { type } = action
  switch (type) {
    case InputActionKind.GO_TO_PAGE: {
      const page = action.payload
      if (1 <= page && page <= (state.pageCount || 1)) {
        return {
          ...state,
          pageIndex: page,
        }
      } else return state
    }
    case InputActionKind.PREVIOUS_PAGE: {
      const page = state.pageIndex || 0
      if (page > 1)
        return {
          ...state,
          pageIndex: page - 1,
        }
      else return state
    }
    case InputActionKind.NEXT_PAGE: {
      const page = state.pageIndex || 0
      const endPage = state.pageCount || 0
      if (page < endPage)
        return {
          ...state,
          pageIndex: page + 1,
        }
      else return state
    }
    case InputActionKind.SET_PAGE_SIZE: {
      return {
        ...state,
        pageSize: action.payload,
      }
    }
    case InputActionKind.SET_PAGE_COUNT: {
      return {
        ...state,
        pageCount: action.payload,
      }
    }
    case InputActionKind.SET_CAN_NEXT: {
      return {
        ...state,
        canNextPage: action.payload,
      }
    }
    case InputActionKind.SET_CAN_PREVIOUS: {
      return {
        ...state,
        canPreviousPage: action.payload,
      }
    }
    default:
      return state
  }
}

const defaultState = {
  listPageSize: [5, 10, 15],
  pageSize: 10,
  pageCount: 1,
  pageIndex: 1,
  canNextPage: true,
  canPreviousPage: true,
}

export const useTableReducer = (initialState?: TableState): [TableState, React.Dispatch<InputAction>] => {
  const [state, dispatch] = useReducer(TableReducer, initialState || defaultState)
  return [state, dispatch]
}
