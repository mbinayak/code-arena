package priority_queue

import (
	"fmt"
	"math"
)

type HeapType int

const (
	MaxHeap HeapType = iota
	MinHeap
)

type Heap struct {
	Elements []int
	Type     HeapType
}

func NewMinPriorityQueue() *Heap {
	return &Heap{
		Elements: make([]int, 0),
		Type:     MinHeap,
	}
}

func NewMaxPriorityQueue() *Heap {
	return &Heap{
		Elements: make([]int, 0),
		Type:     MaxHeap,
	}
}

func (h *Heap) Size() int {
	if h.Elements == nil {
		return 0
	}

	return len(h.Elements)
}

func (h *Heap) Insert(ele int) {
	if h.Size() == 0 {
		h.Elements = make([]int, 1)
		h.Elements[0] = ele
		return
	}

	h.Elements = append(h.Elements, ele)
	h.bubbleUp()
}

func (h *Heap) Append(ele int) {
	h.Insert(ele)
}

func (h *Heap) Push(ele int) {
	h.Insert(ele)
}

func (h *Heap) Delete() (int, error) {
	l := len(h.Elements)
	if l == 0 {
		return 0, fmt.Errorf("cannot deque element from an empty queue")
	}

	topEle := h.Elements[0]
	h.Elements[0] = h.Elements[l-1]
	h.Elements = h.Elements[:l]
	h.bubbleDown()
	return topEle, nil
}

func (h *Heap) Pop() (int, error) {
	return h.Delete()
}

// Internal package private helper methods defined below

func (h *Heap) bubbleUp() {
	eleId := h.Size() - 1
	parentId := int(math.Floor(float64(eleId-1) / 2))
	for eleId > 0 && !h.isHeapy(parentId, eleId) {
		// swap ele with its parent.
		ele := h.Elements[eleId]
		h.Elements[eleId] = h.Elements[parentId]
		h.Elements[parentId] = ele
		eleId = parentId
		parentId = int(math.Floor(float64(eleId-1) / 2))
	}
}

func (h *Heap) bubbleDown() {
	eleId := 0
	n := h.Size()
	for eleId < n {
		swapNeeded, swapId := h.downSwapId(eleId)
		if !swapNeeded {
			// no swap required thus heap condition is satisfied.
			break
		}

		ele := h.Elements[eleId]
		h.Elements[eleId] = h.Elements[swapId]
		h.Elements[swapId] = ele
		eleId = swapId
	}
}

func (h *Heap) downSwapId(eleId int) (bool, int) {
	n := h.Size()
	leftId := 2*eleId + 1
	rightId := leftId + 1
	swap := false
	if leftId > n || leftId == n {
		return swap, 0
	}

	swapId := leftId
	if !h.isHeapy(eleId, leftId) {
		swap = true
	}

	if rightId < n && !h.isHeapy(eleId, rightId) {
		if swap {
			if h.Type == MaxHeap {
				// choose the max of left and right child
				if h.Elements[rightId] > h.Elements[leftId] {
					swapId = rightId
				}
			} else {
				// choose the min of left and right child
				if h.Elements[rightId] < h.Elements[leftId] {
					swapId = rightId
				}
			}
		} else {
			swap = true
			swapId = rightId
		}
	}

	return swap, swapId
}

func (h *Heap) isHeapy(parentId, childId int) bool {
	if h.Type == MaxHeap {
		return h.Elements[parentId] > h.Elements[childId] || h.Elements[parentId] == h.Elements[childId]
	}

	return h.Elements[parentId] < h.Elements[childId] || h.Elements[parentId] == h.Elements[childId]
}
