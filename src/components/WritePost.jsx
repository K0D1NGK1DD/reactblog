import React from 'react';
import '../styles/WritePost.css';

function WritePost({savePostTitle, saveContent, savePost}) {

    return (
        <div className='create__post'>
            <form onSubmit={savePost}
               className='createpost__form'>
               <h1>Write Post</h1>
               <input 
               type="text"
               onChange={savePostTitle} 
               placeholder="Post Title" 
               required
                />
            <br />
            <br />
               <textarea 
               type="text"
               onChange={saveContent}
               placeholder="Write Post" 
               required></textarea>
            <br />
            <br />
               <button>Submit</button>
           </form>
        </div>
    )
}

export default WritePost;

