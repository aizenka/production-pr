import { useDispatch } from 'react-redux'
import { AppDispatch } from 'shared/config/store/store'

const useAppDispatch: () => AppDispatch = useDispatch

export default useAppDispatch