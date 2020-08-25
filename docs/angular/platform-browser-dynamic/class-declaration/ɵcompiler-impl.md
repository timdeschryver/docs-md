---
kind: ClassDeclaration
name: ɵCompilerImpl
module: platform-browser-dynamic
---

# ɵCompilerImpl

```ts
class CompilerImpl implements Compiler {
  public readonly injector: Injector;

  compileModuleSync<T>(moduleType: Type<T>): NgModuleFactory<T>;
  compileModuleAsync<T>(moduleType: Type<T>): Promise<NgModuleFactory<T>>;
  compileModuleAndAllComponentsSync<T>(
    moduleType: Type<T>
  ): ModuleWithComponentFactories<T>;
  compileModuleAndAllComponentsAsync<T>(
    moduleType: Type<T>
  ): Promise<ModuleWithComponentFactories<T>>;
  loadAotSummaries(summaries: () => any[]);
  hasAotSummary(ref: Type<any>): boolean;
  getComponentFactory<T>(component: Type<T>): ComponentFactory<T>;
  clearCache(): void;
  clearCacheFor(type: Type<any>);
  getModuleId(moduleType: Type<any>): string | undefined;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser-dynamic/src/compiler_factory.ts#L33-L94)

## Properties

| Name     | Type  | Description |
| -------- | ----- | ----------- |
| injector | `any` |             |

## Methods

### compileModuleSync

```ts
compileModuleSync<T>(moduleType: Type<T>): NgModuleFactory<T>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser-dynamic/src/compiler_factory.ts#L54-L56)

#### Parameters (#compileModuleSync-parameters)

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| moduleType | `any` |             |

### compileModuleAsync

```ts
compileModuleAsync<T>(moduleType: Type<T>): Promise<NgModuleFactory<T>>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser-dynamic/src/compiler_factory.ts#L57-L59)

#### Parameters (#compileModuleAsync-parameters)

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| moduleType | `any` |             |

### compileModuleAndAllComponentsSync

```ts
compileModuleAndAllComponentsSync<T>(moduleType: Type<T>): ModuleWithComponentFactories<T>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser-dynamic/src/compiler_factory.ts#L60-L66)

#### Parameters (#compileModuleAndAllComponentsSync-parameters)

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| moduleType | `any` |             |

### compileModuleAndAllComponentsAsync

```ts
compileModuleAndAllComponentsAsync<T>(moduleType: Type<T>):   Promise<ModuleWithComponentFactories<T>>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser-dynamic/src/compiler_factory.ts#L67-L74)

#### Parameters (#compileModuleAndAllComponentsAsync-parameters)

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| moduleType | `any` |             |

### loadAotSummaries

```ts
loadAotSummaries(summaries: () => any[]);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser-dynamic/src/compiler_factory.ts#L75-L77)

#### Parameters (#loadAotSummaries-parameters)

| Name      | Type          | Description |
| --------- | ------------- | ----------- |
| summaries | `() => any[]` |             |

### hasAotSummary

```ts
hasAotSummary(ref: Type<any>): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser-dynamic/src/compiler_factory.ts#L78-L80)

#### Parameters (#hasAotSummary-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| ref  | `any` |             |

### getComponentFactory

```ts
getComponentFactory<T>(component: Type<T>): ComponentFactory<T>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser-dynamic/src/compiler_factory.ts#L81-L83)

#### Parameters (#getComponentFactory-parameters)

| Name      | Type  | Description |
| --------- | ----- | ----------- |
| component | `any` |             |

### clearCache

```ts
clearCache(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser-dynamic/src/compiler_factory.ts#L84-L86)

### clearCacheFor

```ts
clearCacheFor(type: Type<any>);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser-dynamic/src/compiler_factory.ts#L87-L89)

#### Parameters (#clearCacheFor-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| type | `any` |             |

### getModuleId

```ts
getModuleId(moduleType: Type<any>): string|undefined;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser-dynamic/src/compiler_factory.ts#L90-L93)

#### Parameters (#getModuleId-parameters)

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| moduleType | `any` |             |
