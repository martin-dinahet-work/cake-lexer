/* Literal tokens */

export type NumToken = { val: string };
export type StrToken = { val: string };
export type IdeToken = { val: string };
export type BooToken = { val: string };
export type NulToken = { val: string };

/* Symbol tokens */

export type LpaToken = { val: "(" };
export type RpaToken = { val: ")" };
export type LcuToken = { val: "{" };
export type RcuToken = { val: "}" };
export type LbrToken = { val: "[" };
export type RbrToken = { val: "]" };

export type ComToken = { val: "," };
export type ColToken = { val: ":" };
export type SemToken = { val: ";" };
export type DotToken = { val: "." };

export type LesToken = { val: "<" };
export type GreToken = { val: ">" };
export type EquToken = { val: "=" };

/* Operator tokens */

export type AddToken = { val: "+" };
export type SubToken = { val: "-" };
export type MulToken = { val: "*" };
export type DivToken = { val: "/" };

/* Keyword token */

export type KeyToken = { val: string };

/* Literal types tokens */

export type NumTypeToken = { val: "num" };
export type StrTypeToken = { val: "str" };
export type NulTypeToken = { val: "nul" };

/* Token */

export type Token =
  | NumToken
  | StrToken
  | IdeToken
  | BooToken
  | NulToken
  | LpaToken
  | RpaToken
  | LcuToken
  | RcuToken
  | LbrToken
  | RbrToken
  | ComToken
  | ColToken
  | SemToken
  | DotToken
  | LesToken
  | GreToken
  | EquToken
  | AddToken
  | SubToken
  | MulToken
  | DivToken
  | KeyToken
  | NumTypeToken
  | StrTypeToken
  | NulTypeToken;
