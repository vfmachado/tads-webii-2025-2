
const soma = (a, b) => a + b;

const fizzBuzz = num => {
    if (num % 3 == 0 && num % 5 == 0)  return "FizzBuzz";
    if (num % 3 == 0) return "Fizz";
    if (num % 5 == 0) return "Buzz";
    return num;
}

test("exemplo de soma", () => {
    let c = soma(2, 3);
    expect(c).toBe(5);
});

test("FizzBuzz", () => {
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(25)).toBe("Buzz");
    expect(fizzBuzz(15)).toBe("FizzBuzz")
});