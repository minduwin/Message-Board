const messages = [
    {
        text: 'I dont do if, buts or maybes... I do absolutes!',
        user: 'James Redmond',
        added: new Date(),
    },
    {
        text: 'Life is short... Smile while you still have teeth!',
        user: 'Delcy Gomes',
        added: new Date(),
    },
    {
        text: 'My disappointment is immeasurable and my day is ruined.',
        user: 'John Jurasek',
        added: new Date(),
    },
];

const homeControl = (req, res) => {
    res.render('index', ({ messages: messages }));
};

const newControl = (req, res) => {
    res.render('new', { title: 'Form Messager '});
};

const postMsg = (req, res, next) => {
    const newMsg = {
        text: req.body.text,
        user: req.body.user,
        added: new Date(),
    };

    if (!newMsg.text || !newMsg.user) {
        const error = new Error('Please fill all fields...');
        res.status(400).send('Please fill all fields...')
        return next(error);
    }

    messages.push(newMsg);
    res.redirect('/');
}

const showMsg = (req, res) => {
    const messageId = parseInt(req.params.id);
    if (messageId >= 0 && messageId < messages.length) {
        const message = messages[messageId];
        res.render('message', { title: `Message from ${message.user}`, message });
    } else {
        res.status(404).send('Message not found');
    }
};

module.exports = { homeControl, newControl, postMsg, showMsg };