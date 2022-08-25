


# Lua variable types
Lua is dynamically typed language, so any variable will have type based on value
assigned to it.

Lua has eight basic types: number, string, boolean, table, userdata, function, thread and nil.

Numbers can be whole numbers or numbers floating point numbers.
Booleans can be either true or false.
String values are created with either double or single quotation marks.

{{< lua >}}
s = "Hello Lua"
print(s)
b = 3.14
print("pi is ")
print(b)
{{< /lua >}}

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

