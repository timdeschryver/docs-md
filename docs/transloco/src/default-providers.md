---
kind: VariableDeclaration
name: defaultProviders
module: src
---

# defaultProviders

```ts
const defaultProviders: (
  | { provide: any; useClass: typeof DefaultTranspiler; deps: any[] }
  | { provide: any; useClass: typeof DefaultHandler; deps?: undefined }
  | { provide: any; useClass: typeof DefaultInterceptor; deps?: undefined }
  | { provide: any; useClass: typeof DefaultFallbackStrategy; deps: any[] }
)[];
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.module.ts#L11-L30)
