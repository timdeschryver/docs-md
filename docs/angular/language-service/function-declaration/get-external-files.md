---
kind: FunctionDeclaration
name: getExternalFiles
module: language-service
---

# getExternalFiles

## description

This function is called by tsserver to retrieve the external (non-TS) files
that should belong to the specified `project`. For Angular, these files are
external templates. This is called once when the project is loaded, then
every time when the program is updated.

```ts
function getExternalFiles(project: tss.server.Project): string[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/language-service/src/ts_plugin.ts#L25-L34)

## Parameters

| Name    | Type  | Description                                           |
| ------- | ----- | ----------------------------------------------------- |
| project | `any` | Project for which external files should be retrieved. |
