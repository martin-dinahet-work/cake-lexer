/* Literal tokens */

export type NumToken = { typ: "NumToken", val: string };
export type StrToken = { typ: "StrToken", val: string };
export type IdeToken = { typ: "IdeToken", val: string };
export type NulToken = { typ: "NulToken", val: string };

/* Symbol tokens */

export type LpaToken = { typ: "LpaToken", val: "(" };
export type RpaToken = { typ: "RpaToken", val: ")" };
export type LcuToken = { typ: "LcuToken", val: "{" };
export type RcuToken = { typ: "RcuToken", val: "}" };
export type LbrToken = { typ: "LbrToken", val: "[" };
export type RbrToken = { typ: "RbrToken", val: "]" };

export type ComToken = { typ: "ComToken", val: "," };
export type ColToken = { typ: "ColToken", val: ":" };
export type SemToken = { typ: "SemToken", val: ";" };
export type DotToken = { typ: "DotToken", val: "." };

export type LesToken = { typ: "LesToken", val: "<" };
export type GreToken = { typ: "GreToken", val: ">" };
export type EquToken = { typ: "EquToken", val: "=" };

/* Operator tokens */

export type AddToken = { typ: "AddToken", val: "+" };
export type SubToken = { typ: "SubToken", val: "-" };
export type MulToken = { typ: "MulToken", val: "*" };
export type DivToken = { typ: "DivToken", val: "/" };

/* Keyword tokens */

export type KeyToken = { typ: "KeyToken", val: string };


/* Literal types tokens */

export type NumTypeToken = { typ: "NumTypeToken", val: "num" };
export type StrTypeToken = { typ: "StrTypeToken", val: "str" };
export type NulTypeToken = { typ: "NulTypeToken", val: "nul" };


/* System tokens */

export type NewLineToken = { typ: "NewLineToken", val: "\n" };

/* Token */

export type Token =
  | NumToken
  | StrToken
  | IdeToken
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
  | NumTypeToken
  | StrTypeToken
  | KeyToken
  | NulTypeToken
  | NewLineToken
  ;

