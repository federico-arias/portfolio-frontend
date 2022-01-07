export const isOfLength = (len: number) => (str: string) => {
  if (str.length < len)
    return `should have a length of at least ${len} characters`
}


export const isInRange = (min: number, max: number) => (n: number) => {
  if (n > max || n < min) {
    return `should be less than ${max} and more than ${min}`
  }
}

export const isRegex = (regex: RegExp) => (str: string) => {
  if (!regex.test(str)) {
    return `is not valid`
  }
}

export const contains = (char: string) => (str: string) => {
  if (str.split("").indexOf(char) === -1) 
    return `should contain the character ${char}`
}

/*
export const pipe = (...fns) => (str: string) => {
  return fn.reduce( 
}
 */
