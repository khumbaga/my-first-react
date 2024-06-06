import React, { useState } from 'react'

const Lesson = () => {
    
        const [text, setText] = useState("")

        const lessons = [
        { name: "Математик", point: 100 },
        { name: "Англи хэл", point: 90 },
        { name: "Монгол хэл", point: 95 },
      ];

       const onTextChange = (e) => {

      const inputText = e.target.value;
    //   console.log("text:", inputtext);
      setText(inputText)
      };


      const filteredLessons = lessons.filter(lesson =>
        lesson.name.toLowerCase().includes(text.toLowerCase())
      );
      console.log(filteredLessons);

  return (
    <div> 
        <input type="text" placeholder='hailt' onChange={onTextChange}/>
        {lessons.map(lesson=><h5>{lesson.name}= {lesson.point}</h5> )}
    </div>
  )
}
export default Lesson