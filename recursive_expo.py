

def pow(x, n, z):
    return pow(x, n-1, z*x) if n > 0 else z


print(pow(2, 4, 1))