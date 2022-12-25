
import ".././css/Profile.css"
import React, { useEffect, useState } from 'react'
const Spinner = ({ children }) => {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => { setLoading(false) }, 2000)
    }, [])


    return (
        loading ?
            <div>
                {
                    <div className="spinner">
                        < img src="/image/loading.png" alt="" />
                    </div >
                }
            </div> : children

    )
}


export default Spinner;

