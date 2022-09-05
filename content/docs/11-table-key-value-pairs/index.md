
---
weight: 11
title: "11. Table Key value pairs"
---

## Key value pairs
We have mentioned that in table values are indexed by keys. Lua provides functions to return key and value from specific index as multiple results.

## Pairs and IPairs functions
The built-in functions `pairs` and `ipairs` works with tables. They provide iterators for all keys and values in the provided table.

The key difference is in result which each iterator returns

`pairs` creates iterator which provides current key and value 

`ipairs` provides two results, the current key (index) in the table and also the value on the key in the table

### Stateless and statefull iterators
Both pairs and iparis are examples of stateless operators. That means there is no hidden state and its execution is entirely driven by provided control variable (current key).

Example of statefull operator is shown in chapter [09. Closures and Iterators](/lua-tutorial/09-closures-iterators) in function `endlessIncreaser`, which remembers its state and doesn't require control variable.


Stateless iterators have to continue from a certain point in the collection so to obtain next value from an iterator we need to provide it the current value.
Usually the next returned value then becomes new current value.

To find the first item, initial iterator can be called without the current state and that is why number of arguments to `iter` differs in first call here: 

{{< lua >}}
a = {[1]="I", [2]="II", [3]="III"}
-- create iterator
iter = pairs(a)

print("Calling iterator first time ")
currentKey, currentValue = iter(a)
print(currentKey, currentValue)

print("Calling iterator second time")
currentKey, currentValue = iter(a, currentKey)
print(currentKey, currentValue)

print("Calling iterator third time")
currentKey, currentValue = iter(a, currentKey)
print(currentKey, currentValue)

print("Calling iterator fourth time")
currentKey, currentValue = iter(a, currentKey)
print(currentKey, currentValue)
{{< /lua >}}

Please note, that the order of keys is not guarantueed to match the constructor. If we would need the ordered enumeration, we would need to iterate over the index.


The following example gets iterator using `ipairs` and creates next index and value pair.

The problem with ipairs is that it can iterate the table only when keys are numbers, so it cannot be used with string keys.

Another limitation of ipairs is that you have to provide it with initial key, but that is returned as third result of `ipairs`.

The second result `state` is the invariant table being used to iterate over. This is usefull when the state of iteration is complex, so that the iterator can create control table with state, which would use to drive iterations together with control variable.

{{< lua >}}
a = {[1]="I", [2]="II", [3]="III"}

iter, state, initial = ipairs(a)

nextKey, nextValue = iter(a,initial)
print("1st call Key ", nextKey," value ", nextValue)

nextKey, nextValue = iter(a,nextKey)
print("2nd call Key ", nextKey," value ", nextValue)

nextKey, nextValue = iter(a,nextKey)
print("3nd call Key ", nextKey," value ", nextValue)

nextKey, nextValue = iter(a,nextKey)
print("4th call Key ", nextKey," value ", nextValue)

{{< /lua >}}
