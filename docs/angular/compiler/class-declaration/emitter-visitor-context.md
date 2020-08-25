---
kind: ClassDeclaration
name: EmitterVisitorContext
module: compiler
---

# EmitterVisitorContext

```ts
class EmitterVisitorContext {
  static createRoot(): EmitterVisitorContext;
  println(
    from?: { sourceSpan: ParseSourceSpan | null } | null,
    lastPart: string = ""
  ): void;
  lineIsEmpty(): boolean;
  lineLength(): number;
  print(
    from: { sourceSpan: ParseSourceSpan | null } | null,
    part: string,
    newLine: boolean = false
  );
  removeEmptyLastLine();
  incIndent();
  decIndent();
  pushClass(clazz: o.ClassStmt);
  popClass(): o.ClassStmt;
  toSource(): string;
  toSourceMapGenerator(
    genFilePath: string,
    startsAtLine: number = 0
  ): SourceMapGenerator;
  setPreambleLineCount(count: number);
  spanOf(line: number, column: number): ParseSourceSpan | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/abstract_emitter.ts#L30-L200)

## Methods

### createRoot

```ts
static createRoot(): EmitterVisitorContext;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/abstract_emitter.ts#L31-L33)

### println

```ts
println(from?: {sourceSpan: ParseSourceSpan|null}|null, lastPart: string = ''): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/abstract_emitter.ts#L51-L53)

#### Parameters (#println-parameters)

| Name     | Type                           | Description |
| -------- | ------------------------------ | ----------- |
| from     | `{ sourceSpan: ParseSourceSpan | null; }`    |  |
| lastPart | `string`                       |             |

### lineIsEmpty

```ts
lineIsEmpty(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/abstract_emitter.ts#L55-L57)

### lineLength

```ts
lineLength(): number;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/abstract_emitter.ts#L59-L61)

### print

```ts
print(from: {sourceSpan: ParseSourceSpan|null}|null, part: string, newLine: boolean = false);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/abstract_emitter.ts#L63-L72)

#### Parameters (#print-parameters)

| Name    | Type                           | Description |
| ------- | ------------------------------ | ----------- |
| from    | `{ sourceSpan: ParseSourceSpan | null; }`    |  |
| part    | `string`                       |             |
| newLine | `boolean`                      |             |

### removeEmptyLastLine

```ts
removeEmptyLastLine();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/abstract_emitter.ts#L74-L78)

### incIndent

```ts
incIndent();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/abstract_emitter.ts#L80-L85)

### decIndent

```ts
decIndent();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/abstract_emitter.ts#L87-L92)

### pushClass

```ts
pushClass(clazz: o.ClassStmt);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/abstract_emitter.ts#L94-L96)

#### Parameters (#pushClass-parameters)

| Name  | Type          | Description |
| ----- | ------------- | ----------- |
| clazz | `o.ClassStmt` |             |

### popClass

```ts
popClass(): o.ClassStmt;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/abstract_emitter.ts#L98-L100)

### toSource

```ts
toSource(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/abstract_emitter.ts#L106-L110)

### toSourceMapGenerator

```ts
toSourceMapGenerator(genFilePath: string, startsAtLine: number = 0): SourceMapGenerator;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/abstract_emitter.ts#L112-L169)

#### Parameters (#toSourceMapGenerator-parameters)

| Name         | Type     | Description |
| ------------ | -------- | ----------- |
| genFilePath  | `string` |             |
| startsAtLine | `number` |             |

### setPreambleLineCount

```ts
setPreambleLineCount(count: number);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/abstract_emitter.ts#L171-L173)

#### Parameters (#setPreambleLineCount-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| count | `number` |             |

### spanOf

```ts
spanOf(line: number, column: number): ParseSourceSpan|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/abstract_emitter.ts#L175-L188)

#### Parameters (#spanOf-parameters)

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| line   | `number` |             |
| column | `number` |             |
