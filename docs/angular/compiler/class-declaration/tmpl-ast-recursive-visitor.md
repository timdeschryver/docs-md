---
kind: ClassDeclaration
name: TmplAstRecursiveVisitor
module: compiler
---

# TmplAstRecursiveVisitor

```ts
class RecursiveVisitor implements Visitor<void> {
  visitElement(element: Element): void;
  visitTemplate(template: Template): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L177-L198)

## Methods

### visitElement

```ts
visitElement(element: Element): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L178-L182)

#### Parameters (#visitElement-parameters)

| Name    | Type      | Description |
| ------- | --------- | ----------- |
| element | `Element` |             |

### visitTemplate

```ts
visitTemplate(template: Template): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L183-L188)

#### Parameters (#visitTemplate-parameters)

| Name     | Type       | Description |
| -------- | ---------- | ----------- |
| template | `Template` |             |

### visitContent

```ts
visitContent(content: Content): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L189-L189)

#### Parameters (#visitContent-parameters)

| Name    | Type      | Description |
| ------- | --------- | ----------- |
| content | `Content` |             |

### visitVariable

```ts
visitVariable(variable: Variable): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L190-L190)

#### Parameters (#visitVariable-parameters)

| Name     | Type       | Description |
| -------- | ---------- | ----------- |
| variable | `Variable` |             |

### visitReference

```ts
visitReference(reference: Reference): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L191-L191)

#### Parameters (#visitReference-parameters)

| Name      | Type        | Description |
| --------- | ----------- | ----------- |
| reference | `Reference` |             |

### visitTextAttribute

```ts
visitTextAttribute(attribute: TextAttribute): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L192-L192)

#### Parameters (#visitTextAttribute-parameters)

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| attribute | `TextAttribute` |             |

### visitBoundAttribute

```ts
visitBoundAttribute(attribute: BoundAttribute): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L193-L193)

#### Parameters (#visitBoundAttribute-parameters)

| Name      | Type             | Description |
| --------- | ---------------- | ----------- |
| attribute | `BoundAttribute` |             |

### visitBoundEvent

```ts
visitBoundEvent(attribute: BoundEvent): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L194-L194)

#### Parameters (#visitBoundEvent-parameters)

| Name      | Type         | Description |
| --------- | ------------ | ----------- |
| attribute | `BoundEvent` |             |

### visitText

```ts
visitText(text: Text): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L195-L195)

#### Parameters (#visitText-parameters)

| Name | Type   | Description |
| ---- | ------ | ----------- |
| text | `Text` |             |

### visitBoundText

```ts
visitBoundText(text: BoundText): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L196-L196)

#### Parameters (#visitBoundText-parameters)

| Name | Type        | Description |
| ---- | ----------- | ----------- |
| text | `BoundText` |             |

### visitIcu

```ts
visitIcu(icu: Icu): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_ast.ts#L197-L197)

#### Parameters (#visitIcu-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| icu  | `Icu` |             |
