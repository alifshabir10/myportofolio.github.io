function Navbar() {
   const dataNavbar = [
      {
         id: 1,
         title: "Home",
         link: "/"
      },
      {
         id: 2,
         title: "About Me",
         link: "/"
      },
      {
         id: 3,
         title: "My Projects",
         link: "/"
      },
      {
         id: 4,
         title: "Clients",
         link: "/"
      },



   ]
   return (
      <>
         <div className="md:flex justify-end mx-4 my-6 ">

            <div className="md:flex grid gap-3">
               {dataNavbar.map((value, key) =>
                  <a href={value.link} key={key}> {value.title}</a>
               )
               }
            </div>
         </div>
      </>
   )
}

export default Navbar