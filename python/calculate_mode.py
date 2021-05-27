def calculate_mode(numbers):
    dictionary = {}
    for number in numbers:
        if number in dictionary:
            dictionary[number] = dictionary[number] + 1
        else:
            dictionary[number] = 1
    max = 0
    output = []
    for key in dictionary:
        if dictionary[key] == max:
            output.append(key)
        elif dictionary[key] > max:
            max = dictionary[key]
            output.clear()
            output.append(key)
    return output