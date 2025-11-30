import { useState } from "react";

function useArray(initial = []) {
  const [array, setArray] = useState(initial);

  const push = (element) => setArray(a => [...a, element]);

  const remove = (index) =>
    setArray(a => a.filter((_, i) => i !== index));

  const clear = () => setArray([]);

  return { array, push, remove, clear };
}

export default useArray;