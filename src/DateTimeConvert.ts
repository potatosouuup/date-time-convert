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
  const dateTime: ExportType = {
    input: dayjs(`${inDate}T${inTime}`).tz(inTimeZone).format('YYYY-MM-DDTHH:mm:ssZ'),
    utc: dayjs(`${inDate}T${inTime}`).tz(inTimeZone).utc().format('YYYY-MM-DDTHH:mm:ssZ'),
    timezone: dayjs(`${inDate}T${inTime}`).tz(outTimeZone).format('YYYY-MM-DDTHH:mm:ssZ')
  }
  return dateTime
}
