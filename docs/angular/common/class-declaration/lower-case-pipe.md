---
kind: ClassDeclaration
name: LowerCasePipe
module: common
---

# LowerCasePipe

## description

Transforms text to all lower case.

```ts
class LowerCasePipe implements PipeTransform {
  transform(value: string): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/case_conversion_pipes.ts#L27-L39)

## see

`UpperCasePipe`
`TitleCasePipe`

## usageNotes

The following example defines a view that allows the user to enter
text, and then uses the pipe to convert the input text to all lower case.

<code-example path="common/pipes/ts/lowerupper_pipe.ts" region='LowerUpperPipe'></code-example>

## ngModule

CommonModule

## publicApi

## Methods

### transform

```ts
transform(value: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/case_conversion_pipes.ts#L32-L38)

#### Parameters (#transform-parameters)

| Name  | Type     | Description                            |
| ----- | -------- | -------------------------------------- |
| value | `string` | The string to transform to lower case. |
