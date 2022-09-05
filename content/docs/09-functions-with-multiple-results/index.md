
---
weight: 9
title: "09. Functions with multiple results"
---

## Functions with multiple results
In Lua, function can return none, one, or even multiple return values. It is not the same as if function returns a table, here its results are stored directly to
result variables after the call.
For example hypothetical function to attempt to withdraw money could result in either whole amount, or just a portion of requested cash and an boolean indication
that not whole requested value was returned. Our function for simplicity always results in true.

{{< lua >}}
function TryWithdrawMoney(m)
  return m, true
end

amount, success = TryWithdrawMoney(100)
print(amount, success)
{{< /lua >}}

Lua changes behaviour of how multiple results are being used, depending into
how many result variables the result is assigned to match the expected count.
For example following code will fill result based on produced number of results and the rest will be nil.

{{< lua >}}
function Produce0()
  return
end

function Produce1()
  return "a"
end

function Produce2()
  return "a", "b"
end

x,y,z = Produce0()
print(x,y,z)

x,y,z = Produce1()
print(x,y,z)

x,y,z = Produce2()
print(x,y,z)
{{< /lua >}}

Similarly, we can combine the multiple results producing function with multiple results assignment.

{{< lua >}}
function Produce0()
  return
end

function Produce1()
  return "a"
end

function Produce2()
  return "a", "b"
end

x,y,z = 1, 2, Produce0()
print(x,y,z)

x,y,z = Produce1()
print(x,y,z)

x,y,z = Produce1(), 1, 2
print(x,y,z)
{{< /lua >}}

There is a convention in Lua, if function returns value, which I don't want to use we assign it to variable underscore `_`.

### Create multiple results from an array
Lua's `unpack` function can accept an array as argument and returns the values are multiple value results. Following with fill result variables:

{{< lua >}}
x,y,z = unpack({1, 2, 3})
print(x,y,z)
{{< /lua >}}

### Calling function with multiple parameters
When a function has multiple parameters, we can also use `unpack` to deconstruct its array argument into the parameters for the function:

{{< lua >}}
function add(a, b) return a+b end
a = {1,2}
print(add(unpack(a)))
{{< /lua >}}
