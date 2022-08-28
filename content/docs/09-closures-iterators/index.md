
---
weight: 9
title: "9. Closures and Iterators"
---

## Return function from a function
A function result can also be a new function. This could be usefull when I dont want to immediatelly execute some code, but instead just provide a mechanism to create customized function to be evaluated later in my code.
Typically such a function doesn't have name, its called anonymous.

For example function makeCurrentTime returns a function, which has no parameters, and when called, it just returns what is in global string hardCodedTime. It could be used to mock current time for testing for example.

Please note that such a returned function can be immadiatelly called by providing parameters in brackets, so the calling code has two sets of brackets. First creates function and second calls it.

{{< lua >}}
function makeCurrentTime() 
  return function ()
    return hardcodedTime
  end
end

hardcodedTime = "12:15"
nowFunction = makeCurrentTime()
t = nowFunction()
print("The time is ", t)

hardcodedTime = "02:00"
nowFunction = makeCurrentTime()
t = nowFunction()
print("The time is ", t)

print("Concise call with extra brackets ",makeCurrentTime()())
{{< /lua >}}


## Access outer state from a closure function
The function returned from another function could also return local variable from the function where it is defined, this is possible due to mechanism called closure. The variables still have the value, even if the originating function has already returned and they values can be changed, providing different behaviour upon consequent closure function calls.

Please note that to keep closure's state we have to create closure function once, but can call it multiple times.

{{< lua >}}
function endlessIncreaser()
  local a = 0 
  return function ()
    a = a + 1
    return a
  end
end

increaser = endlessIncreaser()
print("calling endlessIncreaser() ", increaser())

print("calling endlessIncreaser() ", increaser())
{{< /lua >}}


## Lua iterators

Iterator is an interestring function, which could provide next value from a table, sequence, or based on completelly customized logic. In its nature it is abstraction which allows write even more complex way how to provide next value, which can be later reused by other code more easily.
Iterators in Lua are functions, which based on passed state generate next state.
For example endlessIncreaser used above is already an iterator. Later in [chapter 11-cycles-for-while-pairs/](/lua-tutorial/docs/11-cycles-for-while-pairs/) we will see concise way how to consume values created by iterators.