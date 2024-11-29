let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
];

// Get all users
const getUsers = (req, res) => {
    res.status(200).json(users);
};

// Get a single user by ID
const getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
};

// Create a new user
const createUser = (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
    };
    users.push(newUser);
    res.status(201).json(newUser);
};

// Update a user by ID
const updateUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    user.name = req.body.name || user.name;
    res.status(200).json(user);
};

// Delete a user by ID
const deleteUser = (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.status(204).send();
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
