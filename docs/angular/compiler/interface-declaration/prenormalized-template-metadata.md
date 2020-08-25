---
kind: InterfaceDeclaration
name: PrenormalizedTemplateMetadata
module: compiler
---

# PrenormalizedTemplateMetadata

```ts
interface PrenormalizedTemplateMetadata {
  ngModuleType: any;
  componentType: any;
  moduleUrl: string;
  template: string | null;
  templateUrl: string | null;
  styles: string[];
  styleUrls: string[];
  interpolation: [string, string] | null;
  encapsulation: ViewEncapsulation | null;
  animations: any[];
  preserveWhitespaces: boolean | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/directive_normalizer.ts#L22-L34)

## Properties

| Name                | Type                | Description |
| ------------------- | ------------------- | ----------- |
| ngModuleType        | `any`               |             |
| componentType       | `any`               |             |
| moduleUrl           | `string`            |             |
| template            | `string`            |             |
| templateUrl         | `string`            |             |
| styles              | `string[]`          |             |
| styleUrls           | `string[]`          |             |
| interpolation       | `[string, string]`  |             |
| encapsulation       | `ViewEncapsulation` |             |
| animations          | `any[]`             |             |
| preserveWhitespaces | `boolean`           |             |
