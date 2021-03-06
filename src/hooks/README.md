# useToggle

useToggle will default to false on initialization, unless provided a initial boolean value. It will return an tuple array `[value, toggleValue]` of the value, and a callback function. The value will be true or false, and the function can set the value to true, false, or if not passed a value it wll toggle the value from the opposite of the current value.

### **Call the hook as true, default is false if no value is passed...**

`const [value, toggleValue] = useToggle(true)`

### **Toggle current value from true to false, or vice versa...**

`toggleValue()`

### **Set the value to false...**

`toggleValue(false)`

### **Set the value to true...**

`toggleValue(true)`

<br/>

# useTimeout

useTime takes 2 arguments, the first is the function you would like to run after the the delay, the second is the delay in milliseconds. It returns a object with clear, and rest functions to clear, or reset the timeout.

### **To call the hook...**

`const { clear, reset } = useTimeout(() => callback(), 1000)`

### **To clear timeout...**

`clear()`

### **To reset timeout...**

`reset()`

<br/>

# useDebounce

useDebounce to add a delay to a action after stopping interaction. I.E. after typing into a search field add a delay after stopping typing to call an API.

there's 3 arguments, the first is the function to delay, the second is the delay in milliseconds, and the third is the dependencies which will reset the timer.

### **To call the hook...**

`useDebounce(() => callAPI, 1000, [searchFieldInput])`

# useUpdateEffect

useUpdateEffect will only run on update of the dependencies, not on first mount.

takes two arguments, the function to only run on update, and an array of dependencies.

### **To call the hook...**

`useUpdateEffect(callback(variable), [variable])`

# useArray

useArray to work with arrays in useState and updating to the DOM.

To init it defaults to an empty array, or takes an array as an input, and returns a selection of helper functions.

### **To call the hook...**

`const { array, set, clear, filter, push, remove, update } = useArray([1, 2, 3, 4, 5, 6, 7,]);`

### **set**

sets the array to a new value.
`set([4,3,2,1])`

### **clear**

clears the array to an empty array

### **filter**

array filter function. add the callback function to filter.
`filter(n => n < 4)`

### **push**

add a new element to the end of the array.
`push('hello world)`

### **remove**

remove the element at the given index.
`remove(2)`

### **update**

update the element in the array of the given index.
`update(2, 'fo')`

# useAxios

Fetch data from external API with axios, and cache stores it using useSWR.

returns an object with data, error, isValidating, mutate.

### **To call the hook...**

`const {data, error, isValidating, mutate } = useAxios(url)`

# usePrevious

usePrevious hook stores the previous state and returns it.

### **To call the hook...**

`const previous = usePrevious(value)`

# useStorage

useStorage hook stores the data in local, or session storage. It takes a key as a string argument, and a default value as a string. The hook will search the storage the key in storage for a value and return if it there is one, otherwise it will use the default value.

If you want to store an object then use JON.stringify, and JON.parse to send a string to the hook.

return a tuple of [string, setState function, and a remove function].

### **To call the hook...**

`const [name, setName, removeName] = useSessionStorage("name", "foo")`
`const [age, setAge, removeAge] = useLocalStorage("age", "40")`

# useStateWithHistory

useStateWithHistory hook stores the history of the state in an array. It takes two arguments, the first is the default value, and the second is a capacity which will default to 10.

return a tuple of [Generic, (Generic) => void, functions object].

### **To call the hook...**

`const [count, setCount, { back, forward, go, history, pointer }] =useStateWithHistory(3, 5);`

### **back**, **forward**, & **go**

move back, and forward through the history. The go function needs passing a number for the index you'd like to go too.

`back()`

`forward()`

`go(3)`

### **history**, & **pointer**

history is an array of the state history, pointer is where the current state is at i the history.

# useDeepCompareEffect

useEffect but with a better comparison of the dependencies. So if a object is has the same values it will not rerender the component. Unlike useEffect that rerenders the component if the object is a new reference but the same data.

### **To call the hook...**

`useDeepCompareEffect(() => { functions to run }, [dependencies]);`
