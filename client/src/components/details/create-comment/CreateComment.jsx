import { useState } from "react"
import request from "../../../utils/requester.js";
import { useParams } from "react-router";

export default function CreateComment({
    user,
}) {
    const { gameId } = useParams();
    const [comment, setComment] = useState('');
    const changeHandler = (e) => {
        setComment(e.target.value);
    }

    const submitHandler = async () => {
        await request('http://localhost:3030/jsonstore/comments', 'POST', {
            author: user.email,
            message: comment,
            gameId,
        })
    }

    return (
        < article className="create-comment" >
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <label>Add new comment:</label>
            <form className="form" action={submitHandler}>
                <textarea
                    name="comment"
                    placeholder="Comment......"
                    onChange={changeHandler}
                    value={comment}
                ></textarea>
                <input className="btn submit" type="submit" value="Add Comment" disabled={!user}/>
            </form>
        </article >
    )
}