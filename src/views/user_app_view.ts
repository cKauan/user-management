import User from '../models/User';

export default {
    render(user: User): Partial<User> {
        return {
            id: user.id,
            name: user.name,
            phone: user.phone,
            bought: user.bought,
            notes: user.notes,
            created_at: user.created_at
        };
    },
};
