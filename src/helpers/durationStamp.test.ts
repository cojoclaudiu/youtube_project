import { durationStamp } from './durationStamp';

test('durationStamp', () => {
  expect(durationStamp('PT17M')).toBe('17:00');
  expect(durationStamp('PT2H')).toBe('2:00:00');
  expect(durationStamp('PT2S')).toBe('0:02');
  expect(durationStamp('PT10S')).toBe('0:10');
  expect(durationStamp('PT2M27S')).toBe('2:27');
  expect(durationStamp('PT4M14S')).toBe('4:14');
  expect(durationStamp('PT3M18S')).toBe('3:18');
  expect(durationStamp('PT21M6S')).toBe('21:06');
  expect(durationStamp('PT0M1S')).toBe('0:01');
  expect(durationStamp('PT0M9')).toBe('0:09');
});
