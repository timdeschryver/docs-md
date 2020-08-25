---
kind: FunctionDeclaration
name: parseTemplate
module: compiler
---

# parseTemplate

## description

Parse a template into render3 `Node`s and additional metadata, with no other dependencies.

```ts
function parseTemplate(
  template: string,
  templateUrl: string,
  options: ParseTemplateOptions = {}
): {
  errors?: ParseError[];
  nodes: t.Node[];
  styleUrls: string[];
  styles: string[];
  ngContentSelectors: string[];
};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/template.ts#L2007-L2063)

## Parameters

| Name        | Type                   | Description                                          |
| ----------- | ---------------------- | ---------------------------------------------------- |
| template    | `string`               | text of the template to parse                        |
| templateUrl | `string`               | URL to use for source mapping of the parsed template |
| options     | `ParseTemplateOptions` | options to modify how the template is parsed         |
