import React from 'react'

function Info() {
    return (
        <>
            <div className="admin-form">
                <h1 className="admin-title">About My Self</h1>

                <div className="grid-admin">
                    <div className="input_box">
                        <label>CV/Resume Link</label>
                        <input type="text" placeholder="CV/Resume Link"/>
                    </div>
                    <div className="input_box">
                        <label>CV/Resume File</label>
                        <input  type="file"/>
                    </div>
                </div>
                <div className="input_box">
                    <label>About My self</label>
                    <textarea placeholder="Details"></textarea>
                </div>

                <button className="admin-btn">
                    Submit
                </button>
            </div>

            
        </>
    )
}

export default Info
