import React, { useState } from 'react';
import './styles/app.css'
import PostItem from './components/postItem'
function App() {
    return (
        <div className="App">
            <PostItem />
            <PostItem />
        </div>
    );
}

export default App;