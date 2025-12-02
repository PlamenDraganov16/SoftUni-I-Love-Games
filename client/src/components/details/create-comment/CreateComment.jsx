import useRequest from "../../../hooks/useRequest.js";
import useForm from "../../../hooks/useForm.js";
import { useParams } from "react-router";

export default function CreateComment({
    user,
    onCreate,
}) {
    const { gameId } = useParams();
    const { request } = useRequest();

    const submitHandler = async ({ comment }) => {
        try {
            await request('/data/comments', 'POST', {
                message: comment,
                gameId,
            });

            onCreate();
        } catch (err) {
            alert(err.message);
        }
    }

    const {
        register,
        formAction,
    } = useForm(submitHandler, {
        comment: '',
    })

    return (
        < article className="create-comment" >
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <label>Add new comment:</label>
            <form className="form" action={formAction}>
                <textarea
                    {...register('comment')}
                    placeholder="Comment......"
                ></textarea>
                <input className="btn submit" type="submit" value="Add Comment" disabled={!user} />
            </form>
        </article >
    )
}