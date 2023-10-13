import React , {useEffect , useState} from 'react';
import { useDispatch , useSelector  } from 'react-redux';
import {testimonial_get_data , testimonial_post_data , testimonial_delete_data , testimonial_edit_data} from '../../store/testimonial'

const Testimonial = () => {
    const [ post_data , setPost_data ] = useState();
    const [ patch_id , setPatch_id] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(testimonial_get_data({
            limit : 100,
            page : 1
        }))
    }, [dispatch])

    const testimonial_result = useSelector( state => state.testimonial.testimonial_data );


    const post_testimonial = () => {
        const all_key = Object.keys(post_data).length;

        if(
            post_data.img !== "" &&
            post_data.title !== "" &&
            post_data.sub_title !== "" &&
            post_data.link !== "" &&
            post_data.transition !== "" &&
            post_data.priority !== "" &&
            all_key === 6
        ){
            !patch_id && dispatch(testimonial_post_data(post_data));
            patch_id && dispatch(testimonial_edit_data({post_data,patch_id}));

            setPatch_id('');
        }else{
            console.log("of")
        };
    };

    const input_value = (e) => {
        setPost_data({
            ...post_data,
            [e.target.getAttribute("data-tag")] : e.target.value
        });
    };

    const delete_testimoial = e =>{
        if (window.confirm('Are you sure you want to delete from database?')) {
            dispatch(testimonial_delete_data(e.target.getAttribute('_id')))
            setPost_data('');
            setPatch_id('');
        };
    };

    const edit_testimonial = e =>{
        setPatch_id(e.target.getAttribute('_id'));
        const testimonial_array = testimonial_result && testimonial_result.results;
        const filter_editable = testimonial_array.filter(x => x._id === e.target.getAttribute('_id'));

        filter_editable && setPost_data({
            title : filter_editable[0].title,
            sub_title : filter_editable[0].sub_title,
            link : filter_editable[0].link,
            img : filter_editable[0].img,
            transition : filter_editable[0].transition,
            priority : filter_editable[0].priority,
        });
    };

    const cancel_testimonial = () => {
        console.log("hi")
        setPost_data('')
        setPatch_id('');
    }

    return (
        <>
            <div className="admin-form">
                <h1 className="admin-title">Testimonial</h1>

                <div className="input_box">
                    <label>Title</label>
                    <input onChange={input_value} value={post_data && post_data.title} data-tag="title" type="text" placeholder="Name"/>
                </div>
                <div className="input_box">
                    <label>Sub Title</label>
                    <textarea onChange={input_value} value={post_data && post_data.sub_title} data-tag="sub_title" placeholder="Sub Title"></textarea>
                </div>

                <div className="grid-admin">
                    <div className="input_box">
                        <label>Link</label>
                        <input onChange={input_value} value={post_data && post_data.link} data-tag="link" type="text" placeholder="Link"/>
                    </div>
                    <div className="input_box">
                        <label>Image</label>
                        <input onChange={input_value} value={post_data && post_data.img} data-tag="img" type="text"/>
                    </div>
                    <div className="input_box">
                        <label>Transition</label>
                        <input onChange={input_value} value={post_data && post_data.transition} data-tag="transition" type="number" placeholder="Transition"/>
                    </div>
                    <div className="input_box">
                        <label>Priority</label>
                        <input onChange={input_value} value={post_data && post_data.priority} data-tag="priority" type="number" placeholder="Priority"/>
                    </div>
                </div>

                <button onClick={post_testimonial} className="admin-btn">
                    Submit
                </button>

                {
                    patch_id && <button onClick={cancel_testimonial} className="admin-btn">
                                    Cancel
                                </button>
                }
            </div>

            <div className="admin-table">
                <table>
                    <thead>
                        <tr>
                            <th>List</th>
                            <th>Title</th>
                            <th>Sub Title</th>
                            <th>Link</th>
                            <th>Img</th>
                            <th>Transiton</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            testimonial_result && testimonial_result.results.map((item , index) => {
                                return  <tr key={index}>
                                            <td className="small_area">{index+1}</td>
                                            <td>{item.title}</td>
                                            <td>{item.sub_title}</td>
                                            <td>
                                                <a 
                                                    href={item.link}
                                                    target={"_blank"}
                                                    rel="noreferrer" >
                                                    {item.link}
                                                </a>
                                            </td>
                                            <td>
                                                <a 
                                                    href={item.img}
                                                    target={"_blank"}
                                                    rel="noreferrer" >
                                                    {item.img}
                                                </a>
                                            </td>
                                            <td className="small_area">{item.transition}</td>
                                            <td className="small_area">{item.priority}</td>
                                            <td className="admin-table-btn">
                                                <button _id={item._id} onClick={edit_testimonial}>Edit</button>
                                                <button _id={item._id} onClick={delete_testimoial}>Delete</button>
                                            </td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
                {
                    !testimonial_result && <p>No data</p>
                }
            </div>
        </>
    )
}

export default Testimonial
