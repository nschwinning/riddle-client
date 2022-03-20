export type BLOCK_COORDS = [INDEX, INDEX]

export type INDEX = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type GRID = [ROW, ROW, ROW, ROW, ROW, ROW, ROW, ROW, ROW] | undefined

export type N = 0 | NUMBERS

export type NUMBERS = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type ROW = [N, N, N, N, N, N, N, N, N]

export type CHAR = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' 
| 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' 
| 'y' | 'z' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' 
| 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' 
| 'Y' | 'Z' | ''

export type WORD = [CHAR, CHAR, CHAR, CHAR, CHAR]

export type WORDLE_GRID = [WORD, WORD, WORD, WORD, WORD, WORD]

export type WORDLE_CHAR = 0 | 1 | 2 | 3 | 4

export type WORDLE_TRY = 0 | 1 | 2 | 3 | 4 | 5

export type WORDLE_COORDS = [WORDLE_TRY, WORDLE_CHAR]
