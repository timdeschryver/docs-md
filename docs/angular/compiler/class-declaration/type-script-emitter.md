---
kind: ClassDeclaration
name: TypeScriptEmitter
module: compiler
---

# TypeScriptEmitter

```ts
class TypeScriptEmitter implements OutputEmitter {
  emitStatementsAndContext(
    genFilePath: string,
    stmts: o.Statement[],
    preamble: string = "",
    emitSourceMaps: boolean = true,
    referenceFilter?: ReferenceFilter,
    importFilter?: ReferenceFilter
  ): { sourceText: string; context: EmitterVisitorContext };
  emitStatements(
    genFilePath: string,
    stmts: o.Statement[],
    preamble: string = ""
  );
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/ts_emitter.ts#L33-L73)

## Methods

### emitStatementsAndContext

```ts
emitStatementsAndContext(   genFilePath: string, stmts: o.Statement[], preamble: string = '',   emitSourceMaps: boolean = true, referenceFilter?: ReferenceFilter,   importFilter?: ReferenceFilter): {sourceText: string, context: EmitterVisitorContext};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/ts_emitter.ts#L34-L68)

#### Parameters (#emitStatementsAndContext-parameters)

| Name            | Type              | Description |
| --------------- | ----------------- | ----------- |
| genFilePath     | `string`          |             |
| stmts           | `o.Statement[]`   |             |
| preamble        | `string`          |             |
| emitSourceMaps  | `boolean`         |             |
| referenceFilter | `ReferenceFilter` |             |
| importFilter    | `ReferenceFilter` |             |

### emitStatements

```ts
emitStatements(genFilePath: string, stmts: o.Statement[], preamble: string = '');
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/ts_emitter.ts#L70-L72)

#### Parameters (#emitStatements-parameters)

| Name        | Type            | Description |
| ----------- | --------------- | ----------- |
| genFilePath | `string`        |             |
| stmts       | `o.Statement[]` |             |
| preamble    | `string`        |             |
