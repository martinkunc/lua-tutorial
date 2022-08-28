
---
weight: 6
title: "06. Arrays and tables"
---

### Lua Arrays
The Lua multi-purpose data type table is a base for Arrays. It is a collection of values with an index.
To create a new array, we can use brackets `{}`. Arrays can grow dynamically, because they are based on tables. To set or get a value on a specific index, we use
square brackets `[]` with index: `[1]` will return element at index 1 or nil if it doesn't exist. Arrays can start from 0 or 1 or any other value. It is a convention to start arrays at index 1 and Lua libraries follows this convention.
To insert a new value, we can assign new value to new index.
A new array can be initialized with a literal in brackets.

{{< lua >}}
a = {}
a[2] = 1
odd = {1, 3, 5, 7}
print(a[1], a[2])
print(odd[1], odd[2])
{{< /lua >}}

### Lua tables
Data Type Table can not only be used for arrays with an integer index, but this concept is broad in Lua world. Instead of using numeric index, the index can be a string (or any other value except nil), like this:

{{< lua >}}
a = {}
a["name"] = "Bob"
print(a["name"])
{{< /lua >}}

Tables are implemented as associative arrays in other languages it is known as Dictionaries or Maps. They string index is called also a key and it must be unique (like the numeric index).

Because Lua uses tables a lot, it allows to refer to keys in the table also using without square brackets, like this:
```
a.name = "Bob"
```
Tables are reference types, so assigning a table to another variable will reflect consequent changes on both places, because they are sharing same reference table.

{{< lua >}}
hobbit = {}
hobbit.name = "Bilbo"
invisibleHobbit = hobbit
print(invisibleHobbit.name)
{{< /lua >}}

Lua tables can be also used as records and table initialization supports also
construction with providing named fields. The table keys are also case sensitive. For example:

{{< lua >}}
person = {Name="John", Lastname = "Doe"}
print(person.Name, person.Lastname)
{{< /lua >}}


### Lua tables as packages
Lua uses tables to organize libraries loaded by require into packages. For example
math.pi refers to Pi value declared in library math, which is automatically loaded by Lua and added to global scope.

{{< lua >}}
print(math.pi)
{{< /lua >}}

### Lua table indexes as variables
Table keys, or indexes can be also evaluated from a variable. In next example, we store two different values to different keys based on actual k value.

{{< lua >}}
child = {}
k = "age"
child[k] = 5
k = "sleeping"
child[k] = true
print(child.age, child.sleeping)
{{< /lua >}}