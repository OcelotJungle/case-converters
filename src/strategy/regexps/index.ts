/**
 * @example
 * Foo-Bar_Baz+Buzz
 *    ▲   ▲   ▲
 *    |   |   |
 */
const NOT_LETTER_OR_NUMBER = /[^\p{L}\p{N}]/;

/**
 * @example
 * FOOBar
 *   /\
 *   ||
 */
const BETWEEN_CAPS_AND_CAPITALIZED = /(?<=\p{Lu})(?=\p{Lu}\p{Ll})/;

/**
 * @example
 * fooBarBaz
 *   /\ /\
 *   || ||
 */
const BETWEEN_LOWER_AND_UPPER_CASE = /(?<=\p{Ll})(?=\p{Lu})/;

/**
 * @example
 * Foo42
 *   /\
 *   ||
 */
const BETWEEN_LETTER_AND_NUMBER = /(?<=\p{L})(?=\p{N})/;

/**
 * @example
 * 42Foo
 *  /\
 *  ||
 */
const BETWEEN_NUMBER_AND_LETTER = /(?<=\p{N})(?=\p{L})/;

import { uniteRegexp } from "../../util";

export {
    NOT_LETTER_OR_NUMBER,
    BETWEEN_CAPS_AND_CAPITALIZED,
    BETWEEN_LOWER_AND_UPPER_CASE,
    BETWEEN_LETTER_AND_NUMBER,
    BETWEEN_NUMBER_AND_LETTER,

    uniteRegexp as unite,
};
