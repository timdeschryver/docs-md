---
kind: ClassDeclaration
name: JsonPipe
module: common
---

# JsonPipe

## description

Converts a value into its JSON-format representation. Useful for debugging.

```ts
class JsonPipe implements PipeTransform {
  transform(value: any): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/json_pipe.ts#L26-L34)

## ngModule

CommonModule

## usageNotes

The following component uses a JSON pipe to convert an object
to JSON format, and displays the string in both formats for comparison.

{@example common/pipes/ts/json_pipe.ts region='JsonPipe'}

## publicApi

## Methods

### transform

```ts
transform(value: any): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/json_pipe.ts#L31-L33)

#### Parameters (#transform-parameters)

| Name  | Type  | Description                                               |
| ----- | ----- | --------------------------------------------------------- |
| value | `any` | A value of any type to convert into a JSON-format string. |
