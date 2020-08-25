---
kind: InterfaceDeclaration
name: FormattedMessageChain
module: compiler
---

# FormattedMessageChain

```ts
interface FormattedMessageChain {
  message: string;
  position?: Position;
  next?: FormattedMessageChain[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/formatted_error.ts#L17-L21)

## Properties

| Name     | Type                      | Description |
| -------- | ------------------------- | ----------- |
| message  | `string`                  |             |
| position | `Position`                |             |
| next     | `FormattedMessageChain[]` |             |
