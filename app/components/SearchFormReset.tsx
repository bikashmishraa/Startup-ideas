'use client'

const SearchFormReset = () => {
    const reset =() => {
        const form = document.querySelector('.search-form input[name="query"]') as HTMLFormElement;

        if (form) {
            form.value = ''; // Clear the input value
        }
    }
  return (
    <button type='button' onClick={() => reset()} className='text-sm  text-gray-500 bg-gray-50 border border-gray-300 rounded-lg p-2 hover:bg-gray-100'>
                    <div className="text-sm text-gray-500 w-9">Clear</div>
                </button>
  )
}
export default SearchFormReset