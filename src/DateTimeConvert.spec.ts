import { DateTimeConvert } from './DateTimeConvert'

// 테스팅 코드
describe('DateTimeConvert', () => {
  it('Best case', () => {
    expect(
      DateTimeConvert({
        inTimeZone: 'Asia/Seoul',
        inDate: '2022-12-20',
        inTime: '01:40',
        outTimeZone: 'America/Los_Angeles'
      })
    ).toStrictEqual({
      input: '2022-12-20T01:40:00+09:00',
      utc: '2022-12-19T16:40:00+00:00',
      timezone: '2022-12-19T08:40:00-08:00'
    })
  })
})
