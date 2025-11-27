import { useState } from "react"
import request from "../../../utils/requester.js";
import { useParams } from "react-router";

export default function CreateComment({
    user,
    onCreate,
}) {
    const { gameId } = useParams();
    const [comment, setComment] = useState('');
    const changeHandler = (e) => {
        setComment(e.target.value);
    }

    const submitHandler = async () => {
        try {
            await request('http://localhost:3030/jsonstore/comments', 'POST', {
                author: user.email,
                message: comment,
                gameId,
            })

            setComment('');
            onCreate();
        } catch (error) {
            alert(error.message);
        }
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
                <input className="btn submit" type="submit" value="Add Comment" disabled={!user} />
            </form>
        </article >
    )
}