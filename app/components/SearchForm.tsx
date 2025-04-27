// import Form from 'next/form'
import SearchFormReset from './SearchFormReset'

const SearchForm = ({query}:{query?:string}) => {


  return (
    <div>
        <form action='/' className="search-form flex items-center w-180 max-w-md mx-auto mt-4"> 
            <label htmlFor="search" className="sr-only">
            Search
            </label>
            <div className="relative w-full pl-2 flex justify-between items-center">
            <input
               name='query'
                type="text"
                id="search"
                defaultValue={query}
                className=" block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search for ideas..."
                required
            />
            
            <button
                type="submit"
                className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500"
            >
                <span className="ml-2 text-lg ">🔎</span>
            
            </button>
            <div className='flex items-center justify-end gap-2 rounded-lg p-2  '>
                <button type="submit" className='text-sm text-gray-500 bg-gray-50 border border-gray-300 rounded-lg p-2 hover:bg-gray-100'> Search
                    
                </button>
                {query && <SearchFormReset />}
                
            </div>
            </div>
        </form>
    </div>
  )
}
export default SearchForm