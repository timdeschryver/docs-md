---
kind: ClassDeclaration
name: TitleCasePipe
module: common
---

# TitleCasePipe

## description

Transforms text to title case.
Capitalizes the first letter of each word and transforms the
rest of the word to lower case.
Words are delimited by any whitespace character, such as a space, tab, or line-feed character.

```ts
class TitleCasePipe implements PipeTransform {
  transform(value: string): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/case_conversion_pipes.ts#L70-L84)

## see

`LowerCasePipe`
`UpperCasePipe`

## usageNotes

The following example shows the result of transforming various strings into title case.

<code-example path="common/pipes/ts/titlecase_pipe.ts" region='TitleCasePipe'></code-example>

## ngModule

CommonModule

## publicApi

## Methods

### transform

```ts
transform(value: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/case_conversion_pipes.ts#L75-L83)

#### Parameters (#transform-parameters)

| Name  | Type     | Description                            |
| ----- | -------- | -------------------------------------- |
| value | `string` | The string to transform to title case. |
