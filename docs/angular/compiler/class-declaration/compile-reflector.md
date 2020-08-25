---
kind: ClassDeclaration
name: CompileReflector
module: compiler
---

# CompileReflector

## description

Provides access to reflection data about symbols that the compiler needs.

```ts
class CompileReflector {
  abstract parameters(typeOrFunc: /*Type*/ any): any[][];
  abstract annotations(typeOrFunc: /*Type*/ any): any[];
  abstract shallowAnnotations(typeOrFunc: /*Type*/ any): any[];
  abstract tryAnnotations(typeOrFunc: /*Type*/ any): any[];
  abstract propMetadata(typeOrFunc: /*Type*/ any): { [key: string]: any[] };
  abstract hasLifecycleHook(type: any, lcProperty: string): boolean;
  abstract guards(typeOrFunc: /* Type */ any): { [key: string]: any };
  abstract componentModuleUrl(
    type: /*Type*/ any,
    cmpMetadata: Component
  ): string;
  abstract resolveExternalReference(ref: o.ExternalReference): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_reflector.ts#L15-L25)

## Methods

### parameters

```ts
abstract parameters(typeOrFunc: /*Type*/ any): any[][];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_reflector.ts#L16-L16)

#### Parameters (#parameters-parameters)

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| typeOrFunc | `any` |             |

### annotations

```ts
abstract annotations(typeOrFunc: /*Type*/ any): any[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_reflector.ts#L17-L17)

#### Parameters (#annotations-parameters)

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| typeOrFunc | `any` |             |

### shallowAnnotations

```ts
abstract shallowAnnotations(typeOrFunc: /*Type*/ any): any[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_reflector.ts#L18-L18)

#### Parameters (#shallowAnnotations-parameters)

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| typeOrFunc | `any` |             |

### tryAnnotations

```ts
abstract tryAnnotations(typeOrFunc: /*Type*/ any): any[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_reflector.ts#L19-L19)

#### Parameters (#tryAnnotations-parameters)

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| typeOrFunc | `any` |             |

### propMetadata

```ts
abstract propMetadata(typeOrFunc: /*Type*/ any): {[key: string]: any[]};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_reflector.ts#L20-L20)

#### Parameters (#propMetadata-parameters)

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| typeOrFunc | `any` |             |

### hasLifecycleHook

```ts
abstract hasLifecycleHook(type: any, lcProperty: string): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_reflector.ts#L21-L21)

#### Parameters (#hasLifecycleHook-parameters)

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| type       | `any`    |             |
| lcProperty | `string` |             |

### guards

```ts
abstract guards(typeOrFunc: /* Type */ any): {[key: string]: any};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_reflector.ts#L22-L22)

#### Parameters (#guards-parameters)

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| typeOrFunc | `any` |             |

### componentModuleUrl

```ts
abstract componentModuleUrl(type: /*Type*/ any, cmpMetadata: Component): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_reflector.ts#L23-L23)

#### Parameters (#componentModuleUrl-parameters)

| Name        | Type        | Description |
| ----------- | ----------- | ----------- |
| type        | `any`       |             |
| cmpMetadata | `Component` |             |

### resolveExternalReference

```ts
abstract resolveExternalReference(ref: o.ExternalReference): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_reflector.ts#L24-L24)

#### Parameters (#resolveExternalReference-parameters)

| Name | Type                  | Description |
| ---- | --------------------- | ----------- |
| ref  | `o.ExternalReference` |             |
