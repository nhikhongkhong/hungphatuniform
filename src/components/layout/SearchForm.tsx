import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useRouter } from 'next/router'
const SearchForm = () => {
  const router = useRouter()
  const [keyword, setKeyWord] = useState<string>('')

  const handleAction = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      setKeyWord(event.target.value)
    },
    onKeyPress: () => {
      router.push({ pathname: '/search', query: { keyword: keyword } })
    },
    search: () => {
      router.push({ pathname: '/search', query: { keyword: keyword } })
    },
  }

  return (
    <div className={`flex rounded-lg h-[40px] flex-1`}>
      <input
        value={keyword}
        type="search"
        id="customInput"
        className={`flex-grow bg-white rounded-l focus:outline-none border-green-700 border rounded-l p-4 placeholder-blue-1 text-sm w-full lg:max-w-[480px]`}
        onChange={handleAction.onChange}
        onKeyPress={handleAction.onKeyPress}
        placeholder={'Gõ từ khoá sản phẩm bạn muốn tìm ...'}
      />
      <div
        className="md:mr-3 flex items-center bg-green-700 rounded-r px-4 cursor-pointer"
        onClick={handleAction.search}
      >
        <BsSearch className="fill-white" />
      </div>
    </div>
  )
}

export default SearchForm
