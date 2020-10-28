
export const required = (value) => {
  if (value) return undefined;
  return "Field is required";
}

export const maxLengthCreator = (maxLength) =>(value) => {

    if (value.length > maxLength) return `Max length of symbol is ${maxLength}`;
    return undefined;

}
