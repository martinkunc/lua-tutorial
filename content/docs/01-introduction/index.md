

# Introduction

Lua is a simple and lightweight procedural language with automatic memory management. Because of its simplicity it could be learned in a week.

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
