---
kind: ClassDeclaration
name: FunctionalTranspiler
module: src
---

# FunctionalTranspiler

```ts
class FunctionalTranspiler
  extends DefaultTranspiler
  implements TranslocoTranspiler {
  transpile(value: any, params: HashMap = {}, translation: Translation): any;
}
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.transpiler.ts#L108-L143)

## Methods

### transpile

```ts
transpile(value: any, params: HashMap = {}, translation: Translation): any;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.transpiler.ts#L114-L142)

#### Parameters (#transpile-parameters)

| Name        | Type           | Description |
| ----------- | -------------- | ----------- |
| value       | `any`          |             |
| params      | `HashMap<any>` |             |
| translation | `HashMap<any>` |             |
