
---
weight: 7
title: "07. Functions, local and global scope"
---

## Functions
Instead of repeating some code block, or calling a dofile multiple times, we can use a function, which is an abstraction to structure a block of code.

These blocks are the same, except the variable n
{{< lua >}}
n = "Alice"
s = "Hi, my name is " .. n
print(s)

n = "Bob"
s = "Hi, my name is " .. n
print(s)
{{< /lua >}}

It can be extracted into a `function` and give it a name SayHello and parameter n
Because the functions contain multiple statements we need to use `end` keyword to indicate end of function.
Function starts with function keyword, then its name and in parenthesis can be list of parameters for it.
{{< lua >}}
function SayHello(n)
  s = "Hi, my name is " .. n
  print(s)
end
{{< /lua >}}
Note: We will cover anonymous functions later.

If we execute this block alone, nothing will happen, because we have only declared (specified) the function and its statements, but we didn't started it from anywhere. To call a function, we just type its name and within parenthesis provide a value for the parameters.
{{< lua >}}
function SayHello(n)
  s = "Hi, my name is " .. n
  print(s)
end
SayHello("Alice")
SayHello("Bob")
{{< /lua >}}

## Local variables
Actually the variable `s` in our function is a `global` variable. It means that it shares the value with the rest of the code even outside of the function block.
That could lead to some unexpected variable changes when code is more complex.
Instead, we can isolate variable to be only defined in the block of code. To do it,
when we declare the variable we prefix it with `local`. For example:
```
local s = "Hi, my name is" .. n
```
Such a variable then won't even exist outside of the function block, in the main program, or in another function.
It is beneficial to use local variable as much as possible to prevent the variable clashes, but in Lua it needs to be explicitly expressed. 

## Global variables and global scope
If the `local` prefix is missing, the variable is considered global, which means it is shared among all blocks.
The program which is not in any block is called global scope, in contrast code inside a function or other blocks is called local scope.
Variables declared with local prefix exists only it its scope.

If you look at following code, you will see that variable s is at first outside of function. It wasn't declared there, so at first it is `nil`.
Later, from global scope we call function SayHello with parameter Alice, which sets variable from global scope to "Hi, my name is Alice" and because it is global scope variable, it will change its value even in main program and this texts is printed out.
{{< lua >}}
print("Variable s in the beginning : ",s)
function SayHello(n)
  s = "Hi, my name is " .. n
  print(s)
end
SayHello("Alice")
print("Variable s after SayHello(Alice) : ",s)
SayHello("Bob")
print("Variable s after SayHello(Bob) : ",s)
{{< /lua >}}

## Lua Global scope table
In Lua, The global scope variables and functions are stored in special built-in table, called underscore G `_G`. For example we can access global variable directly throught the `_G` using:
{{< lua >}}
name = "Jack"
age = 51
print(_G.name, _G.age)
{{< /lua >}}
