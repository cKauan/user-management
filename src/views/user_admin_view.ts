import AdminUser from '../models/Admin';

export default {
    render(admin: AdminUser): Partial<AdminUser> {
        return {
            id: admin.id,
            name: admin.name,
            email: admin.email,
        };
    },
};
