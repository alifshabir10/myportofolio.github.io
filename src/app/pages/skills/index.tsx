import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

export default function Skills() {

   return (
      <>
         <div id="project" className="capitalize text-blue-700 font-semibold text-2xl md:text-4xl mb-3 text-center">
            Skills
         </div>
         <div className="flex flex-wrap gap-6 justify-center items-baseline ">
            <div>
               <FontAwesomeIcon icon={faReact} />
               <p>React Js</p>
            </div>
            <div>
               <FontAwesomeIcon icon={faNodeJs} />
               <p>Node Js</p>
            </div>
            <div>
               <img src="/tailwind.svg" alt="tailwind" className="w-16" />
               <p>Tailwind</p>
            </div>
            <div>
               <img src="/nextjs.svg" alt="nextjs" className="w-16" />
               <p>Next Js</p>
            </div>
            <div>
               <img src="/ant-design.svg" alt="ant-design" className="w-16" />
               <p>Ant Design</p>
            </div>
         </div>
      </>
   )
}