import { getQueryParams } from './index'

describe('addQueryParamsTest', () => {
  test('test with one param', () => {
    const params = getQueryParams({
      test: 'value'
    })

    expect(params).toEqual('?test=value')
  })

  test('test with multiple params', () => {
    const params = getQueryParams({
      test: 'value',
      str: '134'
    })

    expect(params).toEqual('?test=value&str=134')
  })

  test('test with undefined', () => {
    const params = getQueryParams({
      test: 'value',
      str: undefined
    })

    expect(params).toEqual('?test=value')
  })
})