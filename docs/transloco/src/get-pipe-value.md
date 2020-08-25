---
kind: FunctionDeclaration
name: getPipeValue
module: src
---

# getPipeValue

```ts
function getPipeValue(
  str: string,
  value: string,
  char = "|"
): [boolean, string];
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/shared.ts#L42-L50)

## example

getPipeValue('todos|scoped', 'scoped') [true, 'todos']
getPipeValue('en|static', 'static') [true, 'en']
getPipeValue('en', 'static') [false, 'en']

## Parameters

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| str   | `string` |             |
| value | `string` |             |
| char  | `string` |             |
