import axios from 'axios';
import React, { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner';

function Uploadimage(){
    const [img, setImg] = useState(null);
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([])
    let data = {};
    const host = "http://localhost:5000"
    const cloudName = 'dmplvzr7j';
    // const imagePreset = 'images_preset';
    // const videoPreset = "videos_preset';
    
    const handleImageSelect = async (fileimage, preset, foldername) => {
        const formData = new FormData();
        const file = fileimage;
        formData.append('file', file);
        formData.append('upload_preset', preset);
        formData.append('folder', foldername);
        try {
            const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, formData); // Changed the URL endpoint for image uploads
            console.log("upload")
            console.log(response);
            return response.data.secure_url
        } catch (error) {
            console.error('Error uploading image:', error);
            return ""

        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            if (img) {
                const imgUrl = await handleImageSelect(img, "images_preset", "images")
                console.log(img)
                console.log(imgUrl)
                
            }

            //Upload Videofile
            // if (video) {
            //     const videoUrl = await handleImageSelect(video, "videos_preset", "videos")
            //     console.log(videoUrl)
            // }
            console.log("Upload file successful");
        
            setLoading(false);
            // console.log(response.data)
            // console.log(users)
            // setProducts(response.data);
        } catch (error) {
            console.log(error)
            // setLoading(false)
        }        
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <br />
                
                {/* <div>
                    <label htmlFor="video">Video</label>
                    <br />
                    <input
                        type="file"
                        accept='video/'
                        id='video'
                        required
                        onChange={(e) => setVideo((prev) => e.target.files[0], console.log(e.target.files[0]))}
                    />
                </div> */}
                <br />
                <div>
                    <label htmlFor="Img">Image</label>
                    <br />
                    <input
                        type="file"
                        accept='image/'
                        id='img'
                        required
                        onChange={(e) => setImg((prev) => e.target.files[0])}
                    />
                </div>
                <br />
                <button>Upload</button>
            </form>
            {
                loading && <ThreeDots
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            }
            <div className=" d-flex flex-wrap" >
                {
                    products.map((product) => {
                        return <>
                            <div class="card" style={{"width": "13rem"}}>
                                <img src={product.imageurl} class="card-img-top" style={{height:"200px"}} alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">{product.title}</h5>
                                        <b>
                                        <p class="card-text">Rs.{product.price}.</p>
                                        </b>

                                        <p class="card-text">{product.description}.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </>
                    })
                }
            </div>
        </div>
    )
}

export default Uploadimage
