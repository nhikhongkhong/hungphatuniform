import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { BiLastPage, BiFirstPage, BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { useUpdateEffect } from 'react-use'

import { useTableReducer, InputActionKind } from './usePagination'

import { convertSearchParams } from '@helpers/utils'

interface CustomTablePaginationINF {
  pageCount?: number
}

const CustomTablePagination = (props: CustomTablePaginationINF): JSX.Element | null => {
  const router = useRouter()
  const currentPage = router.query.page || 1

  const initialState = {
    listPageSize: [5, 10, 15],
    pageSize: 10,
    pageCount: 5,
    pageIndex: +currentPage,
    canNextPage: true,
    canPreviousPage: true,
  }

  const [state, dispatch] = useTableReducer(initialState)
  const { canPreviousPage, canNextPage, pageIndex, pageSize, listPageSize = [5, 10, 15, 20] } = state
  const { pageCount = 1 } = props
  useUpdateEffect(() => {
    router.query.page = pageIndex.toString()
    router.push(router)
  }, [pageIndex])

  useEffect(() => {
    if (pageCount) {
      dispatch({ type: InputActionKind.SET_PAGE_COUNT, payload: pageCount })
      dispatch({ type: InputActionKind.SET_CAN_NEXT, payload: currentPage < pageCount })
      dispatch({ type: InputActionKind.SET_CAN_PREVIOUS, payload: currentPage > 1 })
    }
    if (currentPage) {
      dispatch({ type: InputActionKind.GO_TO_PAGE, payload: +currentPage })
    }
  }, [currentPage, dispatch, pageCount])

  const paginationActions = {
    gotoPage: (page: number) => {
      dispatch({ type: InputActionKind.GO_TO_PAGE, payload: page })
    },
    setPageSize: (size: number) => {
      dispatch({ type: InputActionKind.SET_PAGE_SIZE, payload: size })
    },
    previousPage: () => {
      dispatch({ type: InputActionKind.PREVIOUS_PAGE })
    },
    nextPage: () => {
      dispatch({ type: InputActionKind.NEXT_PAGE })
    },
    firstPage: () => {
      dispatch({ type: InputActionKind.GO_TO_PAGE, payload: 0 })
    },
    lastPage: () => {
      dispatch({ type: InputActionKind.GO_TO_PAGE, payload: pageCount - 1 })
    },
  }

  return (
    <div className="mt-5 flex items-container justify-center text-sm ">
      <button onClick={paginationActions.firstPage}>
        <BiFirstPage size={20} />
      </button>
      <button onClick={paginationActions.previousPage} disabled={!canPreviousPage}>
        <BiLeftArrowAlt size={20} />
      </button>
      <button onClick={paginationActions.nextPage} disabled={!canNextPage}>
        <BiRightArrowAlt size={20} />
      </button>
      <button onClick={paginationActions.lastPage}>
        <BiLastPage size={20} />
      </button>
      <span className="mx-2">
        Page{' '}
        <strong>
          {pageIndex} of {pageCount}
        </strong>
      </span>
      <span>|</span>
      <span className="mx-2">
        Go to page:
        <input
          type="number"
          min={1}
          max={pageCount}
          defaultValue={pageIndex}
          className="bg-gray-light rounded px-2 w-12 ml-2 text-black"
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) : 1
            paginationActions.gotoPage(page)
          }}
        />
      </span>
    </div>
  )
}

export default React.memo(CustomTablePagination)
