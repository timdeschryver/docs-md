---
kind: ClassDeclaration
name: TranslocoDirective
module: src
---

# TranslocoDirective

```ts
class TranslocoDirective implements OnInit, OnDestroy, OnChanges {
  subscription: Subscription | null;
  view: EmbeddedViewRef<any>;
  @Input("transloco") key: string;
  @Input("translocoParams") params: HashMap = {};
  @Input("translocoScope") inlineScope: string | undefined;
  @Input("translocoRead") inlineRead: string | undefined;
  @Input("translocoLang") inlineLang: string | undefined;
  @Input("translocoLoadingTpl") inlineTpl: TemplateRef<any> | undefined;

  ngOnInit();
  ngOnChanges(changes);
  ngOnDestroy();
}
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.directive.ts#L28-L156)

## Methods

### ngOnInit

```ts
ngOnInit();
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.directive.ts#L62-L94)

### ngOnChanges

```ts
ngOnChanges(changes);
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.directive.ts#L96-L101)

#### Parameters (#ngOnChanges-parameters)

| Name    | Type  | Description |
| ------- | ----- | ----------- |
| changes | `any` |             |

### ngOnDestroy

```ts
ngOnDestroy();
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/transloco.directive.ts#L142-L144)

## Parameters

| Name         | Type           | Description |
| ------------ | -------------- | ----------- |
| subscription | `any`          |             |
| view         | `any`          |             |
| key          | `string`       |             |
| params       | `HashMap<any>` |             |
| inlineScope  | `string`       |             |
| inlineRead   | `string`       |             |
| inlineLang   | `string`       |             |
| inlineTpl    | `any`          |             |
