export const dateFormatter = (date: string | undefined) => {
  if (date !== undefined) {
    let dateToday: Date | string = new Date()
    const parseDate = new Date(Date.parse(date))

    const dataToday = {
      dd: String(dateToday.getDate()).padStart(2, "0"),
      mm: String(dateToday.getMonth() + 1).padStart(2, "0"),
      yyyy: dateToday.getFullYear(),
    }

    const dataParse = {
      dd: String(parseDate.getDate()).padStart(2, "0"),
      mm: String(parseDate.getMonth() + 1).padStart(2, "0"),
      yyyy: parseDate.getFullYear(),
    }

    dateToday = `${dataToday.yyyy}-${dataToday.mm}-${dataToday.dd}`

    if (dateToday === date) return "Today"
    if (
      dataParse.mm === dataToday.mm &&
      dataParse.yyyy === dataToday.yyyy &&
      parseInt(dataParse.dd, 10) - parseInt(dataToday.dd, 10) === 1
    )
      return "Tomorrow"

    return `${dataParse.dd}/${dataParse.mm}`
  }

  return ""
}

export const formatterDateCreateTask = (date: Date) => {
  const dataParse = {
    dd: String(date.getDate()).padStart(2, "0"),
    mm: String(date.getMonth() + 1).padStart(2, "0"),
    yyyy: date.getFullYear(),
  }

  return `${dataParse.yyyy}-${dataParse.mm}-${dataParse.dd}`
}

export const shortTitleFormatter = (title: string | undefined) => {
  const maxSymbols = 30
  if (title !== undefined) {
    return title.length > maxSymbols
      ? `${title.substring(0, maxSymbols)}...`
      : title
  }

  return ""
}

export const shortTextFormatter = (text: string | undefined) => {
  const maxSymbols = 50
  if (text !== undefined) {
    return text.length > maxSymbols
      ? `${text.substring(0, maxSymbols)}...`
      : text
  }

  return ""
}

export const shortTextTaskFormatter = (text: string | undefined) => {
  const maxSymbols = 28
  if (text !== undefined) {
    return text.length > maxSymbols
      ? `${text.substring(0, maxSymbols)}...`
      : text
  }

  return ""
}
