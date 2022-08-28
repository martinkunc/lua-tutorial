
---
weight: 5
title: "05. String functions"
---

# Multiline string literals
To set even very long strings, the literal can be placed among two square brackets [[...]].
{{< lua >}}
html = [[
    <html>
    <body>
    <h1>Title</h1>
    </body>
    </html>
]]
print(html)
{{< /lua >}}

### String conversion
Whenever a string is used in an expression together with a number, Lua will attempt to convert string to its numerical value so that expression could have
been evaluated. When this is not expected, it can lead to misleading result.
{{< lua >}}
print("10"*2)
print("1"+"2")
{{< /lua >}}

Please note that equality check with `==` will return false, because types doesn't match.
{{< lua >}}
print("1" == 1)
{{< /lua >}}


When this doesn't succeed, it produces an Error.
{{< lua >}}
print("one"+2)
{{< /lua >}}

### Concatenation with `..`
For concatenate (join) two strings in a new string, use two dots `..`. This will prevent string conversion. Please note that used after a number, it needs to be separated by a space to distinguish it from a decimal point. Following code mixes
non-space separated concatenation with separated for use after a number.
{{< lua >}}
print("Day: "..1)
print(type(1 .. 23 .. 45))
{{< /lua >}}

### Convert to number with `tonumber`
To convert a string to a number, use `tonumber`. The function results in `nil` when the parameter is not a number.
{{< lua >}}
print(type("123"))
print(type(tonumber("456")))
print(tonumber("two"))
{{< /lua >}}

### Get length of a string with `#` or len
To find the number of characters in a string, Lua has special operator `#` used before the string. The followign example prints 3.
```
length = #"abc"
print(length)
```

The string library also defines metafunction `__len` for `string`. We will conver metafunctions later. The use is `stringVar:len()` or `stringVar.len(stringVar)` or 
`string.len(stringVar)`.
{{< lua >}}
s = "abc"
length1 = #s
length2 = s.len(s)
length3 = string.len(s)
print(s, length1, length2, length3)
{{< /lua >}}
