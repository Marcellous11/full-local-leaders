-- INSERT INTO users (username, password, first_name, last_name, email, is_admin)
-- VALUES ('testuser',
--         '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
--         'Test',
--         'User',
--         'joel@joelburton.com',
--         FALSE),
--        ('testadmin',
--         '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
--         'Test',
--         'Admin!',
--         'joel@joelburton.com',
--         TRUE),
--        ('youngKing',
--         'password',
--         'Marcellous',
--         'Curtis-ADMIN!',
--         'joel@joelburton.com',
--         TRUE);


INSERT INTO leaders (twitId, full_name, imgUrl, approve, disapprove)
VALUES ('JeffCheney',
        'Jeff Cheney',
        'https://pbs.twimg.com/profile_images/868183723388227584/JK1QmE-U_200x200.jpg',
        0,
        0),
        ('kingjames',
        'Lebron James',
        'https://pbs.twimg.com/profile_images/1421530540063092736/xqtcu8HX_200x200.jpg',
        0,
        0),
        ('JoeBiden',
        'Joe Biden',
        'https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_200x200.jpg',
        0,
        0)