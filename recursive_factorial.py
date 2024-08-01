

def factorial(num, result):

    return factorial(num-1, num*result) if num > 0 else result

print(factorial(4, 1))  # Second param is constant = 1 and mendatory




