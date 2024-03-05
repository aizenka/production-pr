import { useDispatch } from 'react-redux'
import type { AppDispatch } from 'shared/config/store/store'

const useAppDispatch: () => AppDispatch = useDispatch

export default useAppDispatch