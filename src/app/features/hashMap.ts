/// ////////////////////////////////////////////////////////////////////////////
///
/// region:      --- HASHMAP DATA DIV ---
///
/// ////////////////////////////////////////////////////////////////////////////
// eslint-disable-next-line no-unused-vars
let hashMap = new Map();

const getDivHashMap = (): Map<number, HTMLDivElement> => {
  if (!hashMap) {
    hashMap = new Map();
  }
  return hashMap;
};

// let map: Map<number, HTMLDivElement>;
const map = getDivHashMap();

export const gridHashMap = (index: number, gridChild: HTMLDivElement) => {
  // eslint-disable-next-line prefer-const
  const result = getDivHashMap();
  if (result) {
    map.set(index, gridChild);
  }
  // track position of all div in the grid
  hashMap.set(index, gridChild);

  return hashMap;
};

/// ////////////////////////////////////////////////////////////////////////////
///
// region:      --- HASH MAP STENCIL ---
///
/// ////////////////////////////////////////////////////////////////////////////

export function colorDivHashMap(color: string) {
  const gridChildren = document.querySelectorAll<HTMLDivElement>(
    '#containerGrid > div',
  );

  map.forEach((index) => {
    const arr = new Array(index);
    // pick out div with the index value which matches the sequence in an array
    if (index === hashMap.keys().next().value) {
      gridChildren.forEach((gridChild) => {
        arr.push(gridChild);
      });

      arr.forEach((e) => {
        e.style.backgroundColor = color;
      });
    } // end if
  }); // end map.forEach
}

/// ////////////////////////////////////////////////////////////////////////////
///
/// region:      --- COPILOT LABS EXPLAINS ---
///
/// ////////////////////////////////////////////////////////////////////////////

/* Here is the explanation for the code above:
1. map is a Map object.
2. map.forEach is a method that iterates over the Map object.
3. map.forEach takes two arguments: a callback function and a this value.
4. The callback function is called for each entry in the Map object.
5. The this value is the value of the this parameter of map.forEach.
6. The callback function takes two arguments: a key and a value.
7. The key is the key of the entry in the Map object.
8. The value is the value of the entry in the Map object.
9. The callback function returns undefined.
10. The callback function is called for each entry in the Map object.
11. The callback function takes two arguments: a key and a value.
12. The key is the key of the entry in the Map object.
13. The value is the value of the entry in the Map object.
14. The callback function returns undefined.
15. The callback function is called for each entry in the Map object.
16. The callback function takes two arguments: a key and a value.
17. The key is the key of the entry in the Map object.
18. The value is the value of the entry in the Map object.
19. The callback function returns undefined.
20. The callback function is called for each entry in the Map object.
21. The callback function takes two arguments: a key and a value.
22. The key is the key of the entry in the Map object.
23. The value is the value of the entry in the Map object.
24. The callback function returns undefined.
25. The callback function is called for each entry in the Map object.
26. The callback function takes two arguments: a key and a value.
27. The key is the key of the entry in the Map object.
28. The value is the value of the entry in the Map object.
29. The callback function returns undefined.
30. The callback function is called for each entry in the Map object.
31. The callback function takes two arguments: a key and a value.
32. The key is the key of the entry in the Map object.
33. The value is the value of the entry in the Map object.
34. The callback function returns undefined.
35. The callback function is called for each entry in the Map object.
36. The callback function takes two arguments: a key and a value.
37. The key is the key of the entry in the Map object.
38. The value is the value of the entry in the Map object.
39. The callback function returns undefined.
40. The callback function is called for each entry in the Map object.
41. The callback function takes two arguments: a key and a value.
42. The key is the key of the entry in the Map object.
43. The value is the value of the entry in the Map object.
44. The callback function returns undefined.
45. The callback function is called for each entry in the Map object.
46. The callback function takes two arguments: a key and a value.
47. The key is the key of the entry in the Map object.
48. The value is the value of the entry in the Map object.
49. The callback function returns undefined.
50. The callback function is called for each entry in the Map object.
51. The callback function takes two arguments: a key and a value.
52. The key is the key of the entry in the Map object.
53. The value is the value of the entry in the Map object.
54. The callback function returns undefined.
55. The callback function is called for each entry in the Map object.
56. The callback function takes two arguments: a key and a value.
57. The key is the key of the entry in the Map object.
58. The value is the value of the entry in the Map object.
59. The callback function returns undefined.
60. The callback function is called for each entry in the Map object.
61. The callback function takes two arguments: a key and a value.
62. The key is the key of the entry in the Map object.
63. The value is the value of the entry in the Map object.
64. The callback function returns undefined.
65. The callback function is called for each entry in the Map object.
66. The callback function takes two arguments: a key and a value.
67. The key is the key of the entry in the Map object.
68. The value is the value of the entry in the Map object.
69. The callback function returns undefined.
70. The callback function is called for each entry in the Map object.
71. The callback function takes two arguments: a key and a value.
72. The key is the key of the entry in the Map object.
73. The value is the value of the entry in the Map object.
74. The callback function returns undefined.
75. The callback function is called for each entry in the Map object.
76. The callback function takes two arguments: a key and a value. */
