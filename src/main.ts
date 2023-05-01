import { Lexer } from "./lexing/lexer.ts";

const source = await Deno.readTextFile(Deno.args[0]);
const tokens = new Lexer(source).run()
console.log(tokens);
