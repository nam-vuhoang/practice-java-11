package org.vunam.codility.lesson02_Arrays;

import java.util.Arrays;

/**
 * [EASY] OddOccurrencesInArray: Find value that occurs in odd number of
 * elements.
 *
 * A non-empty array A consisting of N integers is given. The array contains an
 * odd number of elements, and each element of the array can be paired with
 * another element that has the same value, except for one element that is left
 * unpaired.
 *
 * For example, in array A such that:
 *
 * A[0] = 9 A[1] = 3 A[2] = 9 A[3] = 3 A[4] = 9 A[5] = 7 A[6] = 9 the elements
 * at indexes 0 and 2 have value 9, the elements at indexes 1 and 3 have value
 * 3, the elements at indexes 4 and 6 have value 9, the element at index 5 has
 * value 7 and is unpaired. Write a function:
 *
 * class Solution { public int solution(int[] A); }
 *
 * that, given an array A consisting of N integers fulfilling the above
 * conditions, returns the value of the unpaired element.
 *
 * For example, given array A such that:
 *
 * A[0] = 9 A[1] = 3 A[2] = 9 A[3] = 3 A[4] = 9 A[5] = 7 A[6] = 9 the function
 * should return 7, as explained in the example above.
 *
 * Write an efficient algorithm for the following assumptions:
 *
 * N is an odd integer within the range [1..1,000,000]; each element of array A
 * is an integer within the range [1..1,000,000,000]; all but one of the values
 * in A occur an even number of times.
 *
 * @see https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
 *
 */
class Lesson02_02_OddOccurencesInArray {

	/**
	 * Sort the array and find a distinct pair.
	 *
	 * Solution (100%)
	 * @param A
	 * @return
	 * @see https://app.codility.com/demo/results/trainingWU3MA7-A2A/
	 */
	public int solution(int[] A) {
		Arrays.sort(A);
		for (int i = 0; i < A.length - 1; i += 2) {
			if (A[i] < A[i + 1]) {
				return A[i];
			}
		}
		return A[A.length - 1];
	}

}
