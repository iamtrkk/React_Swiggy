`useMemo` is a React Hook that lets you **memoize** (i.e., cache) the result of a calculation between renders, **only recomputing when dependencies change**. It's useful when you have expensive calculations or derived data that shouldn't be recalculated unless necessary.

### ✅ Syntax

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### 📌 Use Cases

1. **Expensive computations** (e.g., filtering, sorting large lists).
2. **Avoiding unnecessary re-renders** of child components by memoizing props.

---

### 🔧 Example

```jsx
import React, { useMemo, useState } from "react";

function ExpensiveComponent({ items }) {
  const [filter, setFilter] = useState("");

  const filteredItems = useMemo(() => {
    console.log("Filtering...");
    return items.filter((item) => item.includes(filter));
  }, [items, filter]);

  return (
    <>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
```

In this example:

- `filteredItems` is recomputed only when `items` or `filter` changes.
- Without `useMemo`, the filter logic would run on every render, even when not necessary.

Would you like a comparison between `useMemo` and `React.memo` as well?

`useCallback` is a React Hook that returns a **memoized version of a callback function**, which only changes if its dependencies change. It’s useful to **prevent unnecessary re-creations of functions**, especially when passing them as props to memoized child components.

---

### ✅ Syntax

```js
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

---

### 📌 Use Cases

1. **Preventing unnecessary renders** of child components that rely on a function prop.
2. **Maintaining stable function references** between renders.
3. **Optimizing performance** in components with deep trees or heavy computations.

---

### 🔧 Example

```jsx
import React, { useState, useCallback } from "react";

const Button = React.memo(({ onClick, label }) => {
  console.log(`Rendering button: ${label}`);
  return <button onClick={onClick}>{label}</button>;
});

function Counter() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <Button onClick={increment} label="Increment" />
      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State
      </button>
    </>
  );
}
```

Without `useCallback`, the `increment` function would be re-created on every render, causing `Button` to re-render unnecessarily. With `useCallback`, the function reference is stable unless dependencies change.

Would you like a real-world use case or an example using `useCallback` with `useMemo` together?
