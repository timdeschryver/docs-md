---
kind: ClassDeclaration
name: JitEvaluator
module: compiler
---

# JitEvaluator

## description

A helper class to manage the evaluation of JIT generated code.

```ts
class JitEvaluator {
  evaluateStatements(
    sourceUrl: string,
    statements: o.Statement[],
    reflector: CompileReflector,
    createSourceMaps: boolean
  ): { [key: string]: any };
  evaluateCode(
    sourceUrl: string,
    ctx: EmitterVisitorContext,
    vars: { [key: string]: any },
    createSourceMap: boolean
  ): any;
  executeFunction(fn: Function, args: any[]);
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_jit.ts#L19-L93)

## Methods

### evaluateStatements

#### description (#evaluateStatements-description)

```ts
evaluateStatements(   sourceUrl: string, statements: o.Statement[], reflector: CompileReflector,   createSourceMaps: boolean): {[key: string]: any};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_jit.ts#L29-L44)

#### Parameters (#evaluateStatements-parameters)

| Name             | Type               | Description                                                            |
| ---------------- | ------------------ | ---------------------------------------------------------------------- |
| sourceUrl        | `string`           | The URL of the generated code.                                         |
| statements       | `o.Statement[]`    | An array of Angular statement AST nodes to be evaluated.               |
| reflector        | `CompileReflector` | A helper used when converting the statements to executable code.       |
| createSourceMaps | `boolean`          | If true then create a source-map for the generated code and include it |

#### returns (#evaluateStatements-returns)

A map of all the variables in the generated code.

### evaluateCode

#### description (#evaluateCode-description)

Evaluate a piece of JIT generated code.

```ts
evaluateCode(   sourceUrl: string, ctx: EmitterVisitorContext, vars: {[key: string]: any},   createSourceMap: boolean): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_jit.ts#L56-L78)

#### Parameters (#evaluateCode-parameters)

| Name            | Type                      | Description                                                                      |
| --------------- | ------------------------- | -------------------------------------------------------------------------------- |
| sourceUrl       | `string`                  | The URL of this generated code.                                                  |
| ctx             | `EmitterVisitorContext`   | A context object that contains an AST of the code to be evaluated.               |
| vars            | `{ [key: string]: any; }` | A map containing the names and values of variables that the evaluated code might |
| createSourceMap | `boolean`                 | If true then create a source-map for the generated code and include it           |

#### returns (#evaluateCode-returns)

The result of evaluating the code.

### executeFunction

#### description (#executeFunction-description)

Execute a JIT generated function by calling it.

This method can be overridden in tests to capture the functions that are generated
by this `JitEvaluator` class.

```ts
executeFunction(fn: Function, args: any[]);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_jit.ts#L90-L92)

#### Parameters (#executeFunction-parameters)

| Name | Type       | Description                                           |
| ---- | ---------- | ----------------------------------------------------- |
| fn   | `Function` | A function to execute.                                |
| args | `any[]`    | The arguments to pass to the function being executed. |

#### returns (#executeFunction-returns)

The return value of the executed function.
