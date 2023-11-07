package org.vunam.codility.lesson11_SieveOfEratosthenes;

/**
 * [MEDIUM] CountNonDivisible
 *
 * Calculate the number of elements of an array that are not divisors of each
 * element.
 *
 *
 * You are given an array A consisting of N integers.
 *
 * For each number A[i] such that 0 ≤ i < N, we want to count the number of
 * elements of the array that are not the divisors of A[i]. We say that these
 * elements are non-divisors.
 *
 * For example, consider integer N = 5 and array A such that:
 *
 * A[0] = 3 A[1] = 1 A[2] = 2 A[3] = 3 A[4] = 6 For the following elements:
 *
 * A[0] = 3, the non-divisors are: 2, 6, A[1] = 1, the non-divisors are: 3, 2,
 * 3, 6, A[2] = 2, the non-divisors are: 3, 3, 6, A[3] = 3, the non-divisors
 * are: 2, 6, A[4] = 6, there aren't any non-divisors. Write a function:
 *
 * class Solution { public int[] solution(int[] A); }
 *
 * that, given an array A consisting of N integers, returns a sequence of
 * integers representing the amount of non-divisors.
 *
 * Result array should be returned as an array of integers.
 *
 * For example, given:
 *
 * A[0] = 3 A[1] = 1 A[2] = 2 A[3] = 3 A[4] = 6 the function should return [2,
 * 4, 3, 2, 0], as explained above.
 *
 * Write an efficient algorithm for the following assumptions:
 *
 * N is an integer within the range [1..50,000]; each element of array A is an
 * integer within the range [1..2 * N].
 *
 * @see https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_non_divisible/
 */
class L11_01_CountNonDivisible1 {

	/**
	 * Detected time complexity: O(N * N)
	 *
	 * @see Faster solution in {@code L11_01_CountNonDivisible2}
	 */
	public int[] solution(int[] A) {
		int N = A.length;
		int[] count = new int[N];

		for (int i = 0; i < N - 1; i++) {
			for (int j = i + 1; j < N; j++) {
				if (A[i] % A[j] != 0) {
					count[i]++;
				}

				if (A[j] % A[i] != 0) {
					count[j]++;
				}
			}
		}

		return count;
	}
}