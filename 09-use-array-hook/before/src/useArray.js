 export function useArray(initialArray) {
     const [array, setArray] = useState(initialArray);

     const push = useCallback((element) => setArray(a => [...a, element]), []);
     const filter = useCallback((callback) => setArray(a => a.filter(callback)), []);
     const replace = useCallback((index, newElement) => setArray(a => a.map((el, i) => i === index ? newElement : el)), []);
     const remove = useCallback((index) => setArray(a => a.filter((_, i) => i !== index)), []);
     const clear = useCallback(() => setArray([]), []);
     const reset = useCallback(() => setArray(initialArray), [initialArray]);

     return {
         array,
         set: setArray,
         push,
         filter,
         replace,
         remove,
         clear,
         reset
     };
 }

 import { useState, useCallback } from "react";