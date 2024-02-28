## Contributors

- Carly Almasy <calmasy@jff.org>
- Matthew J. Sahagian <msahagian@jff.org>

## Directory Structure

- **assets**: This folder should contain images and other non HTML assets that are importable
- **components**: This is the main re-usable components folder, subfolders for additional organization
- **layouts**: This is for top-level layout components like, full-width page, vs. page with sidebar
- **pages**: This is for individual pages, pages will generally start with a layout component
- **state**: This is for shared state objects to be imported with useSignal()
- **topics**: This is for exportable content to populate components, markdown, text, or JSON objects
- **utilities**: For general helper functions that are useful cross component

## State Management

This project uses Preact signals for React.  To remain consistent, we are using do not use the `signal()` or `effect()` or `computed()` shorthands.  We will only use the following styles in each of these contexts:

### Creating Signal Outside of Component

```
const foo = useSignal('');

export default function Component() {

};
```

> NOTE: Signals created outside the component are effectively global.

### Creating Signal Inside a Component

```
export default function Component() {
	const foo = useSignal('');

};
```

### Use Effect At Component Initialization Only

```
export default function Component() {
	useEffect(() => {
		console.log('do things once');
	}, []);

};
```

> NOTE: This is react's standard `useEffect()`, Preact does not hae an equivalent for one-time (non-dependency) runs.

### Use Signal Effect On Component / Signal Re-Render

```
export default function Component() {
	useSignalEffect(() => {
		console.log('do things on update');
	}, []);

};
```

### Use Computed To Create Signal Dependent Derivatives

```
const foo = useComputed(() => {
	return foosignal.value * 2;
});
```

> NOTE: This can be placed either outside the component for global scope or in the component for component scope.

### Credentials Scoring

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