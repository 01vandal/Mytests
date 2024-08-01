
import time

def simple_sort(arr):
    
    dummy = arr[:]
    for i in range(len(dummy)):
        # print(dummy, 'after i')
        for j in range(len(dummy)-1):
            # print(dummy, 'after j', i, j)
            if dummy[j]>dummy[j+1]:
                dummy[j], dummy[j+1] = dummy[j+1], dummy[j]
                
    # print(dummy)
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]  # Choosing the middle element as the pivot
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)


    
def merge_sort(arr):
    if len(arr)<= 1: return arr

    mid = len(arr)//2
    left = arr[:mid]
    right = arr[mid:]

    return merge(merge_sort(left), merge_sort(right))

def merge(left, right):
    sortedlist = list()
    rindex, lindex = 0, 0
    print(left, right)
    while rindex < len(right) and lindex < len(left):
        if right[rindex]< left[lindex]:
            sortedlist.append(right[rindex])
            rindex+=1
        else:
            sortedlist.append(left[lindex])
            lindex+=1
    return sortedlist+ left[lindex:]+ right[rindex:]

print(merge_sort([4, 5, 1, 6, 3, 7, 0, 10, 9]))