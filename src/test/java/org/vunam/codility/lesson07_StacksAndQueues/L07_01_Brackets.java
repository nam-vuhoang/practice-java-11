package org.vunam.codility.lesson07_StacksAndQueues;

import java.util.EmptyStackException;
import java.util.Stack;

/**
 * [EASY, 100%] Brackets: Determine whether a given string of parentheses
 * (multiple types) is properly nested.
 *
 * A string S consisting of N characters is considered to be properly nested if
 * any of the following conditions is true:
 *
 * S is empty; S has the form "(U)" or "[U]" or "{U}" where U is a properly
 * nested string; S has the form "VW" where V and W are properly nested strings.
 * For example, the string "{[()()]}" is properly nested but "([)()]" is not.
 *
 * Write a function:
 *
 * class Solution { public int solution(String S); }
 *
 * that, given a string S consisting of N characters, returns 1 if S is properly
 * nested and 0 otherwise.
 *
 * For example, given S = "{[()()]}", the function should return 1 and given S =
 * "([)()]", the function should return 0, as explained above.
 *
 * Write an efficient algorithm for the following assumptions:
 *
 * N is an integer within the range [0..200,000]; string S is made only of the
 * following characters: '(', '{', '[', ']', '}' and/or ')'.
 *
 * @see https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/
 */
class L07_01_Brackets {
	/**
	 * Detected time complexity: O(N)
	 *
	 * @param S
	 * @return
	 */
	public int solution(String S) {
		Stack<Character> stack = new Stack<>();

		try {
			for (char ch : S.toCharArray()) {
				switch (ch) {
				case '(':
				case '[':
				case '{':
					stack.push(ch);
					break;
				case ')':
					if (stack.pop() != '(') {
						return 0;
					}
					break;
				case ']':
					if (stack.pop() != '[') {
						return 0;
					}
					break;
				case '}':
					if (stack.pop() != '{') {
						return 0;
					}
					break;
				}
			}
		} catch (EmptyStackException e) {
			return 0;
		}

		return stack.isEmpty() ? 1 : 0;

	}
}
