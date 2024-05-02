## Contributors

- Carly Almasy <calmasy@jff.org>
- Matthew J. Sahagian <msahagian@jff.org>

## Directory Structure

- **assets**: This folder should contain images and other non HTML assets that are importable
- **components**: This is the main re-usable components folder, subfolders for additional organization
- **layouts**: This is for top-level layout components like, full-width page, vs. page with sidebar
- **pages**: This is for individual pages, pages will generally start with a layout component
  - pages will generally follow the directory structure of their URLs, such that `/credentials` would map to `/credentials/Index.jsx`

- **topics**: This is for exportable content to populate components, markdown, text, or JSON objects
  - Content should not be embedded directly in components, but should always be imported from `topics` or included from an external URL (particularly for longer markdown files).

- **utilities**: For general helper functions that are useful cross component.

## State Management

This project uses Preact signals (https://preactjs.com/guide/v10/signals/) for React in addition to traditional React hooks.  Preact signals should be used wherever they are possible and are the preferred method as they have multiple benefits:

1. Parent re-rendering is reduced or eliminated (only dependent components are re-rendered)
2. Effects and Computed values do not require dependency tracking (dependencies are implicit based on the signals used within).
3. Signals can be declared in and exported from separate modules for cleaner shared state without the need for context.

It is important to note that Preact signals is not a replacement for all react hooks, but only those related to state management.  Use of traditional `useEffect` and `useLayoutEffect` are still necessary for providing render hooks, the former is particularly true when working with other react hooks like URL state management (e.g. `useParams` or `useSearchParams`).

### Creating Signal Outside of Component

You MUST use the `signal()` method (not `useSignal`) when initializing state outside of the component as is often done for shared state.

```javascript
const foo = signal('');

export default function Component() {

};
```

> NOTE: Signals created outside the component are effectively global as you can export them from the JS module.  Even if not exported, the same component used multiple times would affect the read/write the same state values as other components.

These can be useful for overall page content as page components will generally not be re-used.  Examples include the `pages/developers/Spec.jsx` file which uses a signal for the actual specification data.

### Creating Signal Inside a Component

To create a signal inside the component scope such that multiple instances of the same component would have their own state, you employ the `useSignal()` method instead:

```javascript
export default function Component() {
	const foo = useSignal('');

};
```

It is still possible to pass these signals to child components through props, as is done in the case of `components/credentials/search/SearchBox.jsx` where the search box manages the overall state (propagating URL state) for its child `SearchSelect` components.

### Use Signal Effect On Component / Signal Re-Render

To trigger effects on signal state/value changes, you can use the `useSignalEffect()` method.  This method is most often used to send requests for getting or posting data from or to an API on state changes.

```javascript
export default function Component() {
	useSignalEffect(() => {
		console.log('do things on update');
	});
};
```

### Use Computed To Create Signal Dependent Derivatives

If a value needs to be computed from signals and therefore updated with state changes, you can use the `useComputed()` method from Preact.

```javascript
const foo = useComputed(() => {
	return foosignal.value * 2;
});
```

## Other React Hooks

Although `useSignalEffect()` does trigger when the component is initialized as well as with any signal changes, it does not offer a way to only trigger once (on first signal change).  Accordingly React's built-in `useEffect()` method should still be used with empty dependencies when a post-render effect needs to be triggered only once.

```javascript
export default function Component() {
	useEffect(() => {
		console.log('do things once');
	}, []);

};
```

Additionally, because Preact methods can only operate on signals, other React hooks which may use or rely on traditional React state still requires the `useEffect()` and `useLayoutEffect()` method with dependencies.  The most common use case for this is when using the `useSearchParams()` to pull or push URL query state changes:

```javascript
const [params] = useSearchParams();

useLayoutEffect(() => {
	// Do params dependent setup
}, [params]);
```

## Utilities and Helper Functions

Placement of utilities and helper functions should depend on where they are employed.  Functions which are used or could be used in multiple components/contexts should be added to the `utilities` folder and generally named (lower camel case) after the default function export.  Ideally, each function is only a single folder.  In the off occasion it makes sense to combine multiple functions for export, the filename can represent a capital camel case "namespace" of sorts.

Examples of helper functions include:

### bjoin

The `bjoin` function is used for combining strings based on some boolean logic (generlaly ternary operators) or using the `&&` style for a simple on/off type condition.  This is preferred syntactically to creating long chains of `+` combined strings as it helps to keep the logic cleanly separated and provides nicer multi-line formatting with commas.  The result of all arguments are concatenated just as would be done with `+` but without the added visual parsing complexity:

```javascript
<span
    className={bjoin(
        "block truncate",
        selected && "font-semibold"
    )}
>
```

The example above shows a case where `block truncate1` is always part of the `className` however, `font-semibold` will only appear if `selected` is true.  Another example using a ternary shows where values may differ depending on a state value:

```javascript
bjoin(
    "relative cursor-default select-none py-2 pl-8 pr-4",
    active ? "bg-eqos-400 text-white" : "text-neutrals-dark-500"
)
```

### debug

The debug helper is preferable to using `console.log` directly and does nothing more than passing the first argument passed to it to `console.log` with the key difference that it only calls console log if the current `NODE_ENV` is equal to `development` as a string.  You can still pass objects and the such as parameters, however, the message will only print effectively in development mode ensuring we can add multiple debug lines to without the need to clean them up for production.

```javascript
debug("Getting " + collection);
```

## Credentials Scoring

This documents the ranges of scoring and their corresponding tier levels.  These tiers determine the gauges included for credential score displays and are implemented in the `utilities/ratings.jsx` file:

| Tier       | Min   | Max   |
| ---------- | ----- | ----- |
| Bronze-1   | 0.00  | 0.50  |
| Bronze-2   | 0.51  | 1.00  |
| Silver-1   | 1.01  | 1.50  |
| Silver-2   | 1.51  | 2.00  |
| Silver-3   | 2.01  | 2.50  |
| Gold-1     | 2.51  | 3.00  |
| Gold-2     | 3.01  | 3.50  |
| Gold-3     | 3.51  | 4.00  |
| Platinum-1 | 4.01  | 4.50  |
| Platinum-2 | 4.51  | 5.00  |
| Null       | null  | null  |
