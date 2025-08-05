import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({ posts: data.slice(0, 5) }))
      .catch(error => {
        console.error("Error fetching posts:", error);
        this.setState({ hasError: true });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("Oops! An unexpected error occurred.");
  }

  render() {
    if (this.state.hasError) {
      return <h2>Unable to load blog posts currently. Please try again later.</h2>;
    }

    return (
      <div>
        <h1>Somya's Blog Posts</h1>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;