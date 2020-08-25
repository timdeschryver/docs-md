---
kind: ClassDeclaration
name: ɵDomSanitizerImpl
module: platform-browser
---

# ɵDomSanitizerImpl

```ts
class DomSanitizerImpl extends DomSanitizer {
  sanitize(
    ctx: SecurityContext,
    value: SafeValue | string | null
  ): string | null;
  bypassSecurityTrustHtml(value: string): SafeHtml;
  bypassSecurityTrustStyle(value: string): SafeStyle;
  bypassSecurityTrustScript(value: string): SafeScript;
  bypassSecurityTrustUrl(value: string): SafeUrl;
  bypassSecurityTrustResourceUrl(value: string): SafeResourceUrl;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/security/dom_sanitization_service.ts#L150-L208)

## Methods

### sanitize

```ts
sanitize(ctx: SecurityContext, value: SafeValue|string|null): string|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/security/dom_sanitization_service.ts#L156-L191)

#### Parameters (#sanitize-parameters)

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| ctx   | `any`   |             |
| value | `string | SafeValue`  |  |

### bypassSecurityTrustHtml

```ts
bypassSecurityTrustHtml(value: string): SafeHtml;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/security/dom_sanitization_service.ts#L193-L195)

#### Parameters (#bypassSecurityTrustHtml-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| value | `string` |             |

### bypassSecurityTrustStyle

```ts
bypassSecurityTrustStyle(value: string): SafeStyle;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/security/dom_sanitization_service.ts#L196-L198)

#### Parameters (#bypassSecurityTrustStyle-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| value | `string` |             |

### bypassSecurityTrustScript

```ts
bypassSecurityTrustScript(value: string): SafeScript;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/security/dom_sanitization_service.ts#L199-L201)

#### Parameters (#bypassSecurityTrustScript-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| value | `string` |             |

### bypassSecurityTrustUrl

```ts
bypassSecurityTrustUrl(value: string): SafeUrl;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/security/dom_sanitization_service.ts#L202-L204)

#### Parameters (#bypassSecurityTrustUrl-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| value | `string` |             |

### bypassSecurityTrustResourceUrl

```ts
bypassSecurityTrustResourceUrl(value: string): SafeResourceUrl;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/security/dom_sanitization_service.ts#L205-L207)

#### Parameters (#bypassSecurityTrustResourceUrl-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| value | `string` |             |
