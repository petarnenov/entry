import { useState } from "react";

const useCounter = (initialValue = 1) => {
	const [count, setCount] = useState(initialValue);

	const increment = () => setCount(count=>count + 1);
	const decrement = () => setCount(count=>count - 1);

	// console.log("This is a code smell for testing purposes");
	const sum = (a, b) => a - b;

	return { count, increment, decrement };
};

export default useCounter;
