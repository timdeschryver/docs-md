---
kind: FunctionDeclaration
name: ɵsplitBlock
module: localize
---

# ɵsplitBlock

## description

Split a message part (`cooked` + `raw`) into an optional delimited "block" off the front and the
rest of the text of the message part.

Blocks appear at the start of message parts. They are delimited by a colon `:` character at the
start and end of the block.

If the block is in the first message part then it will be metadata about the whole message:
meaning, description, id. Otherwise it will be metadata about the immediately preceding
substitution: placeholder name.

Since blocks are optional, it is possible that the content of a message block actually starts
with a block marker. In this case the marker must be escaped `\:`.

```ts
function splitBlock(
  cooked: string,
  raw: string
): { text: string; block?: string };
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/localize/src/utils/src/messages.ts#L234-L244)

## Parameters

| Name   | Type     | Description                                      |
| ------ | -------- | ------------------------------------------------ |
| cooked | `string` | The cooked version of the message part to parse. |
| raw    | `string` | The raw version of the message part to parse.    |

## returns

An object containing the `text` of the message part and the text of the `block`, if it
exists.

## throws

an error if the `block` is unterminated
