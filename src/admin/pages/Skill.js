import React from 'react'

const Skill = () => {
    return (
        <>
            <div className="admin-form">
                <h1 className="admin-title">Skill</h1>

                <div className="grid-admin">
                    <div className="input_box">
                        <label>Skillname</label>
                        <input type="text" placeholder="Skillname"/>
                    </div>
                    <div className="input_box">
                        <label>Priority</label>
                        <input type="number" placeholder="Priority"/>
                    </div>
                    <div className="input_box">
                        <label>Name</label>
                        <input type="file"/>
                    </div>
                </div>

                <button className="admin-btn">
                    Submit
                </button>
            </div>

            <div className="admin-table">
                <table>
                    <thead>
                        <tr>
                            <th>Skill Name</th>
                            <th>Img</th>
                            <th>Prioryty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Java Script</td>
                            <td>
                                <a 
                                    href="https://i.pinimg.com/originals/fb/12/29/fb1229c80a985a9fa31f06453d001d07.jpg"
                                    target={"_blank"}
                                    rel="noreferrer"
                                    >
                                https://i.pinimg.com/originals/fb/12/29/fb1229c80a985a9fa31f06453d001d07.jpg
                                </a>
                            </td>
                            <td className="small_area">2222</td>
                            <td className="admin-table-btn">
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Skill
