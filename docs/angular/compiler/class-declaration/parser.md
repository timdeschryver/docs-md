---
kind: ClassDeclaration
name: Parser
module: compiler
---

# Parser

```ts
class Parser {
  simpleExpressionChecker = SimpleExpressionChecker;

  parseAction(
    input: string,
    location: any,
    absoluteOffset: number,
    interpolationConfig: InterpolationConfig = DEFAULT_INTERPOLATION_CONFIG
  ): ASTWithSource;
  parseBinding(
    input: string,
    location: any,
    absoluteOffset: number,
    interpolationConfig: InterpolationConfig = DEFAULT_INTERPOLATION_CONFIG
  ): ASTWithSource;
  parseSimpleBinding(
    input: string,
    location: string,
    absoluteOffset: number,
    interpolationConfig: InterpolationConfig = DEFAULT_INTERPOLATION_CONFIG
  ): ASTWithSource;
  parseTemplateBindings(
    templateKey: string,
    templateValue: string,
    templateUrl: string,
    absoluteKeyOffset: number,
    absoluteValueOffset: number
  ): TemplateBindingParseResult;
  parseInterpolation(
    input: string,
    location: any,
    absoluteOffset: number,
    interpolationConfig: InterpolationConfig = DEFAULT_INTERPOLATION_CONFIG
  ): ASTWithSource | null;
  splitInterpolation(
    input: string,
    location: string,
    interpolationConfig: InterpolationConfig = DEFAULT_INTERPOLATION_CONFIG
  ): SplitInterpolation | null;
  wrapLiteralPrimitive(
    input: string | null,
    location: any,
    absoluteOffset: number
  ): ASTWithSource;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L40-L275)

## Properties

| Name                    | Type                             | Description |
| ----------------------- | -------------------------------- | ----------- |
| simpleExpressionChecker | `typeof SimpleExpressionChecker` |             |

## Methods

### parseAction

```ts
parseAction(   input: string, location: any, absoluteOffset: number,   interpolationConfig: InterpolationConfig = DEFAULT_INTERPOLATION_CONFIG): ASTWithSource;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L47-L58)

#### Parameters (#parseAction-parameters)

| Name                | Type                  | Description |
| ------------------- | --------------------- | ----------- |
| input               | `string`              |             |
| location            | `any`                 |             |
| absoluteOffset      | `number`              |             |
| interpolationConfig | `InterpolationConfig` |             |

### parseBinding

```ts
parseBinding(   input: string, location: any, absoluteOffset: number,   interpolationConfig: InterpolationConfig = DEFAULT_INTERPOLATION_CONFIG): ASTWithSource;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L60-L65)

#### Parameters (#parseBinding-parameters)

| Name                | Type                  | Description |
| ------------------- | --------------------- | ----------- |
| input               | `string`              |             |
| location            | `any`                 |             |
| absoluteOffset      | `number`              |             |
| interpolationConfig | `InterpolationConfig` |             |

### parseSimpleBinding

```ts
parseSimpleBinding(   input: string, location: string, absoluteOffset: number,   interpolationConfig: InterpolationConfig = DEFAULT_INTERPOLATION_CONFIG): ASTWithSource;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L73-L83)

#### Parameters (#parseSimpleBinding-parameters)

| Name                | Type                  | Description |
| ------------------- | --------------------- | ----------- |
| input               | `string`              |             |
| location            | `string`              |             |
| absoluteOffset      | `number`              |             |
| interpolationConfig | `InterpolationConfig` |             |

### parseTemplateBindings

#### description (#parseTemplateBindings-description)

Parse microsyntax template expression and return a list of bindings or
parsing errors in case the given expression is invalid.

For example,

```
<div *ngFor="let item of items">
^      ^ absoluteValueOffset for `templateValue`
absoluteKeyOffset for `templateKey`
```

contains three bindings:

1. ngFor -> null
2. item -> NgForOfContext.\$implicit
3. ngForOf -> items

This is apparent from the de-sugared template:

```
<ng-template ngFor let-item [ngForOf]="items">
```

```ts
parseTemplateBindings(   templateKey: string, templateValue: string, templateUrl: string, absoluteKeyOffset: number,   absoluteValueOffset: number): TemplateBindingParseResult;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L147-L158)

#### Parameters (#parseTemplateBindings-parameters)

| Name                | Type     | Description                                                           |
| ------------------- | -------- | --------------------------------------------------------------------- |
| templateKey         | `string` | name of directive, without the \* prefix. For example: ngIf, ngFor    |
| templateValue       | `string` | RHS of the microsyntax attribute                                      |
| templateUrl         | `string` | template filename if it's external, component filename if it's inline |
| absoluteKeyOffset   | `number` | start of the `templateKey`                                            |
| absoluteValueOffset | `number` | start of the `templateValue`                                          |

### parseInterpolation

```ts
parseInterpolation(   input: string, location: any, absoluteOffset: number,   interpolationConfig: InterpolationConfig = DEFAULT_INTERPOLATION_CONFIG): ASTWithSource|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L160-L183)

#### Parameters (#parseInterpolation-parameters)

| Name                | Type                  | Description |
| ------------------- | --------------------- | ----------- |
| input               | `string`              |             |
| location            | `any`                 |             |
| absoluteOffset      | `number`              |             |
| interpolationConfig | `InterpolationConfig` |             |

### splitInterpolation

```ts
splitInterpolation(   input: string, location: string,   interpolationConfig: InterpolationConfig = DEFAULT_INTERPOLATION_CONFIG): SplitInterpolation   |null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L185-L219)

#### Parameters (#splitInterpolation-parameters)

| Name                | Type                  | Description |
| ------------------- | --------------------- | ----------- |
| input               | `string`              |             |
| location            | `string`              |             |
| interpolationConfig | `InterpolationConfig` |             |

### wrapLiteralPrimitive

```ts
wrapLiteralPrimitive(input: string|null, location: any, absoluteOffset: number): ASTWithSource;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L221-L226)

#### Parameters (#wrapLiteralPrimitive-parameters)

| Name           | Type     | Description |
| -------------- | -------- | ----------- |
| input          | `string` |             |
| location       | `any`    |             |
| absoluteOffset | `number` |             |
