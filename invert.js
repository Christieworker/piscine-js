function invert(person) {
  const inverted = {};
  for (let x in person) {
    if (person.hasOwnProperty(x)) {
      inverted[person[x]] = x;
    }
  }
  return inverted;
}
