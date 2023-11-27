import { useState, useEffect, ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { global } from '../../types/globalState'
import { useDispatch } from 'react-redux'
import { updateRepoForm } from '../../redux/globalSlice'
import { toast } from 'react-toastify';

export default function RepoForm() {
  const dispatch = useDispatch()

  const globalStateValues: global = useSelector((state: any) => (state.global))
    
  const [user, setUser] = useState<string>('')
  const [repo, setRepo] = useState<string>('')
  const [token, setToken] = useState<string>('')

    useEffect(() => {
        setUser(globalStateValues.user)
        setRepo(globalStateValues.repo)
        setToken(globalStateValues.token)
    }, [])

    const handleSearchCommits = () => {
      if (repo === '' || user === '') {
        toast.warn('Repository and user are mandatory')
        return
      }
      dispatch(updateRepoForm({
        user,
        repo,
        token
      }))
    }

    const handleOnchangeUser = (event: ChangeEvent<HTMLInputElement>) => {
      setUser(event.target.value)
    }

    const handleOnchangeRepo = (event: ChangeEvent<HTMLInputElement>) => {
      setRepo(event.target.value)
    }

    const handleOnchangeToken = (event: ChangeEvent<HTMLInputElement>) => {
      setToken(event.target.value)
    }

  return (
    <div className="lg:w-2/3 sm:w-full my-4 mx-2 rounded-lg bg-white py-3 px-8 drop-shadow-xl divide-y divide-gray-200">
        <div className='flex flex-col'>
            <label className='mt-2 font-semibold'>GitHub User</label>
                <input onChange={handleOnchangeUser} value={user} className="w-1/2 inline-flex justify-center mt-1 px-4 py-2 text-sm font-medium text-gray-700 bg-slate-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500" type='text' />
            <label className='mt-2 font-semibold'>Repository Name</label>
                <input onChange={handleOnchangeRepo} value={repo} className="w-1/2 inline-flex justify-center mt-1 px-4 py-2 text-sm font-medium text-gray-700 bg-slate-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500" type='text' />
            <label className='mt-2 font-semibold'>Github token</label>
                <input onChange={handleOnchangeToken} className="w-2/3 inline-flex justify-center mt-1 px-4 py-2 text-sm font-medium text-gray-700 bg-slate-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500" type='text' />

            <button onClick={handleSearchCommits} className='rounded-lg border w-52 h-10 my-4 bg-green-300 font-semibold hover:bg-green-400'>Search Commits</button>
        </div>
    </div>
  )
}
