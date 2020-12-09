export const register = user => $.ajax({
    method: 'POST',
    url: 'api/users',
    data: { user },
});

export const login = user => $.ajax({
    method: 'POST',
    url: 'api/session',
    data: { user },
});

export const logout = () => $.ajax({
    method: 'DELETE',
    url: 'api/session',
});

export const updateUser = (id, user) => $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    data: { user },
});

export const deleteUser = user => $.ajax({
    method: 'DELETE',
    url: `api/users/${user.id}`,
    data: { user },
});