import React, { useState } from 'react';
import './styles/app.css'
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
function App() {
    const [posts, setPosts] = useState([
            { id: 1, title: 'JavaScript', body: 'Description' },
            { id: 2, title: 'JavaScript 2', body: 'Description' },
            { id: 3, title: 'JavaScript 3', body: 'Description' },
        ])

    const [posts2, setPosts2] = useState([
        { id: 1, title: 'python', body: 'Description' },
        { id: 2, title: 'python 2', body: 'Description' },
        { id: 3, title: 'python 3', body: 'Description' },
    ])

    return (
        <div className="App">
            <form>
                <input type='text' placeholder='Post name' />
                <input type='text' placeholder='Post description' />
                <MyButton>
                    Create post
                </MyButton>
            </form>
            <PostList posts={posts} title='Пост про JS' />
            <PostList posts={posts2} title='Пост про Python' />
        </div>
    );
}

export default App;