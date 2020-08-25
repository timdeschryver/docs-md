---
kind: ClassDeclaration
name: ElementSchemaRegistry
module: compiler
---

# ElementSchemaRegistry

```ts
class ElementSchemaRegistry {
  abstract hasProperty(
    tagName: string,
    propName: string,
    schemaMetas: SchemaMetadata[]
  ): boolean;
  abstract hasElement(tagName: string, schemaMetas: SchemaMetadata[]): boolean;
  abstract securityContext(
    elementName: string,
    propName: string,
    isAttribute: boolean
  ): SecurityContext;
  abstract allKnownElementNames(): string[];
  abstract getMappedPropName(propName: string): string;
  abstract getDefaultComponentElementName(): string;
  abstract validateProperty(name: string): { error: boolean; msg?: string };
  abstract validateAttribute(name: string): { error: boolean; msg?: string };
  abstract normalizeAnimationStyleProperty(propName: string): string;
  abstract normalizeAnimationStyleValue(
    camelCaseProp: string,
    userProvidedProp: string,
    val: string | number
  ): { error: string; value: string };
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/element_schema_registry.ts#L11-L25)

## Methods

### hasProperty

```ts
abstract hasProperty(tagName: string, propName: string, schemaMetas: SchemaMetadata[]): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/element_schema_registry.ts#L12-L12)

#### Parameters (#hasProperty-parameters)

| Name        | Type               | Description |
| ----------- | ------------------ | ----------- |
| tagName     | `string`           |             |
| propName    | `string`           |             |
| schemaMetas | `SchemaMetadata[]` |             |

### hasElement

```ts
abstract hasElement(tagName: string, schemaMetas: SchemaMetadata[]): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/element_schema_registry.ts#L13-L13)

#### Parameters (#hasElement-parameters)

| Name        | Type               | Description |
| ----------- | ------------------ | ----------- |
| tagName     | `string`           |             |
| schemaMetas | `SchemaMetadata[]` |             |

### securityContext

```ts
abstract securityContext(elementName: string, propName: string, isAttribute: boolean):   SecurityContext;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/element_schema_registry.ts#L14-L15)

#### Parameters (#securityContext-parameters)

| Name        | Type      | Description |
| ----------- | --------- | ----------- |
| elementName | `string`  |             |
| propName    | `string`  |             |
| isAttribute | `boolean` |             |

### allKnownElementNames

```ts
abstract allKnownElementNames(): string[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/element_schema_registry.ts#L16-L16)

### getMappedPropName

```ts
abstract getMappedPropName(propName: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/element_schema_registry.ts#L17-L17)

#### Parameters (#getMappedPropName-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| propName | `string` |             |

### getDefaultComponentElementName

```ts
abstract getDefaultComponentElementName(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/element_schema_registry.ts#L18-L18)

### validateProperty

```ts
abstract validateProperty(name: string): {error: boolean, msg?: string};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/element_schema_registry.ts#L19-L19)

#### Parameters (#validateProperty-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| name | `string` |             |

### validateAttribute

```ts
abstract validateAttribute(name: string): {error: boolean, msg?: string};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/element_schema_registry.ts#L20-L20)

#### Parameters (#validateAttribute-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| name | `string` |             |

### normalizeAnimationStyleProperty

```ts
abstract normalizeAnimationStyleProperty(propName: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/element_schema_registry.ts#L21-L21)

#### Parameters (#normalizeAnimationStyleProperty-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| propName | `string` |             |

### normalizeAnimationStyleValue

```ts
abstract normalizeAnimationStyleValue(   camelCaseProp: string, userProvidedProp: string,   val: string|number): {error: string, value: string};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/element_schema_registry.ts#L22-L24)

#### Parameters (#normalizeAnimationStyleValue-parameters)

| Name             | Type     | Description |
| ---------------- | -------- | ----------- |
| camelCaseProp    | `string` |             |
| userProvidedProp | `string` |             |
| val              | `string  | number`     |  |
