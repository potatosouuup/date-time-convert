import { DateTimeConvert } from './DateTimeConvert'

// 테스팅 코드
describe('DateTimeConvert', () => {
  it('Best case', () => {
    expect(
      DateTimeConvert({
        inTimeZone: 'Asia/Dubai',
        inDate: '2022-12-20',
        inTime: '01:40',
        outTimeZone: 'Asia/Seoul'
      })
    ).toStrictEqual({
      input: '2022-12-20T01:40:00+04:00',
      utc: '2022-12-19T21:40:00+00:00',
      timezone: '2022-12-20T06:40:00+09:00'
    })
  })
})
