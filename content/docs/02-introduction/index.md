
---
weight: 2
title: "02. Introduction"
---

## Variables
Variable is a simple container for values. It can be assigned a value with = operator.
Special value for empty value is nil, which signifies no value.
For efficiency, you might want to assign nil to variable after its use to remove its previous value.
{{< lua >}}
s = "Hello Lua"
a = 10
print(s, a)
{{< /lua >}}

## Printing value of variables
Lua has few built-in functions. To print a numeric or string value or a variable we can use function print().

A single statement doesn't have to end with a semicolon, but you can be use it separate two statements on the same line, even though it is also optional.


{{< lua >}}
s = "Pi is"
p = 3.14
print(s, p)
{{< /lua >}}

## Comments
Comments in Lua can be either single line, when a line starts with two dashes `--`.
When a comments needs to span multiple lines, it can be placed among `--[[  ]]`.

{{< lua >}}
-- There wont be any output here
--[[
print("multiple")
print("lines")
]]
{{< /lua >}}
