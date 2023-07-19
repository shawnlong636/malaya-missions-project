import type { PrismaClient, AuthUser, User, Permissions } from '@prisma/client';
import { faker } from '@faker-js/faker';

const permission_types = ['read', 'write', 'delete', 'update'];

export async function seedUser(client: PrismaClient) {
    let permission_id = 1;
    const organizations = await client.organization.findMany();

    const numUsers = 100;
    const users: User[] = [];
    const authUsers: AuthUser[] = [];
    const permissions: Permissions[] = [];

    for (let i = 0; i < numUsers; i++) {
        const includeOrganization = faker.datatype.boolean();
        const organization = includeOrganization ? faker.helpers.arrayElement(organizations) : null;
        const user_id = i + 1;
        if (organization) {
            for (const perm of permission_types) {
                const permission: Permissions = {
                    id: permission_id,
                    permission_type: perm,
                    resource_id: organization.id,
                    resource_type: 'organization',
                    user_id: user_id
                };
                permissions.push(permission);
                permission_id++;
            }
        }

        const email = faker.internet.email();
        const auth_user_id = faker.datatype.uuid();

        const auth_user: AuthUser = {
            id: auth_user_id,
            email: email,
            user_id: user_id
        };

        const user: User = {
            id: user_id,
            country_code: null,
            area_code: null,
            phone_number: null,
            city: faker.address.city(),
            state: faker.address.state(),
            bio: faker.lorem.paragraph(),
            photo_url: null,
            email: faker.internet.email(),
            name: faker.name.fullName(),
            organizationId: organization ? organization.id : null,
            auth_user_id: auth_user_id
        };

        for (const perm of permission_types) {
            const permission: Permissions = {
                id: permission_id,
                permission_type: perm,
                resource_id: user_id,
                resource_type: 'user',
                user_id: user_id
            };
            permission_id++;
            permissions.push(permission);
        }
        authUsers.push(auth_user);
        users.push(user);
    }

    await client.authUser.createMany({ data: authUsers });
    await client.user.createMany({ data: users });
    await client.permissions.createMany({ data: permissions });
}
