import addPrefix from "../addPrefix";

let prefix: string;
let suffix: string;
let result: string;
let divider: string;

afterEach(() => {
  prefix = "";
  suffix = "";
  result = "";
  divider = undefined;
});

describe("\nTests Suite for addPrefix():\n", () => {
  test(`Prefix: 'btn', Suffix: 'primary' and Divider: undefined. Result: 'btn-primary'`, () => {
    prefix = "btn";
    suffix = "primary";

    result = addPrefix(prefix, suffix);
    expect(result).toBe("btn-primary");
  });

  test(`Prefix: 'btn', Suffix: 'primary' and Divider: ''. Result: 'btn-primary'`, () => {
    prefix = "btn";
    suffix = "primary";
    divider = "";

    result = addPrefix(prefix, suffix);
    expect(result).toBe("btn-primary");
  });

  test(`Prefix: 'btn' and Suffix: ''. Result: empty string`, () => {
    prefix = "btn";
    suffix = "";

    result = addPrefix(prefix, suffix);
    expect(result).toBe("");
  });

  test(`Prefix: '' and Suffix: 'primary-button'. Result: 'primary-button'`, () => {
    prefix = "";
    suffix = "primary-button";

    result = addPrefix(prefix, suffix);
    expect(result).toBe("primary-button");
  });

  test(`Prefix: 'btn' and Suffix: undefined. Result: empty string`, () => {
    prefix = "btn";

    result = addPrefix(prefix, suffix);
    expect(result).toBe("");
  });

  test(`Prefix: undefined and Suffix: 'primary-button'. Result: 'primary-button'`, () => {
    suffix = "primary-button";

    result = addPrefix(prefix, suffix);
    expect(result).toBe("primary-button");
  });

  test(`Prefix: 'button', Suffix: 'is-success', and Divider: ' '. Result: 'button is-success'`, () => {
    prefix = "button";
    suffix = "is-success";
    divider = " ";

    result = addPrefix(prefix, suffix, divider);
    expect(result).toBe("button is-success");
  });
});
