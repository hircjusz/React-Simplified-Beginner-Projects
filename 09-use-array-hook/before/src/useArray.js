 export function useArray(initialArray) {
     const [array, setArray] = useState(initialArray);

     return {
         array,
         set: setArray,
         push: (element) => setArray(a => [...a, element]),
         filter: (callback) => setArray(a => a.filter(callback)),
         replace: (index, newElement) => setArray(a => a.map((el, i) => i === index ? newElement : el)),
         remove: (index) => setArray(a => a.filter((_, i) => i !== index)),
         clear: () => setArray([]),
         reset: () => setArray(initialArray)
     };
 }

 import { useState } from "react";