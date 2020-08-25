---
kind: ClassDeclaration
name: ɵReflectionCapabilities
module: core
---

# ɵReflectionCapabilities

```ts
class ReflectionCapabilities implements PlatformReflectionCapabilities {
  isReflectionEnabled(): boolean;
  factory<T>(t: Type<T>): (args: any[]) => T;
  _zipTypesAndAnnotations(paramTypes: any[], paramAnnotations: any[]): any[][];
  parameters(type: Type<any>): any[][];
  annotations(typeOrFunc: Type<any>): any[];
  propMetadata(typeOrFunc: any): { [key: string]: any[] };
  ownPropMetadata(typeOrFunc: any): { [key: string]: any[] };
  hasLifecycleHook(type: any, lcProperty: string): boolean;
  guards(type: any): { [key: string]: any };
  getter(name: string): GetterFn;
  setter(name: string): SetterFn;
  method(name: string): MethodFn;
  importUri(type: any): string;
  resourceUri(type: any): string;
  resolveIdentifier(
    name: string,
    moduleUrl: string,
    members: string[],
    runtime: any
  ): any;
  resolveEnum(enumIdentifier: any, name: string): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/reflection/reflection_capabilities.ts#L43-L283)

## Methods

### isReflectionEnabled

```ts
isReflectionEnabled(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/reflection/reflection_capabilities.ts#L50-L52)

### factory

```ts
factory<T>(t: Type<T>): (args: any[]) => T;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/reflection/reflection_capabilities.ts#L54-L56)

#### Parameters (#factory-parameters)

| Name | Type      | Description |
| ---- | --------- | ----------- |
| t    | `Type<T>` |             |

### \_zipTypesAndAnnotations

```ts
_zipTypesAndAnnotations(paramTypes: any[], paramAnnotations: any[]): any[][];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/reflection/reflection_capabilities.ts#L59-L84)

#### Parameters (#\_zipTypesAndAnnotations-parameters)

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| paramTypes       | `any[]` |             |
| paramAnnotations | `any[]` |             |

### parameters

```ts
parameters(type: Type<any>): any[][];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/reflection/reflection_capabilities.ts#L133-L145)

#### Parameters (#parameters-parameters)

| Name | Type        | Description |
| ---- | ----------- | ----------- |
| type | `Type<any>` |             |

### annotations

```ts
annotations(typeOrFunc: Type<any>): any[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/reflection/reflection_capabilities.ts#L169-L177)

#### Parameters (#annotations-parameters)

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| typeOrFunc | `Type<any>` |             |

### propMetadata

```ts
propMetadata(typeOrFunc: any): {[key: string]: any[]};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/reflection/reflection_capabilities.ts#L208-L232)

#### Parameters (#propMetadata-parameters)

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| typeOrFunc | `any` |             |

### ownPropMetadata

```ts
ownPropMetadata(typeOrFunc: any): {[key: string]: any[]};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/reflection/reflection_capabilities.ts#L234-L239)

#### Parameters (#ownPropMetadata-parameters)

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| typeOrFunc | `any` |             |

### hasLifecycleHook

```ts
hasLifecycleHook(type: any, lcProperty: string): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/reflection/reflection_capabilities.ts#L241-L243)

#### Parameters (#hasLifecycleHook-parameters)

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| type       | `any`    |             |
| lcProperty | `string` |             |

### guards

```ts
guards(type: any): {[key: string]: any};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/reflection/reflection_capabilities.ts#L245-L247)

#### Parameters (#guards-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| type | `any` |             |

### getter

```ts
getter(name: string): GetterFn;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/reflection/reflection_capabilities.ts#L249-L251)

#### Parameters (#getter-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| name | `string` |             |

### setter

```ts
setter(name: string): SetterFn;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/reflection/reflection_capabilities.ts#L253-L255)

#### Parameters (#setter-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| name | `string` |             |

### method

```ts
method(name: string): MethodFn;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/reflection/reflection_capabilities.ts#L257-L261)

#### Parameters (#method-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| name | `string` |             |

### importUri

```ts
importUri(type: any): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/reflection/reflection_capabilities.ts#L264-L271)

#### Parameters (#importUri-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| type | `any` |             |

### resourceUri

```ts
resourceUri(type: any): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/reflection/reflection_capabilities.ts#L273-L275)

#### Parameters (#resourceUri-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| type | `any` |             |

### resolveIdentifier

```ts
resolveIdentifier(name: string, moduleUrl: string, members: string[], runtime: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/reflection/reflection_capabilities.ts#L277-L279)

#### Parameters (#resolveIdentifier-parameters)

| Name      | Type       | Description |
| --------- | ---------- | ----------- |
| name      | `string`   |             |
| moduleUrl | `string`   |             |
| members   | `string[]` |             |
| runtime   | `any`      |             |

### resolveEnum

```ts
resolveEnum(enumIdentifier: any, name: string): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/reflection/reflection_capabilities.ts#L280-L282)

#### Parameters (#resolveEnum-parameters)

| Name           | Type     | Description |
| -------------- | -------- | ----------- |
| enumIdentifier | `any`    |             |
| name           | `string` |             |
