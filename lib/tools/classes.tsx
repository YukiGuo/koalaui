const mergeClassName = (...names: (string | undefined)[]) => {
  return names.filter((v) => Boolean(v)).join(' ');
};

interface Param {
  [K: string]: boolean;
}
interface Options {
  extra: string | undefined;
}
export default mergeClassName;
//监头函数return一个箭头函数
const classes =
  (prefix: string) => (name: string | Param, options?: Options) => {
    const nameObject =
      typeof name === 'string' || !name ? { [name]: name } : name;
    return Object.entries(nameObject)
      .filter((ele) => false !== ele[1])
      .map((ele) => ele[0])
      ?.map((ele) => {
        return [prefix, ele].filter(Boolean).join('-');
      })
      .concat((options && options.extra) || [])
      .join(' ');
  };
export { classes };
