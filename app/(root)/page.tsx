import SearchForm from "../components/SearchForm"
export default async function Page({searchParams}: {searchParams: Promise<{query?: string}>}) {

  const query = (await searchParams).query || "";

  return (
    <div className="parent flex items-center justify-center ">
    <div className="main flex flex-col items-center justify-center p-24 text-white bg-gray-900 bg-center w-190 rounded-full">
      <h1 className="text-4xl font-bold mt-[-5%] mb-10">Welcome to the Startup App!</h1>
      <SearchForm query={query}/>  
    </div>
    </div>
  )
}