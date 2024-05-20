import { useState } from "react"
function CreatePost() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    function titleSetter(e) {
        setTitle(e.target.value)
    }
    function contentSetter(e) {
        setContent(e.target.value)
    }
    function post() {
        console.log(`Title:${title} \n Content:${content}`)
    }
    return (
        <>
            <div className="max-w-2xl w-3/4">
                <div className="flex flex-col w-full space-y-2 mx-2">
                    <label htmlFor="title" className="">Title</label>
                    <input type="text" id="title" className="border-gray-300 w-1/2 border-2 rounded-lg" onChange={titleSetter} />
                    <label htmlFor="desc" className="">Description</label>
                    <textarea id="desc" className="border-gray-300 border-2 w-1/2" onChange={contentSetter}></textarea>
                    <div className="bg-blue-500 w-32 flex justify-center rounded-full py-1 px-1">
                        <button className="text-white w-full h-full " onClick={post}>Upload</button>
                    </div>
                </div>
            </div>
        </>
    )

}
export default CreatePost