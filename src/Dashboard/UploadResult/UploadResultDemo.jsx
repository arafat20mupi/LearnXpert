import { useRef, useState } from "react";

export default function UploadResultDemo() {
  const [stData, setStData] = useState({name: "", studentId: "", rollNo: "", className: "", marks: []});
  const [selectedClass, setSelectedClass] = useState("6");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const rollRefs = useRef([]);
  const idRefs = useRef([]);
  const nameRefs = useRef([]);


  const classData = [
    {
      className: "6",
      singleClassData: [
        { roll: 1, id: 101, name: "Emma", phone: "123-456-7890", address: "123 Main St" },
        { roll: 2, id: 102,  name: "Liam", phone: "987-654-3210", address: "456 Oak Ave" },
        { roll: 3, id: 103, name: "Olivia", phone: "555-555-5555", address: "789 Pine Rd" },
      ]
    },
    {
      className: "7",
      singleClassData: [
        { roll: 1, id: 101, name: "Sophia", phone: "321-654-0987", address: "234 Elm St" },
        { roll: 2, id: 102, name: "Noah", phone: "876-543-2109", address: "567 Maple Ave" },
        { roll: 3, id: 103, name: "Ava", phone: "444-444-4444", address: "890 Cedar Rd" },
      ]
    },
    {
      className: "8",
      singleClassData: [
        {
            roll: 1,
            name: "Isabella",
            phone: "111-222-3333",
            address: "345 Birch St",
          },
          {
            roll: 2,
            name: "Ethan",
            phone: "999-888-7777",
            address: "678 Spruce Ave",
          },
          { roll: 3, name: "Mia", phone: "333-222-1111", address: "901 Willow Rd" },
      ]
    },
    {
        className: "9",
        singleClassData: [
            {
                roll: 1,
                name: "Charlotte",
                phone: "444-555-6666",
                address: "456 Aspen St",
              },
              {
                roll: 2,
                name: "James",
                phone: "888-777-6666",
                address: "789 Redwood Ave",
              },
              {
                roll: 3,
                name: "Amelia",
                phone: "222-333-4444",
                address: "123 Cypress Rd",
              },
        ]
    },
    {
        className: "10",
        singleClassData: [
            {
                roll: 1,
                name: "Harper",
                phone: "555-666-7777",
                address: "567 Sequoia St",
              },
              {
                roll: 2,
                name: "Lucas",
                phone: "777-888-9999",
                address: "890 Mahogany Ave",
              },
              { roll: 3, name: "Evelyn", phone: "111-444-3333", address: "234 Palm Rd" },
        ]
    }

  ];

  const singleClass= classData.find((item) => item.className === selectedClass);



  const handleUpload = (i) => {
        setIsModalOpen(!isModalOpen);
        const rollNo = rollRefs.current[i].innerText;
        const studentId = idRefs.current[i].innerText;
        const name = nameRefs.current[i].innerText;

        setStData((prev)=>{
            return{
                ...prev, name, rollNo, studentId, className:selectedClass
            }
        })
        
        console.log(name, rollNo, studentId);

  };

  const handleChange = () => {
      
    
  }

  return (
    <>
      <div className="w-full">
        <div className="container mx-auto">
          <div>
            <select className="border-2" value={selectedClass} onChange={(e)=>{setSelectedClass(e.target.value)}}>
              <option value="6">Class 6</option>
              <option value="7">Class 7</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
            </select>
          </div>

          <div></div>

          <div>
            <table className="ml-[610px] md:ml-0 text-left w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th>Roll</th>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Upload</th>
                </tr>
              </thead>
              <tbody>
                    {
                        singleClass?.singleClassData?.map((item, i)=>{
                            return(
                                <>
                                  <tr key={i}>
                                    <td ref={(el)=>(rollRefs.current[i] = el)}>{item.roll}</td>
                                    <td ref={(el) => (idRefs.current[i] = el)}>{item.id}</td>
                                    <td ref={(el) => (nameRefs.current[i] = el)}>{item.name}</td>
                                    <td>
                                        <button onClick={() => handleUpload(i)}>Upload</button>
                                    </td>
                                  </tr>
                                </>
                            )
                        })
                    }
              </tbody>
            </table>
          </div>

                    {
                      isModalOpen && (
                          <div className="w-full">
                            
                              <form>
                                  <div>
                                      <label htmlFor="name">Name : </label>
                                      <input type="text" value={stData.name} />
                                  </div>
                                  <div>
                                      <label htmlFor="">Roll : </label>
                                      <input type="text" value={stData.rollNo} />
                                  </div>
                                  <div>
                                      <label htmlFor="name">Student ID : </label>
                                      <input type="text" value={stData.name} />
                                  </div>
                                  <div>
                                      <label htmlFor="classname">className : </label>
                                      <input type="text" value={stData.className} />
                                  </div>
                                  <div>
                                      <label htmlFor="bangla">Bangla : </label>
                                      <input type="number" name="bangla" onChange={handleChange}/>
                                  </div>
                                  <div>
                                      <label htmlFor="classname">English : </label>
                                      <input type="number"  />
                                  </div>
                                  <div>
                                      <label htmlFor="classname">Math : </label>
                                      <input type="number"  />
                                  </div>

                                  <button type="submit">Upload</button>
                              </form>
                          </div>
                      )
                    }
        </div>
      </div>
    </>
  );
}
