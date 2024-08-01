def insertion_sort(arr):
    dummy = arr[:]
    for i in range(1, len(dummy)):
        for j in range(i-1, -1, -1):
            if dummy[j+1]<dummy[j]:
                dummy[j], dummy[j+1] = dummy[j+1], dummy[j]
            else: break
    return dummy

print(insertion_sort([5, 1, 6, 3, 7, 10, 2]))
print(insertion_sort([42, 17, 68, 93, 27, 55, 74, 31, 88, 6, 49, 81, 22, 59, 14]))
