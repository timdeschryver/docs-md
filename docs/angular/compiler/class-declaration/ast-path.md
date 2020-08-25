---
kind: ClassDeclaration
name: AstPath
module: compiler
---

# AstPath

## description

A path is an ordered set of elements. Typically a path is to a
particular offset in a source file. The head of the list is the top
most node. The tail is the node that contains the offset directly.

For example, the expression `a + b + c` might have an ast that looks
like:

- / \
  a +
  / \
  b c

The path to the node at offset 9 would be `['+' at 1-10, '+' at 7-10, 'c' at 9-10]` and the path the node at offset 1 would be
`['+' at 1-10, 'a' at 1-2]`.

```ts
class AstPath<T> {
  parentOf(node: T | undefined): T | undefined;
  childOf(node: T): T | undefined;
  first<N extends T>(ctor: { new (...args: any[]): N }): N | undefined;
  push(node: T);
  pop(): T;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ast_path.ts#L26-L60)

## license

Copyright Google LLC All Rights Reserved.

Use of this source code is governed by an MIT-style license that can be
found in the LICENSE file at https://angular.io/license

## Methods

### parentOf

```ts
parentOf(node: T|undefined): T|undefined;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ast_path.ts#L39-L41)

#### Parameters (#parentOf-parameters)

| Name | Type | Description |
| ---- | ---- | ----------- |
| node | `T`  |             |

### childOf

```ts
childOf(node: T): T|undefined;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ast_path.ts#L42-L44)

#### Parameters (#childOf-parameters)

| Name | Type | Description |
| ---- | ---- | ----------- |
| node | `T`  |             |

### first

```ts
first<N extends T>(ctor: {new(...args: any[]): N}): N|undefined;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ast_path.ts#L46-L51)

#### Parameters (#first-parameters)

| Name | Type                        | Description |
| ---- | --------------------------- | ----------- |
| ctor | `new (...args: any[]) => N` |             |

### push

```ts
push(node: T);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ast_path.ts#L53-L55)

#### Parameters (#push-parameters)

| Name | Type | Description |
| ---- | ---- | ----------- |
| node | `T`  |             |

### pop

```ts
pop(): T;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ast_path.ts#L57-L59)
