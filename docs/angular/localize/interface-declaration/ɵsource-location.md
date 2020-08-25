---
kind: InterfaceDeclaration
name: ɵSourceLocation
module: localize
---

# ɵSourceLocation

## description

The location of the message in the source file.

The `line` and `column` values for the `start` and `end` properties are zero-based.

```ts
interface SourceLocation {
  start: { line: number; column: number };
  end: { line: number; column: number };
  file: AbsoluteFsPath;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/localize/src/utils/src/messages.ts#L47-L51)

## Properties

| Name  | Type                                | Description |
| ----- | ----------------------------------- | ----------- |
| start | `{ line: number; column: number; }` |             |
| end   | `{ line: number; column: number; }` |             |
| file  | `any`                               |             |
