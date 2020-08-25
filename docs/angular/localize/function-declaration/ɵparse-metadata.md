---
kind: FunctionDeclaration
name: ɵparseMetadata
module: localize
---

# ɵparseMetadata

## description

Parse the given message part (`cooked` + `raw`) to extract the message metadata from the text.

If the message part has a metadata block this function will extract the `meaning`,
`description`, `customId` and `legacyId` (if provided) from the block. These metadata properties
are serialized in the string delimited by `|`, `@@` and `␟` respectively.

(Note that `␟` is the `LEGACY_ID_INDICATOR` - see `constants.ts`.)

For example:

```ts
`:meaning|description@@custom-id``:meaning|@@custom-id``:meaning|description``description@@custom-id``meaning|``description``@@custom-id``:meaning|description@@custom-id␟legacy-id-1␟legacy-id-2`;
```

```ts
function parseMetadata(cooked: string, raw: string): MessageMetadata;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/localize/src/utils/src/messages.ts#L195-L212)

## Parameters

| Name   | Type     | Description                                      |
| ------ | -------- | ------------------------------------------------ |
| cooked | `string` | The cooked version of the message part to parse. |
| raw    | `string` | The raw version of the message part to parse.    |

## returns

A object containing any metadata that was parsed from the message part.
