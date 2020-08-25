---
kind: FunctionDeclaration
name: createWorkspace
module: testing
---

# createWorkspace

```ts
async function createWorkspace(
  schematicRunner: SchematicTestRunner,
  appTree: UnitTestTree,
  workspaceOptions = defaultWorkspaceOptions,
  appOptions = defaultAppOptions,
  libOptions = defaultLibOptions
);
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/store-devtools/schematics-core/testing/create-workspace.ts#L34-L68)

## Parameters

| Name             | Type                                                                                                                                               | Description |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| schematicRunner  | `SchematicTestRunner`                                                                                                                              |             |
| appTree          | `UnitTestTree`                                                                                                                                     |             |
| workspaceOptions | `{ name: string; newProjectRoot: string; version: string; defaultProject: string; }`                                                               |             |
| appOptions       | `{ name: string; inlineStyle: boolean; inlineTemplate: boolean; viewEncapsulation: string; routing: boolean; style: string; skipTests: boolean; }` |             |
| libOptions       | `{ name: string; }`                                                                                                                                |             |
