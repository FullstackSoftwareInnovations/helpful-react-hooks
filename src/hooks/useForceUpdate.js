import {useState} from 'react';

export function useForceUpdate(){
    let [, setCount] = useState(0);
    return () =>  setCount( (count)=>count+1)
}