/* gate */
import Gate_1_Picture_1 from '../../img/projects/gates/Gate_1/Gate_1_Picture_1.jpeg';
import Gate_1_Picture_2 from '../../img/projects/gates/Gate_1/Gate_1_Picture_2.jpeg';
import Gate_1_Picture_3 from '../../img/projects/gates/Gate_1/Gate_1_Picture_3.jpeg';
import Gate_2_Picture_1 from '../../img/projects/gates/Gate_2/Gate_2_Picture_1.jpeg';

/* bathroom */
import Bathroom_1_Picture_1 from '../../img/projects/bathroom/Bathroom_1_Picture_1.jpeg';
import Bathroom_1_Picture_2 from '../../img/projects/bathroom/Bathroom_1_Picture_2.jpeg';
import Bathroom_1_Picture_3 from '../../img/projects/bathroom/Bathroom_1_Picture_3.jpeg';
import Bathroom_1_Picture_4 from '../../img/projects/bathroom/Bathroom_1_Picture_4.jpeg';

/* flooring */
/* pictures of projects*/
/* project 1 */
import Flooring_1_Picture_1 from '../../img/projects/flooring/flooring_1/Flooring_1_Image_1.jpeg';
import Flooring_1_Picture_2 from '../../img/projects/flooring/flooring_1/Flooring_1_Image_2.jpeg';
import Flooring_1_Picture_3 from '../../img/projects/flooring/flooring_1/Flooring_1_Image_3.jpeg';
/* project 2 */
import Flooring_2_Picture_1 from '../../img/projects/flooring/flooring_2/Flooring_2_Image_1.jpeg';
import Flooring_2_Picture_2 from '../../img/projects/flooring/flooring_2/Flooring_2_Image_2.jpeg';

/* kitchen */
/* project 1 */
import Kitchen_1_Picture_1 from '../../img/projects/kitchen/Kitchen 1/Kitchen_1_Image_1.jpeg';
import Kitchen_1_Picture_2 from '../../img/projects/kitchen/Kitchen 1/Kitchen_1_Image_2.jpeg';
import Kitchen_1_Picture_3 from '../../img/projects/kitchen/Kitchen 1/Kitchen_1_Image_3.jpeg';
import Kitchen_1_Picture_4 from '../../img/projects/kitchen/Kitchen 1/Kitchen_1_Image_4.jpeg';
import Kitchen_1_Picture_5 from '../../img/projects/kitchen/Kitchen 1/Kitchen_1_Image_5.jpeg';
/* project 2 */
import Kitchen_2_Picture_1 from '../../img/projects/kitchen/Fume Hood/Fume_Hood_2_Image_1.jpeg';
import Kitchen_2_Picture_2 from '../../img/projects/kitchen/Fume Hood/Fume_Hood_2_Image_1.jpeg';

/* shelves and closests */
import ShelvesClosets_1_Picture_1 from '../../img/projects/shelves_closets/ShelvesClosets_1_Image_1.jpeg';
import ShelvesClosets_1_Picture_2 from '../../img/projects/shelves_closets/ShelvesClosets_1_Image_2.jpeg';
import ShelvesClosets_1_Picture_3 from '../../img/projects/shelves_closets/ShelvesClosets_1_Image_3.jpeg';


export const projectDetails = {
    gate: [
        {
            info: {
                image: Gate_1_Picture_1,
                altText: "Gate Installation & Design",
                date: "02/15/2020"
            },
            
            pictures: [
                Gate_1_Picture_2,
                Gate_1_Picture_3
            ],
        },
        {
            info: {
                image: Gate_2_Picture_1,
                altText: "Gate Installation & Design",
                date: "02/23/2020"
            },
            pictures: [],
        },
    ],
    bathroom: [
        {
            info: {
                image: Bathroom_1_Picture_1,
                altText: "Bathroom",
                date: "04/23/2019"
            },
            
            pictures: [
                Bathroom_1_Picture_2,
                Bathroom_1_Picture_3,
                Bathroom_1_Picture_4
            ],
        },
    ],
    flooring: [
        {
            info: {
                image: Flooring_1_Picture_1,
                altText: "Flooring",
                date: "04/23/2019"
            },
            
            pictures: [
                Flooring_1_Picture_2,
                Flooring_1_Picture_3
            ],
        },
        {
            info: {
                image: Flooring_2_Picture_1,
                altText: "Flooring",
                date: "04/19/2019"
            },
            
            pictures: [
                Flooring_2_Picture_2
            ],
        },
    ],
    kitchen: [
        {
            info: {
                image: Kitchen_1_Picture_1,
                altText: "Kitchen",
                date: "11/09/2018 to 12/05/2018"
            },
            
            pictures: [
                Kitchen_1_Picture_2,
                Kitchen_1_Picture_3,
                Kitchen_1_Picture_4,
                Kitchen_1_Picture_5
            ],
        },
        {
            info: {
                image: Kitchen_2_Picture_1,
                altText: "Kitchen - Fume Hood",
                date: "08/02/2019"
            },
            pictures: [
                Kitchen_2_Picture_2
            ],
        },
    ],
    shelvesClosets: [
        {
            info: {
                image: ShelvesClosets_1_Picture_1,
                altText: "Shelves and Closets",
                date: ""
            },
            
            pictures: [
                ShelvesClosets_1_Picture_2,
                ShelvesClosets_1_Picture_3
            ],
        },
    ]
}