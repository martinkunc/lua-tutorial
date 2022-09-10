
---
weight: 13
title: "13. While and repeat cycles"
---

## While cycle
In Lua, the `while` keyword is no surprise. It evaluates its invariant condition at the beginning and when its false, the cycle ends.

The syntax is:
```
while <condition> do
  statement
end
```

For example:

{{< lua >}}
local n = 10
local a = n
local b = 1
while a > 0 do
  b = b * a
  a = a - 1
end
print("Factorial of "..n.." is "..b)
{{< /lua >}}

When a number reaches maximal value, it becomes `inf` in Lua, that is maximal possible numeric value. It is defined as a constant in math.huge. Number will become `inf` when it is too large or when divided by zero.
Similar constant is `nan`, for Not a number, which is when result of operation is not numeric. It can be for example result of `0/0`

You can try to calculate factorial of 1000 and see what happens.



## Repeat cycle
Additionally, Lua has also cycle with condition at the end. The `repeat until` cycle. The syntax is:
```
repeat
  statement
until condition
```
The cycle's condition is evaluated after the execution of body, so the block is always executed at least once.
The condition introduced by until is as expected negation of valid state, which you would put in the `while-end` condition.

Example of factorial written using a `repeat until`:


{{< lua >}}
local n = 10
local a = n
local b = 1
repeat
  b = b * a
  a = a - 1
until a <= 0
print("Factorial of "..n.." is "..b)
{{< /lua >}}


## Break and return
If we want to exit from currently executing function, we can use `return`, which may return a result, however it is not required at the end of a function.

Occasionally we have a need to finish the cycles `for`, `while` or `repeat` before the whole block finishes.
We can use `break` statement, which exits the current block and continues right after it.

There is an important difference from other programming languages, that `break` or `return` can only be used as a last statement in the block before end. If we want however to finish a block in the middle, we have to place the `break` inside an extra `do` `break` `end` block.

This example will find a number in an array and breaks the `repeat` cycle when it does. Try to change n to something not in the array.

{{< lua >}}
function findnumber(n, numbers)
  local a = 0
  repeat
    if numbers[a] == n then 
      break 
    end
    a = a + 1
  until a > #numbers
  return a
end

local n = 5
local numbers = {4, 5, 7, 10}
i = findnumber(n, numbers)
if i > #numbers then 
  print("Number "..n.." hasn't been found")
else
  print("The number "..n.." is at "..i.."th position")
end
{{< /lua >}}
