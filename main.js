let jk = document.getElementById('joke');

const jokes =['How do you stop a baby from crying? Feed it…to an alligator.',
                'Did you hear about the fire at the shoe factory? Unfortunately, many soles were lost.',
            'What do you call a pig who knows how to use a knife? A pork chop.',
        'What kind of fish knows how to do an appendectomy? A Sturgeon. ',
        'How do you hire a horse? Put up a ladder. ',
        'I wouldnt buy anything with velcro. Its a total rip-off.' ,
        'Keep the dream alive, and hit the snooze button.',
        'What did the boy say to his fingers? Im counting on you.' ,
        'How many apples can you grow on a tree? All of them.' ,
        'My manager told me to have a good day. So I didnt go into work.',
        'How do mice floss their teeth? With string cheese.',
        'What do you call a fish with no eyes? Fsh',
        'Wanna hear a joke about paper? Never mind—its tearable.',
        'I could tell a joke about pizza, but its a little cheesy.',
        'What do you call it when Batman skips church? Christian Bale.',
        'Whats the astronauts favorite part of a computer? The spacebar',
        'Why are elevator jokes so good? They work on so many levels.',
        'How can a leopard change his spots? By moving.',
        'Never break someone’s heart, they only have one.Break their bones instead, they have 206 of them.',
        'What does my dad have in common with Nemo? They both cant be found.',
        'I have a fish that can breakdance! Only for 20 seconds, though, and only once.',
        'When does a joke become a dad joke? When it leaves and never comes back',
        'Why can’t orphans play baseball? They don’t know where home is.',
        'My parents raised me as an only child, which really pissed off my brother.',
        'If at first, you don’t succeed… then skydiving definitely isn’t for you.'
    
    ]
    function genrateJoke(){
        const random = Math.floor(Math.random() * jokes.length);
        jk.textContent = jokes[random];
    }