---
kind: InterfaceDeclaration
name: Span
module: language-service
---

# Span

## description

The range of a span of text in a source file.

```ts
interface Span {
  start: number;
  end: number;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/language-service/src/symbols.ts#L18-L30)

## publicApi

## Properties

| Name                        | Type     | Description                                                                                    |
| --------------------------- | -------- | ---------------------------------------------------------------------------------------------- |
| start                       | `number` | The first code-point of the span as an offset relative to the beginning of the source assuming |
| a UTF-16 encoding.          |
| end                         | `number` | The first code-point after the span as an offset relative to the beginning of the source       |
| assuming a UTF-16 encoding. |
