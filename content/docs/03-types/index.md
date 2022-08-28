
---
weight: 3
title: "03. Types"
---

# Lua variable types
Lua is dynamically typed language, so any variable will have type based on value
assigned to it.

Lua has eight basic types: number, string, boolean, table, userdata, function, thread and nil.

### Numbers
Numbers in Lua are only double precision floating point numbers, it doesn't have
integer numbers. Numbers can be specified also using scientifiec notation:
{{< lua >}}
print(3, 3.14, 314e-2)
{{< /lua >}}

### Booleans
Booleans can be either true or false.

### Strings
String values are created with either double or single quotation marks. Strings in LUA are immutable, so characters inside string cannot be changed once a string is created, but you can create a new string with the change.
Lua doesn't have specific character type for single character.
To insert a quotation mark inside a string you can use backslash escape character and there are few other escape characters as well:
{{< lua >}}
print("backslash \\")
print("new \n line")
print("double quotas\"")
{{< /lua >}}


### Tables
A table is a collection of values in a variable with an index. In other programming languages it is called Array, Dictionary or Map.
To create a new array we use brackets like this:
```
array = {}
```

It is important to mention that in Lua, tables by convention starts from one. Strings starts from 1, unlike from zero like in many other languages.

{{< lua >}}
a = 'text'
b = 123
c = {5}
print("String ",a)
print("Number ", b)
print("Table value at index 1", c[1])
{{< /lua >}}

## Userdata and threads
Userdata are typically used to transfer custom data from C Api. Thread is a operating system concept to start some subprogram with concurrent execution, for example play some music while program is running.

## Type operator
Built in function type can return string identifying the type of variable passed as an argument.

{{< lua >}}
print(type("Hello world"))  --> string
print(type(10.4*3))         --> number
print(type(print))          --> function
print(type(type))           --> function
print(type(true))           --> boolean
print(type(nil))            --> nil
print(type(type(X)))        --> string
{{< /lua >}}

