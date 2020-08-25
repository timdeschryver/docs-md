---
kind: ClassDeclaration
name: UpperCasePipe
module: common
---

# UpperCasePipe

## description

Transforms text to all upper case.

```ts
class UpperCasePipe implements PipeTransform {
  transform(value: string): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/case_conversion_pipes.ts#L94-L106)

## see

`LowerCasePipe`
`TitleCasePipe`

## ngModule

CommonModule

## publicApi

## Methods

### transform

```ts
transform(value: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/case_conversion_pipes.ts#L99-L105)

#### Parameters (#transform-parameters)

| Name  | Type     | Description                            |
| ----- | -------- | -------------------------------------- |
| value | `string` | The string to transform to upper case. |
