---
kind: FunctionDeclaration
name: ɵfindEndOfBlock
module: localize
---

# ɵfindEndOfBlock

## description

Find the end of a "marked block" indicated by the first non-escaped colon.

```ts
function findEndOfBlock(cooked: string, raw: string): number;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/localize/src/utils/src/messages.ts#L260-L273)

## Parameters

| Name   | Type     | Description                                                 |
| ------ | -------- | ----------------------------------------------------------- |
| cooked | `string` | The cooked string (where escaped chars have been processed) |
| raw    | `string` | The raw string (where escape sequences are still in place)  |

## returns

the index of the end of block marker

## throws

an error if the block is unterminated
