
---
weight: 12
title: "12. For Cycle"
---

## Cycle structures
Similarly to other languages Lua has statement for controlling repetitive cycle which might have a variable to drive it and a condition at the beginning or end of the cycle.

## For cycle
Lua has two types of `for` cycles, numeric `for` and generic `for`.

### Numeric for cycle
To execute some statement several times, without for cycle we would need to declare variable with initial value, adjust the variable for next value up the the maximal range and execute the defined block.

For cycle has following form, where newly declared local variable `i` will have values from 1 to 3 (inclusive).

{{< lua >}}
for i=1, 3 do
  print("*", i)
end
{{< /lua >}}

In this form, variable is incremented by one and if we want different increment, we can add it after the end of range. In this form, cycle will start with 3 and decrease down up to 1.
{{< lua >}}
for i=3, 1, -1 do
  print("*", i)
end
{{< /lua >}}

### Generic for cycle
In Lua, generic for cycle is for iterating over iterators. The most common
use case is to iterate over tables using function `pairs` or `ipairs`, which are providing built in iterators over tables.
The syntax is as following:

{{< lua >}}
a = {January=31,February=28, March=31}
for k, m in pairs(a) do
  print(k.." has "..m.." days")
end
{{< /lua >}}

The `ipairs` is a limited variant, which doesn't work on tables where keys aren't numbers. It returns key (index) and value to the table.

{{< lua >}}
suffixes = {[1]="st",[2]="nd",[3]="rd"}

a = {[1]="January",[2]="February",[3]="March"}
for i, v in ipairs(a) do
  print(i.." "..suffixes[i].." month is "..v)
end
{{< /lua >}}

The biggest advantage of generic for is that it can be used with any custom iterator function, which makes consuming iterators quite straightforward.

We could use function iterator `limitedIncreaser` which returns iterator which returns values from zero to the maximal value passed as its argument generic `for` this way:

{{< lua >}}
function limitedIncreaser(max)
  local a = 0 
  return function ()
    a = a + 1
    if (a )
    return a
  end

for v in endlessIncreaser() do
  print(k.." has "..m.." days")
end


end

{{< /lua >}}

