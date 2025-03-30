import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from 'react-hot-toast'

const PostOnlineClass = () => {
    const axios = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false); // Loading state

    const onSubmit = async (data) => {
        const videoFiles = data.videos instanceof FileList ? Array.from(data.videos) : [];
        const videoTitles = data.videoTitles.split(",").map((title) => title.trim());

        if (videoFiles.length !== videoTitles.length) {
            toast.error("The number of titles must match the number of videos.");
            return;
        }

        setLoading(true); // Start loading
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("chapter", data.chapter);
        formData.append("className", data.className);
        formData.append("isFree", data.isFree);

        videoFiles.forEach((video, index) => {
            formData.append("videos", video); // Append video files
            formData.append("titles[]", videoTitles[index]); // Append corresponding titles
        });

        try {
            const response = await axios.post("/api/upload-video", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            console.log("Success:", response.data);
            toast.success(response.data.message);
            reset();
        } catch (error) {
            console.error("Error uploading:", error);
            toast.error("Failed to upload videos.");
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                    Upload Online Class 🎥
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Class Title</label>
                        <input
                            {...register("title", { required: true })}
                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter class title"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Description</label>
                        <textarea
                            {...register("description")}
                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter description"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Chapter</label>
                        <input
                            {...register("chapter", { required: true })}
                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter chapter"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Class Name</label>
                        <select
                            {...register("className", { required: true })}
                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="">Select a Class</option>
                            <option value="6">Class 6</option>
                            <option value="7">Class 7</option>
                            <option value="8">Class 8</option>
                            <option value="9">Class 9</option>
                            <option value="10">Class 10</option>
                        </select>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            {...register("isFree")}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label className="ml-2 text-gray-700">Free Class</label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Upload Videos</label>
                        <input
                            type="file"
                            {...register("videos", { required: true })}
                            accept="video/*"
                            multiple
                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Video Titles</label>
                        <textarea
                            {...register("videoTitles", { required: true })}
                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter titles separated by commas"
                        ></textarea>
                        <small className="text-gray-500">Enter titles in the same order as the videos, separated by commas.</small>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-all disabled:opacity-50"
                        disabled={loading} // Disable button when loading
                    >
                        {loading ? "Uploading..." : "Upload Video 🚀"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PostOnlineClass;
