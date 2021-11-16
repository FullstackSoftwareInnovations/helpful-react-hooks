import {useForceUpdate} from "./useForceUpdate";
import {ReduceStore} from 'flux/utils';
import {useEffect} from "react";


export function useSyncWithFluxStores(stores: ReduceStore<any, any>[]){
    const update = useForceUpdate();

    useEffect(()=>{
        const handles = stores.map((store)=> store.addListener(update))
        update();
        return () => {
            handles.map(handle => handle.remove())
        }
    }, [])
}