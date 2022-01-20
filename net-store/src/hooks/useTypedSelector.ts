import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { rootRedusersType } from '../store/reducers';

export const useTypedSelector: TypedUseSelectorHook<rootRedusersType> = useSelector;
