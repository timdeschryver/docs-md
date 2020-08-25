---
kind: ClassDeclaration
name: JitCompiler
module: compiler
---

# JitCompiler

## description

An internal module of the Angular compiler that begins with component types,
extracts templates, and eventually produces a compiled version of the component
ready for linking into an application.

```ts
class JitCompiler {
  compileModuleSync(moduleType: Type): object;
  compileModuleAsync(moduleType: Type): Promise<object>;
  compileModuleAndAllComponentsSync(
    moduleType: Type
  ): ModuleWithComponentFactories;
  compileModuleAndAllComponentsAsync(
    moduleType: Type
  ): Promise<ModuleWithComponentFactories>;
  getComponentFactory(component: Type): object;
  loadAotSummaries(summaries: () => any[]);
  hasAotSummary(ref: Type);
  _compileComponents(mainModule: Type, allComponentFactories: object[] | null);
  clearCacheFor(type: Type);
  clearCache(): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/jit/compiler.ts#L40-L332)

## security

When compiling templates at runtime, you must ensure that the entire template comes
from a trusted source. Attacker-controlled data introduced by a template could expose your
application to XSS risks. For more detail, see the [Security Guide](http://g.co/ng/security).

## Methods

### compileModuleSync

```ts
compileModuleSync(moduleType: Type): object;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/jit/compiler.ts#L56-L58)

#### Parameters (#compileModuleSync-parameters)

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| moduleType | `Type` |             |

### compileModuleAsync

```ts
compileModuleAsync(moduleType: Type): Promise<object>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/jit/compiler.ts#L60-L62)

#### Parameters (#compileModuleAsync-parameters)

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| moduleType | `Type` |             |

### compileModuleAndAllComponentsSync

```ts
compileModuleAndAllComponentsSync(moduleType: Type): ModuleWithComponentFactories;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/jit/compiler.ts#L64-L66)

#### Parameters (#compileModuleAndAllComponentsSync-parameters)

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| moduleType | `Type` |             |

### compileModuleAndAllComponentsAsync

```ts
compileModuleAndAllComponentsAsync(moduleType: Type): Promise<ModuleWithComponentFactories>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/jit/compiler.ts#L68-L70)

#### Parameters (#compileModuleAndAllComponentsAsync-parameters)

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| moduleType | `Type` |             |

### getComponentFactory

```ts
getComponentFactory(component: Type): object;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/jit/compiler.ts#L72-L75)

#### Parameters (#getComponentFactory-parameters)

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| component | `Type` |             |

### loadAotSummaries

```ts
loadAotSummaries(summaries: () => any[]);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/jit/compiler.ts#L77-L80)

#### Parameters (#loadAotSummaries-parameters)

| Name      | Type          | Description |
| --------- | ------------- | ----------- |
| summaries | `() => any[]` |             |

### hasAotSummary

```ts
hasAotSummary(ref: Type);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/jit/compiler.ts#L100-L102)

#### Parameters (#hasAotSummary-parameters)

| Name | Type   | Description |
| ---- | ------ | ----------- |
| ref  | `Type` |             |

### \_compileComponents

```ts
_compileComponents(mainModule: Type, allComponentFactories: object[]|null);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/jit/compiler.ts#L166-L209)

#### internal (#\_compileComponents-internal)

#### Parameters (#\_compileComponents-parameters)

| Name                  | Type       | Description |
| --------------------- | ---------- | ----------- |
| mainModule            | `Type`     |             |
| allComponentFactories | `object[]` |             |

### clearCacheFor

```ts
clearCacheFor(type: Type);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/jit/compiler.ts#L211-L219)

#### Parameters (#clearCacheFor-parameters)

| Name | Type   | Description |
| ---- | ------ | ----------- |
| type | `Type` |             |

### clearCache

```ts
clearCache(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/jit/compiler.ts#L221-L227)
