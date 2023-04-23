import mergeClassName, { classes } from '../classes';

describe('mergeClassName', () => {
  it('接受 1 个className', () => {
    const result = mergeClassName('name1');
    expect(result).toEqual('name1');
  });
  it('接受 2 个className', () => {
    const result = mergeClassName('name1', 'name2');
    expect(result).toEqual('name1 name2');
  });
  it('接受 2 个className其中有一个是undefined', () => {
    const result = mergeClassName('name1', undefined);
    expect(result).toEqual('name1');
  });
  it('接受多个空值', () => {
    const result = mergeClassName(null, 0, undefined, false);
    expect(result).toEqual('');
  });
  it('什么都不传', () => {
    const result = mergeClassName();
    expect(result).toEqual('');
  });
});
describe('classes', () => {
  it('接受字符串', () => {
    const fn = classes('koala-tree');
    expect(fn('')).toEqual('koala-tree');
    expect(fn('ddd')).toEqual('koala-tree-ddd');
    expect(fn({ red: 'true', green: true, yellow: true })).toEqual(
      'koala-tree-red koala-tree-green koala-tree-yellow',
    );
    expect(fn({ red: 'true', green: false, yellow: true })).toEqual(
      'koala-tree-red koala-tree-yellow',
    );
    expect(
      fn({ red: 'true', green: false, yellow: true }, { extra: 'heelo' }),
    ).toEqual('koala-tree-red koala-tree-yellow heelo');
  });
});
