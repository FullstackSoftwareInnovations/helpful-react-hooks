# helpful-react-hooks

> Some helpful hooks that I've found myself copying between projects

# Install

```bash
npm install helpful-react-hooks
```


# Hooks
### useClickAway(callback: function, ref)
Callback function is run when the target of the click event is not a child of the ref React component

### useHover(ref)
Returns true when the mouse is hovered over the ref component, false when it is not hovered

### useForceUpdate()
Returns a function that, when called, forces the component to re-render

### useOnWindowResize()
Returns \[winHeight, winWidth\] when the browser window resizes

### useSyncWithFluxStores(stores: ReduceStore<any, any>[])
Takes an array of Flux ReduceStores as input. When any of these stores are updated, the component will
re-render. Useful for not having to pass store state as a prop through the parent tree.



# License

MIT © [FullstackSoftwareInnovations](https://github.com/FullstackSoftwareInnovations)
