# date-time-convert

Convert the entered Date/Time to UTC and Date/Time of the desired TimeZone.
(This is something that individuals made lightly.)

## Params

| **Param**   | **Type** | **Desctiption**                              |
| ----------- | -------- | -------------------------------------------- |
| inTimeZone  | string   | Enter start-timezone                         |
| inDate      | string   | Enter start-date                             |
| inTime      | string   | Enter start-time                             |
| outTimeZone | string   | Enter which TimeZone you want to convert to. |

## Example

```tsx
useEffect(() => {
  if (...) {
   dateTimeConvert({
        inTimeZone: 'Asia/Seoul',
        inDate: '2022-12-20',
        inTime: '01:40',
        outTimeZone: 'America/Los_Angeles'
      })
  }
}, [...])

// *** Result :

// input: '2022-12-20T01:40:00+09:00',    --- Entered Date/Time
// utc: '2022-12-19T16:40:00+00:00',      --- UTC Date/Time
// timezone: '2022-12-19T08:40:00-08:00'  --- Date/Time of the Time Zone you wanted

```
