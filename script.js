function firstWord(s) {
  // Handle null or empty string
  if (!s) return "";

  // Remove leading spaces
  s = s.trimStart();

  // Find first space index
  let index = s.indexOf(" ");

  // If no space found → return full string
  if (index === -1) return s;

  // Return substring till first space
  return s.slice(0, index);
}

// Do not change below
const s = prompt("Enter String:");
alert(firstWord(s));
