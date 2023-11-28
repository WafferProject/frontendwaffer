import React from "react";
const Description = () => {
    return (
      <React.Fragment>
      <section>
        <div className='w-screen h-screen grid grid-rows-2 text-white text-4xl md:grid-cols-2'>
            <div className=' w-full h-full bg-blue-800 centered md:h-screen'>
                <p>Page 1</p>
            </div>
  
            {/* page 2 */}
            <div className='w-full h-full bg-black centered md:h-screen'>
                <p>Page 2</p>
            </div>
        </div>
      </section>
    </React.Fragment>
    )
  }
  
  export default Description;