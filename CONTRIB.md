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

