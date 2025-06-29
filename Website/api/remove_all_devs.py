import sqlite3

# Complete list of developer usernames to remove
DEVELOPER_USERNAMES = [
    'admin', 'developer', 'test', 
    'ankit_0301', 'krish_garg',
    'dv_1301', 'anish_aggarwal'
]

def remove_developers():
    try:
        # Remove from Users table
        conn = sqlite3.connect('login.db')
        cursor = conn.cursor()
        placeholders = ','.join(['?' for _ in DEVELOPER_USERNAMES])
        cursor.execute(f'DELETE FROM Users WHERE LOWER(username) IN ({placeholders})', 
                      [username.lower() for username in DEVELOPER_USERNAMES])
        users_deleted = cursor.rowcount
        conn.commit()
        conn.close()

        # Remove from Posts table
        conn = sqlite3.connect('UserPost.db')
        cursor = conn.cursor()
        cursor.execute(f'DELETE FROM Posts WHERE LOWER(username) IN ({placeholders})', 
                      [username.lower() for username in DEVELOPER_USERNAMES])
        posts_deleted = cursor.rowcount
        conn.commit()
        conn.close()

        # Remove from Comments table if it exists
        try:
            conn = sqlite3.connect('UserComment.db')
            cursor = conn.cursor()
            cursor.execute(f'DELETE FROM Comments WHERE LOWER(username) IN ({placeholders}) OR LOWER(commentor) IN ({placeholders})', 
                         [username.lower() for username in DEVELOPER_USERNAMES] * 2)
            comments_deleted = cursor.rowcount
            conn.commit()
            conn.close()
            print(f'Successfully removed {comments_deleted} developer comments')
        except:
            pass

        print(f'Successfully removed {users_deleted} developer accounts and {posts_deleted} developer posts')
        return True
    except Exception as e:
        print(f'Error removing developers: {str(e)}')
        return False

if __name__ == '__main__':
    remove_developers() 