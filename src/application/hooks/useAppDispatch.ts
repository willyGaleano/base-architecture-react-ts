import { Dispatch } from '../store/index';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<Dispatch>();
