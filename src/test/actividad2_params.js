import express from 'express';
const app = express();

const users = [
    { gender: 'male', id: 1, name: 'eric' },
    { gender: 'female', id: 1, name: 'agustina' },
    { gender: 'female', id: 1, name: 'sabrina' },
];

app.get('/', (req, res) => {
    let gender = req.query.gender
    if (gender) {
        gender = gender.toLocaleLowerCase();
        const userFiltered = users.filter(user => user.gender === gender);
        return res.send(userFiltered)
    }
    res.send(users)
})
app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)

    if (!user) res.send({ error: 'User not found' });
    else res.send(user);
})

app.listen(8080);