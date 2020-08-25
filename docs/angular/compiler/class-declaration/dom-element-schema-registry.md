---
kind: ClassDeclaration
name: DomElementSchemaRegistry
module: compiler
---

# DomElementSchemaRegistry

```ts
class DomElementSchemaRegistry extends ElementSchemaRegistry {
  hasProperty(
    tagName: string,
    propName: string,
    schemaMetas: SchemaMetadata[]
  ): boolean;
  hasElement(tagName: string, schemaMetas: SchemaMetadata[]): boolean;
  securityContext(
    tagName: string,
    propName: string,
    isAttribute: boolean
  ): SecurityContext;
  getMappedPropName(propName: string): string;
  getDefaultComponentElementName(): string;
  validateProperty(name: string): { error: boolean; msg?: string };
  validateAttribute(name: string): { error: boolean; msg?: string };
  allKnownElementNames(): string[];
  normalizeAnimationStyleProperty(propName: string): string;
  normalizeAnimationStyleValue(
    camelCaseProp: string,
    userProvidedProp: string,
    val: string | number
  ): { error: string; value: string };
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/dom_element_schema_registry.ts#L243-L411)

## Methods

### hasProperty

```ts
hasProperty(tagName: string, propName: string, schemaMetas: SchemaMetadata[]): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/dom_element_schema_registry.ts#L287-L306)

#### Parameters (#hasProperty-parameters)

| Name        | Type               | Description |
| ----------- | ------------------ | ----------- |
| tagName     | `string`           |             |
| propName    | `string`           |             |
| schemaMetas | `SchemaMetadata[]` |             |

### hasElement

```ts
hasElement(tagName: string, schemaMetas: SchemaMetadata[]): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/dom_element_schema_registry.ts#L308-L325)

#### Parameters (#hasElement-parameters)

| Name        | Type               | Description |
| ----------- | ------------------ | ----------- |
| tagName     | `string`           |             |
| schemaMetas | `SchemaMetadata[]` |             |

### securityContext

#### description (#securityContext-description)

securityContext returns the security context for the given property on the given DOM tag.

Tag and property name are statically known and cannot change at runtime, i.e. it is not
possible to bind a value into a changing attribute or tag name.

The filtering is based on a list of allowed tags|attributes. All attributes in the schema
above are assumed to have the 'NONE' security context, i.e. that they are safe inert
string values. Only specific well known attack vectors are assigned their appropriate context.

```ts
securityContext(tagName: string, propName: string, isAttribute: boolean): SecurityContext;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/dom_element_schema_registry.ts#L337-L353)

#### Parameters (#securityContext-parameters)

| Name        | Type      | Description |
| ----------- | --------- | ----------- |
| tagName     | `string`  |             |
| propName    | `string`  |             |
| isAttribute | `boolean` |             |

### getMappedPropName

```ts
getMappedPropName(propName: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/dom_element_schema_registry.ts#L355-L357)

#### Parameters (#getMappedPropName-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| propName | `string` |             |

### getDefaultComponentElementName

```ts
getDefaultComponentElementName(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/dom_element_schema_registry.ts#L359-L361)

### validateProperty

```ts
validateProperty(name: string): {error: boolean, msg?: string};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/dom_element_schema_registry.ts#L363-L373)

#### Parameters (#validateProperty-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| name | `string` |             |

### validateAttribute

```ts
validateAttribute(name: string): {error: boolean, msg?: string};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/dom_element_schema_registry.ts#L375-L383)

#### Parameters (#validateAttribute-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| name | `string` |             |

### allKnownElementNames

```ts
allKnownElementNames(): string[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/dom_element_schema_registry.ts#L385-L387)

### normalizeAnimationStyleProperty

```ts
normalizeAnimationStyleProperty(propName: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/dom_element_schema_registry.ts#L389-L391)

#### Parameters (#normalizeAnimationStyleProperty-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| propName | `string` |             |

### normalizeAnimationStyleValue

```ts
normalizeAnimationStyleValue(camelCaseProp: string, userProvidedProp: string, val: string|number):   {error: string, value: string};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/schema/dom_element_schema_registry.ts#L393-L410)

#### Parameters (#normalizeAnimationStyleValue-parameters)

| Name             | Type     | Description |
| ---------------- | -------- | ----------- |
| camelCaseProp    | `string` |             |
| userProvidedProp | `string` |             |
| val              | `string  | number`     |  |
