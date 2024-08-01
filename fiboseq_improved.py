

def fibonacci(num):
    fiboseq = [0, 1]
    if num < 3 : return fiboseq
    a, b = 0, 1

    for i in range(num):
        temp = b
        b += a
        a = temp
        fiboseq.append(b)

    return fiboseq

print(fibonacci(1))