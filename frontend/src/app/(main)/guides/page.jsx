'use client';
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react'

const Guides = () => {

    const guideForm = useFormik({
        initialValues: {
            title: '',
            subtitle: '',
            content: '',
            category: '',
            postedAt: new Date()
        },
        onSubmit: (values) => {
            console.log(values);

            // sending request to backend

            fetch('http://localhost:5000/post/add', {
                method: 'POST',
                body : JSON.stringify(values), // convert js to json
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            .then((response) => {
                console.log(response.status);
                if(response.status === 200){
                    enqueueSnackbar('Post Uploaded Successfully',{variant :'success'});
                }else{
                    enqueueSnackbar('Something Went Wrong',{variant :'error'});
                }
            }).catch((err) => {
                console.log(err);
                enqueueSnackbar('Something Went Wrong',{variant :'error'});
            });
        }
    })

    return (
        <div>
            <div className="container py-5">
                <div className="card shadow">
                    <div className="card-body">
                        <h1 className="text-center display-5 fw-bold">TypeScript Learning</h1>
                        <form onSubmit={guideForm.handleSubmit}>

                            <div class="mb-3">
                                <label for="" class="form-label">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    onChange={guideForm.handleChange}
                                    value={guideForm.values.title}
                                    class="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                ></input>
                            </div>

                            <div class="mb-3">
                                <label for="" class="form-label">Subtitle</label>
                                <input
                                    type="text"
                                    id="description"
                                    onChange={guideForm.handleChange}
                                    value={guideForm.values.subtitle}
                                    class="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                ></input>

                            </div>

                            <div class="mb-3">

                                <label for="" class="form-label">Content</label>

                                <input
                                    type="text"
                                    id="username"
                                    onChange={guideForm.handleChange}
                                    value={guideForm.values.content}
                                    class="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                />

                            </div>

                            <div class="mb-3">

                                <label for="" class="form-label">Category</label>
                                <input
                                    type="text"
                                    id="image"
                                    onChange={guideForm.handleChange}
                                    value={guideForm.values.category}
                                    class="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                />
                            </div>

                            <div class="mb-3">
                                <button type="submit" class="btn btn-primary">Upload</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guides;