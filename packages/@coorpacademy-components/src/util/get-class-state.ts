const getClassState = (
  defaultClassName: string,
  modifiedClassName: string,
  errorClassName: string,
  isModified: boolean = false,
  isError: boolean = false
) => {
  if (isError) {
    return errorClassName;
  } else if (isModified) {
    return modifiedClassName;
  }
  return defaultClassName;
};

export default getClassState;
