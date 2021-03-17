const compose = (...fns) => fns.reduce(
    (pre, cur) => (...args) => pre(cur(...args)),
);
export default compose;
