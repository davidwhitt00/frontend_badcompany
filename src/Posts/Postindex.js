import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PostCreate from './PostCreate';
import PostEdit from './PostEdit';
import PostTable from './PostTable';

class PostIndex extends Component {

    constructor(props) {
        super(props)
        this.state= {
            posts:[],
            updatePressed: false,
            postToupdate: {}
        }
    }

    componentDidMount() {
        this.fetchPosts()
    }

    fetchPosts = () => {
        fetch("http://localhost:3000/api/post", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((postData) => {
            return this.setState({ posts: postData })
        })
    }

    postDelete = (event) => {
        fetch(`http://localhost:3000/api/post/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ post: { id: event.target.id }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => this.fetchPosts())
    }

    postUpdate = (event, post) => {
        fetch(`http://localhost:3000/api/post/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify({ post: post }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.setState({ updatePressed: false })
                this.fetchPosts();
            })
    }
    
    setUpdatedPost = (event, post) => {
        this.setState({
            postToupdate: post,
            updatePressed: true
        })
    }

    render() {
        const posts = this.state.posts.length >= 1 ?
            <PostTable posts={this.state.posts}
                delete={this.postDelete} update={this.setUpdatedPost} sessionUser ={ this.props.sessionUser} /> : <h2 id= "announcements">Bad Company Member Announcements</h2>
        return (
            <Container>
                <Row>
                    <Col md="3">
                        <PostCreate token={this.props.token} updatePostsArray={this.fetchPosts} />
                    </Col>
                    <Col md="9">
                        {posts}
                    </Col>
                </Row>
                {}
                <Col md="12">
                    {
                        this.state.updatePressed ? <PostEdit t={this.state.updatePressed} update={this.postUpdate} post={this.state.postToupdate} />
                            : <div></div>
                    }
                </Col>
            </Container>
        )
    }

}

export default PostIndex;