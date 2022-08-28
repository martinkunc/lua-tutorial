
---
weight: 10
title: "10. Table Key value pairs"
---

## Key value pairs
We have mentioned that in table values are indexed by keys. Lua provides functions to return key and value from specific index as multiple results.

## Pairs and IPairs functions
The built-in functions `pairs` and `ipairs` works with tables. They provide iterators for all keys and values in the provided table.

The key difference is that 

`pairs` provides actual key and value

`ipairs` provides real index - a number on which index the value is in the table, but doesn't provide the key.

{{< lua >}}
a = {[1]="I", [2]="II", [3]="III"}
currentKey = 1
-- create iterator
iter, tableA = pairs(a)
currentValue = tableA[currentKey]
print("Before call to iterator")
print(currentKey, currentValue)

print("Calling iterator to get next key and value")
currentKey, currentValue = iter(tableA, currentKey)
print(currentKey, currentValue)
{{< /lua >}}

Please note, that the order of keys doesn't match the index. When we create the iterator and call it to provide next key after key *1*, we will get back
third element of our table. This is intended behaviour.

Also, to use iterator of pairs, we need to know some existing key, or the first one.


The following example gets iterator using ipairs and creates next index and value pair.

The problem with ipairs is that it can iterate the table only when keys are numbers, so it cannot be used with string keys.

{{< lua >}}
a = {[1]="I", [2]="II", [3]="III"}
firstKey, firstValue = ipairs(a)(a,0)
print(firstKey, firstValue)
firstKey, firstValue = ipairs(a)(a,firstKey)
print(firstKey, firstValue)
{{< /lua >}}
