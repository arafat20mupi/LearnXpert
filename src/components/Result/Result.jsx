

const Result = () => {
  return (
    <div className="pb-60 pt-28 w-full h-screen">
      <div className="container mx-auto border-2 border-solid rounded-lg pb-10 pt-6">
        <div className="flex flex-col pb-5 border-b">
            <div className="flex justify-center">
                <input type="text" placeholder="Search by roll no..." className="border-2 border-solid outline-none text-sm pl-5 pr-32 py-1 mr-8 rounded-md shadow-sm"/>
                <button className="bg-red-500 text-white px-8 text-sm rounded-md">Search...</button>
            </div>
            <div className="flex justify-around pt-6">
                <span className="text-lg">Roll No : 199453</span>
                <span className="text-lg">ST Name : Abdullah Al Nirob</span>
            </div>
        </div>
        <div className="flex justify-center pt-5 pl-7">
          <table className="table-fixed w-2/3">
            <tr>
              <td className="p-2">Bangla</td>
              <td className="">94</td>
              <td className="">A+</td>
            </tr>
            <tr className="">
              <td className="p-2 ">English</td>
              <td className="">92</td>
              <td className="">A+</td>
            </tr>
            <tr className="">
              <td className="p-2 ">Math</td>
              <td className="">80</td>
              <td className="">A+</td>
            </tr>
            <tr className="">
              <td className="p-2 ">History</td>
              <td className="">96</td>
              <td className="">A+</td>
            </tr>
            <tr>
                <td colSpan="2"></td>
                <td className="pt-32">Grade : 4.78</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Result;
