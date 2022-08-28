---
weight: 4
title: "04. Chunks and require"
---

# Code chunks
Lua executes its code in blocks of statements, called chunks. Lua interpreter can execute statement from interactive mode, or load the chunk from a file.
Lua interpreter compiles the statements to a byte code, which is then executed.

You can execute a statement directly as parameter of Lua interpreter using -e switch like this:
```
lua -e "print('Hello world')"
```

Lua chunk can be a file with .lua extension, created in any text editor. After
saving it can be executed in the lua interpreter using -l command line switch.
For example:

```
lua -l helloworld.lua
```
Note: space after -l is optional.


Because the file is just one of chunks executed by Lua interpreter, you can execute many of chunks from different files using.

For example, when you have file file1.lua with content:
```
s = "Hello world"
```
and another file file2.lua with content:

```
print(s)
```

Then you can load both chunks (Lua will use require) and last switch "-e" will make Lua interpreter exit after printing content of variable set in first chunk.
```
% lua -lfile1 -lfile2 -e "os.exit(1)"
Hello world
```


## Require statement
Because chunks of statements might need another file or a lua module, Lua has function require. It tries to find the file in Lua Path and if it wasn't loaded yet, it loads it.
Now, lets consider we still have file1.lua which sets variable s to "Hello World". We can create another file, for example called use_file1.lua with content:
```
require("file1")
print(s)
```
Where the require function checks if module "file1" is already loaded, eventually loads it. The consequent print will reuse the defined variable and prints its content, so that output of this command will be Hello World.
The command to execute with output:
```
% lua -l use_file1 -e "os.exit(1)"
Hello world
```
Please note, that when loading a module with -l or require function, we dont specify the .lua extension. It is because of how Lua is resolving modules.

Lua first check if environment variable LUA_PATH exists, if it does, tries to extract path patterns from it.
The file patterns is a list of paths to search for modules where ? can be used instead of part of file name.
Standard paths which Lua searches in can be printed by:
```
% lua -e "print(package.path)"
/usr/local/share/lua/5.4/?.lua;/usr/local/share/lua/5.4/?/init.lua;/usr/local/lib/lua/5.4/?.lua;/usr/local/lib/lua/5.4/?/init.lua;./?.lua;./?/init.lua
```
It is semicolon separated list of patterns. Most interestring is "./?.lua" which searches for file name specified in require (instead of ?) with .lua extension in current working directory.

## Dofile function
Similarly to require, dofile is a function which loads chunk of statements. But it doesn't search for file in Lua Path. Because of this, extension is required. Also, dofile doesn't check whether the file was loaded and loads it again always.

To execute same two chunks as we used above, we can use dofile like this:
```
% lua -e "dofile('file1.lua') dofile('file2.lua') os.exit(1)"
Hello world
```


