import React, { useEffect, useState } from 'react';
import { IPosts } from '../interfaces/post.interface';
import { Link, useLoaderData } from 'react-router-dom';
import '../App.css';

const Posts: React.FC = () => {
    const posts = useLoaderData() as IPosts[];
    const [favorites, setFavorites] = useState<Set<number>>(new Set());

    useEffect(() => {
        const favoritesData = localStorage.getItem('favoritePosts');
        if (favoritesData) {
            setFavorites(new Set(JSON.parse(favoritesData)));
        }
    }, []);

    const toggleFavorite = (id: number) => {
        const updatedFavorites = new Set(favorites);
        if (updatedFavorites.has(id)) {
            updatedFavorites.delete(id);
        } else {
            updatedFavorites.add(id);
        }
        setFavorites(updatedFavorites);
        localStorage.setItem('favoritePosts', JSON.stringify(Array.from(updatedFavorites)));
    };

    return (
        <div className="container">
            {posts.map((post) => (
                <div key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <h1>{post.title}</h1>
                    </Link>
                    <button onClick={() => toggleFavorite(post.id)}>
                        {favorites.has(post.id) ? 'Unfavorite' : 'Favorite'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Posts;

export const loader = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}