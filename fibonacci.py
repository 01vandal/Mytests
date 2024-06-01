

def fibonacci(seq):
    if seq == 0:
        return "None"
    if seq == 1:
        return 1
    
    nodes = [None] * seq
    nodes[0] = 1
    nodes[1] = 1
    
    for i in range(2, seq):
        nodes[i] = nodes[i-1] + nodes[i-2]
    return nodes

print(fibonacci(10))

def fibo(seq):
    if seq == 1:
        return 1
    nodes = []
    nodes.extend([1, 1])

    for i in range(2, seq):
        nodes.append(nodes[i-1] + nodes[i-2])

    return nodes

print(fibo(10))
