import { viewsFormat, statsFormat } from './formatCounts';

test('viewsFormat:', () => {
  expect(viewsFormat(40118023870)).toBe('40,118,023,870');
  expect(viewsFormat(1228891488)).toBe('1,228,891,488');
  expect(viewsFormat(584680666)).toBe('584,680,666');
  expect(viewsFormat(58468066)).toBe('58,468,066');
  expect(viewsFormat(5846806)).toBe('5,846,806');
  expect(viewsFormat(584680)).toBe('584,680');
  expect(viewsFormat(58468)).toBe('58,468');
  expect(viewsFormat(5846)).toBe('5,846');
  expect(viewsFormat(584)).toBe('584');
  expect(viewsFormat(58)).toBe('58');
  expect(viewsFormat(5)).toBe('5');
});

test('statsFormat:', () => {
  expect(statsFormat(13388721)).toBe('13M');
  expect(statsFormat(109875633)).toBe('110M');
  expect(statsFormat(1633326809)).toBe('1.6B');
  expect(statsFormat(160330)).toBe('160K');
  expect(statsFormat(1633)).toBe('1.6K');
});
