def solution(S):
    S = S.splitlines()
    min_len = 100000000000000000000
    for line in S:
        owner = line[0:6].strip()
        perm = line[7:10]
        name = line[11:]
        ext = name.split('.')[-1]

        is_rea_only = 'r' in perm and 'w' not in perm
        is_binary = ext == 'pdf' or ext == 'xls' or ext == 'doc'

        if (owner == 'root' and is_rea_only and is_binary and min_len > len(name)):
            min_len = len(name)
    return min_len


