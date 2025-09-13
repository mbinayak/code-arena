package priority_queue

import "testing"

// Testing corner cases
func testPriorityQueueInsertDeleteCornerCases(t *testing.T) {
	pqueue := NewMinPriorityQueue()
	if pqueue.Size() != 0 {
		t.Errorf("Empty Priority Queue with has length: %d", pqueue.Size())
	}

	_, err := pqueue.Pop()
	if err == nil {
		t.Errorf("pqueue.Pop() expected to return error but got nil instead")
	}

	pqueue.Push(5)
	top, err := pqueue.Pop()
	if top != 5 || err != nil {
		t.Errorf("First pqueue.Push() expected succeed and last element pqueue.Pop() expected succeed but it didn't")
	}
}

// Testing Priority Queue base cases
func testPriorityQueueInsertDelete(t *testing.T) {
	pqueue := NewMinPriorityQueue()
	pqueue.Push(3)
	pqueue.Push(7)
	pqueue.Push(2)
	pqueue.Push(10)
	pqueue.Push(1)

	expectedItems := []int{1, 2, 3, 7, 10}
	resultIndex := 0
	for top, err := pqueue.Pop(); err == nil; {
		if top != expectedItems[resultIndex] {
			t.Errorf("pqueue.Pop() expected to return: %d but got %d instead", expectedItems[resultIndex], top)
		}
		resultIndex++
	}
}
