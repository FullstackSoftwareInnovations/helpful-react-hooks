import {useEffect} from "react";


export function useClickAway(callback, ref) {
    useEffect(() => {
        /*
         * Use callback function when the target of the the click is not a child of the current React component
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback()
            }
        }

        // Bind the clickOutside event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Unbind the event listener on clean up
        return () => { document.removeEventListener("mousedown", handleClickOutside) };
    }, [ref]);

    return ref
}