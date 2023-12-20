function getInputUpdater(setter) {
  return function handleChange(e) {
    setter(e.target.value);
  };
}

export { getInputUpdater };
