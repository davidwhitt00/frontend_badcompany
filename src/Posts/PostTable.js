import React from 'react';
import { Table, Button } from 'reactstrap';

const PostTable = (props) => {
    console.log(props.sessionUser)
    return (
        <div id="announcements">
            <h3>Bad Company Member Announcements</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Post</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.posts.map((post, id) => {
                        return(
                            <tr key={id}>
                            <th scope="row">{post.id}</th>
                            <td>{post.post}</td>
                            {props.sessionUser == post.owner && <td>
                               
                                <Button className="gamesDB" id={post.id} onClick={props.delete}>Delete</Button>|
                                <Button className="gamesUB" id={post.id} onClick={e => props.update(e, post)}>Update</Button>
                                
                            </td>}
                            </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default PostTable;