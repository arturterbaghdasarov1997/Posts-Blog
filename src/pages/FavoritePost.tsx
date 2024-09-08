import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IPosts } from '../interfaces/post.interface';
import '../App.css';

const FavoritePost: React.FC = () => {
  const [favorites, setFavorites] = useState<IPosts[]>([]);

  useEffect(() => {
    const favoriteIdsData = localStorage.getItem('favoritePosts');
    if (favoriteIdsData) {
      const favoriteIds = new Set<number>(JSON.parse(favoriteIdsData));

      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
          const favoritePosts = data.filter((post: IPosts) => favoriteIds.has(post.id));
          setFavorites(favoritePosts);
        })
        .catch((error) => console.error('Error fetching posts:', error));
    }
  }, []);

  return (
    <div className="container">
      <h1>Favorite Posts</h1>
      {favorites.length === 0 ? (
        <p>You have no favorite posts yet.</p>
      ) : (
        <ul>
          {favorites.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritePost;