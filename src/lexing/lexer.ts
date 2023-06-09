import {
  AddToken,
  ColToken,
  ComToken,
  DivToken,
  DotToken,
  EquToken,
  GreToken,
  IdeToken,
  KeyToken,
  LbrToken,
  LcuToken,
  LesToken,
  LpaToken,
  MulToken,
  NulTypeToken,
  NumToken,
  NumTypeToken,
  RbrToken,
  RcuToken,
  RpaToken,
  SemToken,
  StrToken,
  StrTypeToken,
  SubToken,
  Token,
  NewLineToken,
} from "./tokens.ts";

export class Lexer {
  private source: string[];
  private tokens: Token[];
  private cursor: string | null;
  private ccount: number;
  private buffer: string;
  private string: string;
  private lineno: number;
  private quotes: boolean;

  constructor(source: string) {
    this.source = source.split("");
    this.tokens = new Array<Token>();
    this.cursor = null;
    this.ccount = -1;
    this.buffer = "";
    this.string = "";
    this.lineno = 1;
    this.quotes = false;
    this.advance();
  }

  private advance(): void {
    this.ccount++;
    if (this.source.length > this.ccount) {
      this.cursor = this.source[this.ccount];
    } else {
      this.cursor = null;
    }
  }

  private error(explanation?: string): void {
    console.log(`ERROR: character ${this.cursor} at line ${this.lineno}`);
    console.log(explanation);
    Deno.exit(1);
  }

  private isNum(): boolean {
    const c = this.buffer.charCodeAt(0);
    return c >= "0".charCodeAt(0) && c <= "9".charCodeAt(0);
  }

  private isKey(): boolean {
    for (const key of ["let", "print"]) {
      if (key === this.buffer) {
        return true;
      }
    }
    return false;
  }

  private pushTyp(): void {
    switch (this.buffer) {
      case "num":
        this.tokens.push({ typ: "NumTypeToken", val: "num" } as NumTypeToken);
        break;
      case "str":
        this.tokens.push({ typ: "StrTypeToken", val: "str" } as StrTypeToken);
        break;
      case "nul":
        this.tokens.push({ typ: "NulTypeToken", val: "nul" } as NulTypeToken);
        break;
      default:
        break;
    }
  }

  private flushBuffer(): void {
    if (this.buffer.length > 0) {
      if (this.isNum()) {
        this.tokens.push({ typ: "NumToken", val: this.buffer } as NumToken);
      } else if (this.isKey()) {
        this.tokens.push({ typ: "KeyToken", val: this.buffer } as KeyToken);
      } else {
        this.pushTyp();
        this.tokens.push({ typ: "IdeToken", val: this.buffer } as IdeToken);
      }
    }
    this.buffer = "";
  }

  private flushString(): void {
    if (this.string.length > 0) {
      this.tokens.push({ typ: "StrToken", val: this.string } as StrToken);
    }
    this.string = "";
  }

  public run(): Token[] {
    while (this.cursor !== null) {
      if (this.cursor === '"' && this.quotes === false) {
        this.flushBuffer();
        this.quotes = true;
        this.advance();
      } else if (this.cursor === '"' && this.quotes === true) {
        this.flushString();
        this.quotes = false;
        this.advance();
      } else if (this.cursor !== '"' && this.quotes === true) {
        this.string += this.cursor;
        this.advance();
      } else if (this.cursor !== '"' && this.quotes === false) {
        switch (this.cursor) {
          case "(":
            this.flushBuffer();
            this.tokens.push({ typ: "LpaToken", val: "(" } as LpaToken);
            this.advance();
            break;
          case ")":
            this.flushBuffer();
            this.tokens.push({ typ: "RpaToken", val: ")" } as RpaToken);
            this.advance();
            break;
          case "{":
            this.flushBuffer();
            this.tokens.push({ typ: "LcuToken", val: "{" } as LcuToken);
            this.advance();
            break;
          case "}":
            this.flushBuffer();
            this.tokens.push({ typ: "RcuToken", val: "}" } as RcuToken);
            this.advance();
            break;
          case "[":
            this.flushBuffer();
            this.tokens.push({ typ: "LbrToken", val: "[" } as LbrToken);
            this.advance();
            break;
          case "]":
            this.flushBuffer();
            this.tokens.push({ typ: "RbrToken", val: "]" } as RbrToken);
            this.advance();
            break;
          case ",":
            this.flushBuffer();
            this.tokens.push({ typ: "ComToken", val: "," } as ComToken);
            this.advance();
            break;
          case ":":
            this.flushBuffer();
            this.tokens.push({ typ: "ColToken", val: ":" } as ColToken);
            this.advance();
            break;
          case ";":
            this.flushBuffer();
            this.tokens.push({ typ: "SemToken", val: ";" } as SemToken);
            this.advance();
            break;
          case ".":
            this.flushBuffer();
            this.tokens.push({ typ: "DotToken", val: "." } as DotToken);
            this.advance();
            break;
          case "<":
            this.flushBuffer();
            this.tokens.push({ typ: "LesToken", val: "<" } as LesToken);
            this.advance();
            break;
          case ">":
            this.flushBuffer();
            this.tokens.push({ typ: "GreToken", val: ">" } as GreToken);
            this.advance();
            break;
          case "=":
            this.flushBuffer();
            this.tokens.push({ typ: "EquToken", val: "=" } as EquToken);
            this.advance();
            break;
          case "+":
            this.flushBuffer();
            this.tokens.push({ typ: "AddToken", val: "+" } as AddToken);
            this.advance();
            break;
          case "-":
            this.flushBuffer();
            this.tokens.push({ typ: "SubToken", val: "-" } as SubToken);
            this.advance();
            break;
          case "*":
            this.flushBuffer();
            this.tokens.push({ typ: "MulToken", val: "*" } as MulToken);
            this.advance();
            break;
          case "/":
            this.flushBuffer();
            this.tokens.push({ typ: "DivToken", val: "/" } as DivToken);
            this.advance();
            break;
          case " ":
            this.flushBuffer();
            this.advance();
            break;
          case "\t":
            this.flushBuffer();
            this.advance();
            break;
          case "\n":
            this.flushBuffer();
            this.tokens.push({ typ: "NewLineToken", val: "\n" } as NewLineToken)
            this.lineno++;
            this.advance();
            break;
          default:
            this.buffer += this.cursor;
            this.advance();
            break;
        }
      } else {
        this.error("Lexer.run() method might be broken :3");
      }
    }
    this.flushString();
    this.flushBuffer();
    return this.tokens;
  }
}
