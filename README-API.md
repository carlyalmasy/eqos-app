# Application API

This file is intended to document the application API.

## Repository Search Endpoints

Repository search endpoints have the following route signature:

````dylan
/api/app/search/{repository}
````

Where the `{repository}` corresponds to a `SearchSelect` component's repository:

- `occupations`
- `categories`
- providers
- etc

Search endpoints allow the options returned to be constrained by other selection by sending the selected `id` of others.  For example `/api/app/search/occupations?provider=123` would only show occupations related to provider `123`.  To narrow down results based on typeahead you can pass the `fuzzy` parameter:

```
/api/app/search/occupations?fuzzy=Admin&provider=123
```

The above would only return fuzzy matched occupations (by name) for `Admin` and only those constrained to provider `123`.

The response of all repository search endpoints is an array of objects containing the `id` and `name` of the individual records that match the query, e.g:

```json
[
	{"id": 1, "name": "..."},
	{"id": 2, "name": "..."}
]
```

> NOTE: Endpoints for individual repositorys and their handling of fuzzy search and constraints need to be added on a **per-repository** basis.  You cannot query any repository and expect working results.

## Search API

The search API endpoint is located at:

```
/api/app/search
```

This will return a number of credential objects in a `data` property (which is an array) as well as additional `meta` information about total number of records, limit (per page results), and current page.  You can adjust the limit by changing the `l` (lowercase "L") query parameter, and the page via the `p` parameter.  You can also specify any number of the following:

| Parameter  | Type    | Description                                                |
| ---------- | ------- | ---------------------------------------------------------- |
| category   | integer | The `id` of the category for which to search credentials.  |
| provider   | integer | The id of the provider for which to search credentials.    |
| occupation | integer | The id of the occupation for which the search credentials. |

The following would return page `2` of credential results with a limit of `25` for all credentials aligned with occupation `123`:

````
/api/app/search?l=25&p=2&occupation=123
````

The result returned looks like:

```json
{
	"data": [
		...
	],
	"meta": [
		"total": <integer>,
		"limit": <integer>,
		"page":  <integer
	]
}
```

You can get the total number of pages by dividing `meta.total` by `meta.limit` and rounding up.  So if there are `1037` results, and a limit of `20` then there would be `51.85` pages.  Since there's a fraction of a page over `51`, the actual page count is `52`.

Each object in the array of `data` looks like the following:

```json
{
	"id": <credential id>,
	"header": {
		"<title>": {}|[],
		...
	}
    "scores": {
        "overall": <real>,
        "details": {
            "<title>": <real>,
            ...
        }
    }
}
```

Keys which map to a `<title>` are designed so that the API drives the content.  The key itself can be used as a heading, while its value determines the content/visual.  In the case of `header` information, the value can map to either an object, or an array of objects with the same structure, which is always:

```json
{
    "id": <integer|string|null>,
    "text": <string>
}
```

If the value is an array, the `text` property of each object should be joined together with `, ` (comma + space) to create list.  If the id is `null` it may be because the header information does not reference another record type.  Otherwise, it is the ID as it would pertain to a given repository.

The results will always be sorted by `score.overall`, from highest to lowest.  The `scores.details` will always be sorted by the display order of the dimension they represent.

## Detail API

The detail API is meant to get the details of a credential once the ID of the credential is known from the Search API.  In principle, it can be extended to get additional details about any repository item, but right now `credentials` is the only supported repository, the route is as follows:

```dylan
/api/app/detail/{repository}/{id}
```

So to get credential details you would hit something like:

```
/api/app/detail/credentials/510955
```

The detail response will vary depending on the repository, by at minimum the response will contain

- `id`: the id of the requested record (should match the URL)
- `overview`: an object containing overview information about the record

Below will document the record detail specific properties.

### Credential Detail

In addition to `id` and `overview` credential details will return:

- `alignments`: array containing information about aligned records.
- `scores`: the same structure as the `scores` property of `data` objects returned by the Search API

#### Overview

The credential `overview` object looks like the following:

```json
{
    "id": <integer>,
    "name": <string>,
    "type": <string>,
    "description": <string>,
    "provider": {
    	"id": <integer>,
    	"name": <string>
	}
}
```

The `type` property may be "Program" or "Program Category" depending on the level at which the credential score information is operate.  The `id` correspondingly will refer to either the id of the `Program` or `Program Category` depending on the type.

In all cases the `name` will refer to the resolved name of its type.

In all cases the `description` will refer to the resolved description of the credential itself, or, if empty, the resolved description of its type.

In all cases the `provider` will be an object whose `id` is the ID of the associated provider and whose `name` is the name of the associated provider.

### Alignments

The `alignments` property is an array of objects with the following structure:

```json
{
	"title": <string>,
	"items": [
		{ "text": <string> },
		...
	]
}
```

The `title` of each alignment is used so that the API can drive content.  It can be passed through as the heading of a section/card which should contain a list of the `items`.  Each item object will minimally have a `text` property which can be passed through as a list item in the section.  Additional properties, including `type` identification or `id` may be added latter for linked data.

### Scores

The `scores` property is the same structure as the scores property of each `data` object for the Search API.  It contains `details` as an object of dimension names mapped to dimension scores and `overall` for the overall score for the credential.