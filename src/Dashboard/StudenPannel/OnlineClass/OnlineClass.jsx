import { useContext, useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useRole from "../../../Hooks/useRole";

export const OnlineClass = () => {
  const { user } = useContext(AuthContext);
  const [userDetail, setUserDetail] = useState(null);
  const [classes, setClasses] = useState([]);
  const [openChapter, setOpenChapter] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const axios = useAxiosPublic();

  // Fetch user details
  useEffect(() => {
    if (!user) return;
    const fetchUserDetail = async () => {
      try {
        const response = await axios(`/api/get-single-student/${user.uid}`);
        setUserDetail(response.data.students || {});
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUserDetail();
  }, [user]);

  // Fetch classes
  useEffect(() => {
    if (!userDetail?.className) return;
    const fetchClasses = async () => {
      try {
        const response = await axios(`/api/classes/${userDetail.className}`);
        setClasses(response.data || []);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };
    fetchClasses();
  }, [userDetail]);

  // Toggle chapter visibility
  const toggleChapter = (chapterId) => {
    setOpenChapter(openChapter === chapterId ? null : chapterId);
  };

  // Play selected video
  const playVideo = (videoUrl, index) => {
    setCurrentVideo(videoUrl);
    setCurrentVideoIndex(index);
  };

  // Handle next & previous video
  const handleNextVideo = () => {
    if (currentVideoIndex !== null) {
      const nextIndex = currentVideoIndex + 1;
      const nextVideo = classes.find((c) => c._id === openChapter)?.part[nextIndex];
      if (nextVideo) {
        playVideo(nextVideo.videoUrl, nextIndex);
      }
    }
  };

  const handlePreviousVideo = () => {
    if (currentVideoIndex !== null && currentVideoIndex > 0) {
      const prevIndex = currentVideoIndex - 1;
      const prevVideo = classes.find((c) => c._id === openChapter)?.part[prevIndex];
      if (prevVideo) {
        playVideo(prevVideo.videoUrl, prevIndex);
      }
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Online Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Chapter List */}
        <div className="border p-4 rounded-lg shadow col-span-1">
          {classes.length === 0 ? (
            <p>No classes available</p>
          ) : (
            classes.map((classItem) => (
              <div key={classItem._id} className="mb-4 border p-4 rounded-lg shadow">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleChapter(classItem._id)}
                >
                  <h3 className="text-lg font-semibold">Chapter {classItem.chapter}: {classItem.title}</h3>
                  {openChapter === classItem._id ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                {openChapter === classItem._id && (
                  <div className="grid grid-cols-1 gap-4 mt-2">
                    {classItem.part.map((video, index) => (
                      <div
                        key={video._id}
                        className="p-2 border rounded cursor-pointer hover:bg-gray-200"
                        onClick={() => playVideo(video.videoUrl, index)}
                      >
                        {video.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Video Player */}
        {currentVideo && (
          <div className="col-span-2 border p-4 rounded-lg shadow-lg">
            <video src={currentVideo} controls className="w-full rounded-lg" />
            <div className="flex justify-between mt-2">
              <button
                onClick={handlePreviousVideo}
                className="btn btn-primary disabled:opacity-50"
                disabled={currentVideoIndex === 0}
              >
                Previous
              </button>
              <button
                onClick={handleNextVideo}
                className="btn btn-primary disabled:opacity-50"
                disabled={currentVideoIndex === null ||
                  currentVideoIndex >= classes.find((c) => c._id === openChapter)?.part.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
