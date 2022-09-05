
---
weight: 7
title: "07. If condition and operators"
---

### If condition
To introduce logical decision to your Lua program, we can use if condition, which is very similar to how it works in other programming languages.

Its basic form is
```
if <condition> then statement end
```
This form evaluates the condition, which can be logical or relational expression and when it is evaluated as true, executes one or more statements after then keyword.

It might also have else branch, which has the form of:
```
if <condition> then statement else other_statement end
```
where the part after else is executed only when the condition is false.

And finally when we would need to evaluate multiple different cases, we could use elseif form in form format:
```
if <condition> then 
  statement 
elseif <another_condition> 
  other_statement 
else
  another_statement
end
```
This syntax will evaluate elseif branch when first condition didnt' succeeded and when another_condition is true, executes its block. It might have multiple elseif branches (and their order is significant).
Please note that multiple branches doesn't close with `end`, only the whole statement does.

Finally there can be only one else, which executes in all cases where if or elseif conditions weren't true.

### Arithmetic operators
To evaluate any arithmetic expression, we can use usual operators `+`, `-`, `*` and `/` and unary `-`. Additionally, it has n-th power operator `^` used like `square = side^2` or `side = square^(1/2)` and obviously brackets. The precedences are following usual BIDMAS predecences.
Additionally, Lua supports modulo, (the remainder after division) `%` with syntax `evenModulo = n%2` evaluating to 0 for even and 1 for odd n.

### Relational operators
Also usual relational operators `<`, `>`, `<=`, `>=` are supported. Relational equals is `==` and not equals has unusual `~=`.

We can use relational operators with any types. If they don't match, Lua considers them not to be equal.

Special case is the `nil` type, which is not equal to anything except other `nil`.

When comparing two reference types like tables, userdata and functions, Lua compares their reference, so they are only equal if they points to the same object.

The strings are compared by alphabetical order (with currently set locale). Other types like tables, userdata and functions can only be compared for equality or nonequality.

Special cases are when comparing mixed types. For example `"1"==1` is false because of different types, and `"10"<"2"` is true because it uses lexical comparism.

In contract to equals or non equals, which can be used to any types, Lua will result in an error when we attempt to use other relational operators, like `>` or `<` with incompatible types, like in this case: `"1" < 2`.


### Logical operators
Lua has well know logical operators `and`, `or` and `not`. They behave differently based on context how they are used.

When they are used as logical expression (evaluating true or false values), they result in true or false, but then they are used as statements, they return values from left or right side based on result of the evaluation.

`Not` has the highest precedence, `and` has lower precedence and `or` has it lowest.

The operator `and` when evaluated as non logical expression, returns its first argument when whole expression is false and when its true it returns the second argument.

The `or` operator when used as logical expression returns its first argument when the expression is not false, and when it is false, returns its second argument.

In Lua, `false` or `nil` are considered `false` and anything else is considered `true`.

{{< lua >}}
if true and false then print('never prints') end
if true then print('always prints') end

-- false and anything is false
-- so returns first argument false
print(false and 123) 

-- nil and anything is false
-- so returns first argument nil
print(nil and 123) 

-- number and other number is true
-- so returns second argument 2
print(1 and 2) 

-- false and anything is false
-- so or returns second argument 2
print(false or 2) 

-- nil and anything is false
-- so or returns second argument 2
print(nil or 2) 

-- anything else then nil or false is true
-- so or returns first argument 1
print(1 or 2) 

{{< /lua >}}


Usual construction relying on `nil` being false is specifying default value using expression `value or default` if an variable has initial `nil` value with syntax:

{{< lua >}}
-- nil or false are false
a = nil
v = a or 10
print(v) -- prints 10

a = false
v = a or 10
print(v) -- prints 10

-- or of not false returns first argument
a = 5
v = a or 10
print(v) -- prints 5
{{< /lua >}}

Because anything else than nil or false is true, the actual expression
`A and B` can be used to return B only when expression A is true.

The logical expression evaluation is also used for ternary operator in Lua.
The idea is that expression `(a and b) or c` or because and has higher priority, it can be simplified as:
```
a and b or c
```

is an equivalent to 
```
a ? b : c
```
for example:
```
max = (x > y) and x or y
```

This is because `x > y` is boolean expression and `and` results in first argument (true or false) when any logical expression `and` anything results in first argument. That used as left side of `or` makes it return its left side (x here) when it is not false.

The `not` operator always results in true or false.

Example of `if` statement with multiple branches:

{{< lua >}}
a = 18
if a < 18 then print("Teenager")
elseif a >= 18 and a < 65 then print("Adult")
else print ("Senior person")
end
{{< /lua >}}