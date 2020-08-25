---
kind: ClassDeclaration
name: DirectiveResolver
module: compiler
---

# DirectiveResolver

```ts
class DirectiveResolver {
  isDirective(type: Type);
  resolve(type: Type, throwIfNotFound = true): Directive | null;
  resolve(type: Type): Directive;
  resolve(type: Type, throwIfNotFound: true): Directive;
  resolve(type: Type, throwIfNotFound: boolean): Directive | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/directive_resolver.ts#L27-L178)

## Methods

### isDirective

```ts
isDirective(type: Type);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/directive_resolver.ts#L30-L33)

#### Parameters (#isDirective-parameters)

| Name | Type   | Description |
| ---- | ------ | ----------- |
| type | `Type` |             |

### resolve

```ts
resolve(type: Type, throwIfNotFound = true): Directive|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/directive_resolver.ts#L41-L57)

#### Parameters (#resolve-parameters)

| Name            | Type      | Description |
| --------------- | --------- | ----------- |
| type            | `Type`    |             |
| throwIfNotFound | `boolean` |             |

### resolve

#### description (#resolve-description)

Return {@link Directive} for a given `Type`.

```ts
resolve(type: Type): Directive;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/directive_resolver.ts#L38-L38)

#### Parameters (#resolve-parameters)

| Name | Type   | Description |
| ---- | ------ | ----------- |
| type | `Type` |             |

### resolve

```ts
resolve(type: Type, throwIfNotFound: true): Directive;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/directive_resolver.ts#L39-L39)

#### Parameters (#resolve-parameters)

| Name            | Type   | Description |
| --------------- | ------ | ----------- |
| type            | `Type` |             |
| throwIfNotFound | `true` |             |

### resolve

```ts
resolve(type: Type, throwIfNotFound: boolean): Directive|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/directive_resolver.ts#L40-L40)

#### Parameters (#resolve-parameters)

| Name            | Type      | Description |
| --------------- | --------- | ----------- |
| type            | `Type`    |             |
| throwIfNotFound | `boolean` |             |
