---
kind: ClassDeclaration
name: Meta
module: platform-browser
---

# Meta

## description

A service for managing HTML `<meta>` tags.

Properties of the `MetaDefinition` object match the attributes of the
HTML `<meta>` tag. These tags define document metadata that is important for
things like configuring a Content Security Policy, defining browser compatibility
and security settings, setting HTTP Headers, defining rich content for social sharing,
and Search Engine Optimization (SEO).

To identify specific `<meta>` tags in a document, use an attribute selection
string in the format `"tag_attribute='value string'"`.
For example, an `attrSelector` value of `"name='description'"` matches a tag
whose `name` attribute has the value `"description"`.
Selectors are used with the `querySelector()` Document method,
in the format `meta[{attrSelector}]`.

```ts
class Meta {
  addTag(
    tag: MetaDefinition,
    forceCreation: boolean = false
  ): HTMLMetaElement | null;
  addTags(
    tags: MetaDefinition[],
    forceCreation: boolean = false
  ): HTMLMetaElement[];
  getTag(attrSelector: string): HTMLMetaElement | null;
  getTags(attrSelector: string): HTMLMetaElement[];
  updateTag(tag: MetaDefinition, selector?: string): HTMLMetaElement | null;
  removeTag(attrSelector: string): void;
  removeTagElement(meta: HTMLMetaElement): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/meta.ts#L65-L195)

## see

[HTML meta tag](https://developer.mozilla.org/docs/Web/HTML/Element/meta)
[Document.querySelector()](https://developer.mozilla.org/docs/Web/API/Document/querySelector)

## publicApi

## Methods

### addTag

#### description (#addTag-description)

Retrieves or creates a specific `<meta>` tag element in the current HTML document.
In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
values in the provided tag definition, and verifies that all other attribute values are equal.
If an existing element is found, it is returned and is not modified in any way.

```ts
addTag(tag: MetaDefinition, forceCreation: boolean = false): HTMLMetaElement|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/meta.ts#L81-L84)

#### Parameters (#addTag-parameters)

| Name          | Type             | Description                                                               |
| ------------- | ---------------- | ------------------------------------------------------------------------- |
| tag           | `MetaDefinition` | The definition of a `<meta>` element to match or create.                  |
| forceCreation | `boolean`        | True to create a new element without checking whether one already exists. |

#### returns (#addTag-returns)

The existing element with the same attributes and values if found,
the new element if no match is found, or `null` if the tag parameter is not defined.

### addTags

#### description (#addTags-description)

Retrieves or creates a set of `<meta>` tag elements in the current HTML document.
In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
values in the provided tag definition, and verifies that all other attribute values are equal.

```ts
addTags(tags: MetaDefinition[], forceCreation: boolean = false): HTMLMetaElement[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/meta.ts#L94-L102)

#### Parameters (#addTags-parameters)

| Name          | Type               | Description                                                              |
| ------------- | ------------------ | ------------------------------------------------------------------------ |
| tags          | `MetaDefinition[]` | An array of tag definitions to match or create.                          |
| forceCreation | `boolean`          | True to create new elements without checking whether they already exist. |

#### returns (#addTags-returns)

The matching elements if found, or the new elements.

### getTag

#### description (#getTag-description)

Retrieves a `<meta>` tag element in the current HTML document.

```ts
getTag(attrSelector: string): HTMLMetaElement|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/meta.ts#L110-L113)

#### Parameters (#getTag-parameters)

| Name         | Type     | Description                                                 |
| ------------ | -------- | ----------------------------------------------------------- |
| attrSelector | `string` | The tag attribute and value to match against, in the format |

#### returns (#getTag-returns)

The matching element, if any.

### getTags

#### description (#getTags-description)

Retrieves a set of `<meta>` tag elements in the current HTML document.

```ts
getTags(attrSelector: string): HTMLMetaElement[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/meta.ts#L121-L125)

#### Parameters (#getTags-parameters)

| Name         | Type     | Description                                                 |
| ------------ | -------- | ----------------------------------------------------------- |
| attrSelector | `string` | The tag attribute and value to match against, in the format |

#### returns (#getTags-returns)

The matching elements, if any.

### updateTag

#### description (#updateTag-description)

Modifies an existing `<meta>` tag element in the current HTML document.

```ts
updateTag(tag: MetaDefinition, selector?: string): HTMLMetaElement|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/meta.ts#L136-L144)

#### Parameters (#updateTag-parameters)

| Name     | Type             | Description                                                         |
| -------- | ---------------- | ------------------------------------------------------------------- |
| tag      | `MetaDefinition` | The tag description with which to replace the existing tag content. |
| selector | `string`         | A tag attribute and value to match against, to identify             |

#### return (#updateTag-return)

The modified element.

### removeTag

#### description (#removeTag-description)

Removes an existing `<meta>` tag element from the current HTML document.

```ts
removeTag(attrSelector: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/meta.ts#L151-L153)

#### Parameters (#removeTag-parameters)

| Name         | Type     | Description                                             |
| ------------ | -------- | ------------------------------------------------------- |
| attrSelector | `string` | A tag attribute and value to match against, to identify |

### removeTagElement

#### description (#removeTagElement-description)

Removes an existing `<meta>` tag element from the current HTML document.

```ts
removeTagElement(meta: HTMLMetaElement): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/meta.ts#L159-L163)

#### Parameters (#removeTagElement-parameters)

| Name | Type              | Description                                                      |
| ---- | ----------------- | ---------------------------------------------------------------- |
| meta | `HTMLMetaElement` | The tag definition to match against to identify an existing tag. |
