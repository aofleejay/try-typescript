const dateStringToDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split('/').map(part => parseInt(part))

  return new Date(year, month - 1, day)
}

export { dateStringToDate }
