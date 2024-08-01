def binsearch(arr, target):
    if not arr:
        return None
    
    # dummy = arr[:]
    mindex = len(arr)//2
    mid = arr[mindex]
    if mid == target:
        return mid
    elif mid > target:
        return binsearch(arr[:mindex], target)
    else:
        return binsearch(arr[mindex+1:], target)





print(binsearch([1, 2, 3, 4, 5, 6 ,7, 9, 10, 11, 23, 35, 56], 56))
