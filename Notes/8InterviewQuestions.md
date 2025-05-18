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

A **React Synthetic Event** is React's cross-browser wrapper around the browser's native event. It is part of React's event system designed to provide a consistent API that works the same across all browsers.

### Why React uses Synthetic Events?

- Different browsers implement events slightly differently, which can lead to inconsistencies.
- React wants to provide a consistent, predictable interface for events regardless of the browser.
- Synthetic Events also improve performance by using event delegation.

### Key points about React Synthetic Events:

- They wrap the native browser event.
- They have the same interface as native events (like `stopPropagation()`, `preventDefault()`, etc.).
- They are pooled for performance reasons — meaning React reuses event objects internally for multiple events, so properties of the event might become `null` after the event handler finishes.
- To access the event asynchronously (e.g., inside a `setTimeout`), you must call `event.persist()` to remove the event from the pool.

### Example

```jsx
function handleClick(event) {
  console.log(event.type); // 'click'
  event.preventDefault(); // works like native event.preventDefault()
}

<button onClick={handleClick}>Click me</button>;
```

### Summary

- React Synthetic Event is a normalized wrapper around the browser's native event.
- It works the same across browsers.
- It is pooled and reused internally.
- You can call `event.persist()` if you need to keep the event beyond the event handler's lifecycle.

### Differences Between Stateless and Stateful Components

In React, **stateless components** are those that do not manage or store any internal state. They simply receive data through props and render UI accordingly. These are often called "presentational" components and are typically implemented as pure functions.

On the other hand, **stateful components** maintain their own local state. They can change their behavior or appearance based on user interaction or other internal logic. These components can be implemented using React class components or functional components with hooks like `useState`.

---

### Pros and Cons of Stateless Components

Stateless components are **lightweight**, easy to **test**, and **highly reusable**. Since they don't deal with any internal state, they are simple to understand and behave consistently. However, their limitation is that they rely completely on parent components to manage state and behavior.

Use stateless components when you only need to **display data** or **UI elements** that don’t change on their own—like buttons, headers, or layout containers.

---

### Pros and Cons of Stateful Components

Stateful components are ideal when you need to manage **dynamic behavior** within a component, such as form inputs, modals, or timers. They provide **better encapsulation** of logic, which can make some components easier to maintain independently.

The downside is that stateful components can become **harder to test**, **less reusable**, and **more complex** if too much logic is packed into one component.

---

### When to Use What

As a rule of thumb, use **stateless components** as much as possible for better clarity and reusability. Use **stateful components** when a part of the UI needs to respond to user input or track local state. Also, try to **lift the state up** when multiple components need access to the same data, keeping your components cleaner and easier to manage.

### What is a Higher-Order Component (HOC) in React?

In React terminology, a **Higher-Order Component (HOC)** is a **function that takes a component and returns a new enhanced component**. It’s a design pattern used for **code reuse**, especially for logic or behavior that is shared across multiple components.

Think of an HOC as a wrapper that adds additional functionality (like data fetching, logging, or conditional rendering) to the original component, without modifying its core implementation.

---

### Simple Use Case Example (No Code)

Imagine you have several components that need to display user data, but each of them must first **check if the user is authenticated** before showing anything. Instead of repeating the authentication check in every component, you can create a Higher-Order Component called `withAuth`.

This `withAuth` HOC would wrap your original components and handle the authentication logic. If the user is authenticated, it shows the wrapped component. If not, it redirects or shows a login prompt. This way, the authentication logic is **reusable and centralized**, and your original components stay clean and focused on their own responsibilities.

---
