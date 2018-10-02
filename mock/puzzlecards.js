const random_jokes = [
    {
        setup: 'What is the object oriented way to get wealthy ?',
        punchline: 'Inheritance',
    },
    {
        setup: 'To understand what recursion is...',
        punchline: "You must first understand what recursion is",
    },
    {
        setup: 'What do you call a factory that sells passable products?',
        punchline: 'A satisfactory',
      },
];

let random_joke_call_count = 0;

export default {
    'get /dev/random_joke': (req, res) => {
        const responObj = random_jokes[random_joke_call_count % random_jokes.length];
        random_joke_call_count += 1;
        setTimeout(() => {
            res.json(responObj);
        }, 10);

    },
    'get /dev/500': (req, res) => {
        res.status(500);
        res.json({});
    },
    'get /dev/simple_joke': {
        setup: '先有的鸡还是先有的蛋？',
        punchline: '&*@*&@&*@……&@#',
    }
};