# Custom React Hooks

Tested reusable custom React hooks in Typescript.

## useToggle

useToggle will default to false on initialization, unless provided a initial boolean value. It will return an tuple array `[value, toggleValue]` of the value, and a callback function. The value will be true or false, and the function can set the value to true, false, or if not passed a value it wll toggle the value from the opposite of the current value.

### Call the hook as true, default is false if no value is passed...

`const [value, toggleValue] = useToggle(true)`

### Toggle current value from true to false, or vice versa...

`toggleValue()`

### Set the value to false...

`toggleValue(false)`

### Set the value to true...

`toggleValue(true)`
