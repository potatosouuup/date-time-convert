import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)

interface ExportType {
  input: string
  utc: string
  timezone: string
}

interface Params {
  inTimeZone: string
  inDate: string
  inTime: string
  outTimeZone: string
}

export function DateTimeConvert({ inTimeZone, inDate, inTime, outTimeZone }: Params) {
  const timeZone = dayjs().tz(inTimeZone).format('Z')

  const input = dayjs(`${inDate}T${inTime}`).format('YYYY-MM-DDTHH:mm:ss') + timeZone
  const utc = dayjs(input).utc().format('YYYY-MM-DDTHH:mm:ssZ')
  const timezone = dayjs(utc).tz(outTimeZone).format('YYYY-MM-DDTHH:mm:ssZ')

  const dateTime: ExportType = {
    input,
    utc,
    timezone
  }
  return dateTime
}
