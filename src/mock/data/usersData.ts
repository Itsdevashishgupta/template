import { useEffect, useState } from "react";

export const usersData = [
    {
        id: '1',
        name: 'Carolyn Perkins',
        email: 'eileen_h@hotmail.com',
        img: '/img/avatars/thumb-1.jpg',
    },
    {
        id: '2',
        name: 'Terrance Moreno',
        email: 'terrance_moreno@infotech.io',
        img: '/img/avatars/thumb-2.jpg',
    },
    {
        id: '3',
        name: 'Ron Vargas',
        email: 'ronnie_vergas@infotech.io',
        img: '/img/avatars/thumb-3.jpg',
    },
    {
        id: '4',
        name: 'Luke Cook',
        email: 'cookie_lukie@hotmail.com',
        img: '/img/avatars/thumb-4.jpg',
    },
    {
        id: '5',
        name: 'Joyce Freeman',
        email: 'joyce991@infotech.io',
        img: '/img/avatars/thumb-5.jpg',
    },
    {
        id: '6',
        name: 'Samantha Phillips',
        email: 'samanthaphil@infotech.io',
        img: '/img/avatars/thumb-6.jpg',
    },
    {
        id: '7',
        name: 'Tara Fletcher',
        email: 'taratarara@imaze.edu.du',
        img: '/img/avatars/thumb-7.jpg',
    },
    {
        id: '8',
        name: 'Frederick Adams',
        email: 'iamfred@imaze.infotech.io',
        img: '/img/avatars/thumb-8.jpg',
    },
    {
        id: '9',
        name: 'Carolyn Hanson',
        email: 'carolyn_h@gmail.com',
        img: '/img/avatars/thumb-9.jpg',
    },
    {
        id: '10',
        name: 'Brittany Hale',
        email: 'brittany1134@gmail.com',
        img: '/img/avatars/thumb-10.jpg',
    },
    {
        id: '11',
        name: 'Lloyd Obrien',
        email: 'handsome-obrien@hotmail.com',
        img: '/img/avatars/thumb-11.jpg',
    },
    {
        id: '12',
        name: 'Gabriella May',
        email: 'maymaymay12@infotech.io',
        img: '/img/avatars/thumb-12.jpg',
    },
    {
        id: '13',
        name: 'Lee Wheeler',
        email: 'lee_wheeler@infotech.io',
        img: '/img/avatars/thumb-13.jpg',
    },
    {
        id: '14',
        name: 'Gail Barnes',
        email: 'gailby0116@infotech.io',
        img: '/img/avatars/thumb-14.jpg',
    },
    {
        id: '15',
        name: 'Ella Robinson',
        email: 'ella_robinson@infotech.io',
        img: '/img/avatars/thumb-15.jpg',
    },
]
// const response = await fetch('https://col-u3yp.onrender.com/v1/api/admin/getall/project?id=65c32e19e0f36d8e1f30955c');
// const jsonData = await response.json();
// console.log(jsonData.data.projects);
// export const userDetailData =jsonData.data.projects
// console.log(userDetailData);

// export const userDetailData = [
//     {
//         "_id": {
//           $oid: "65c32ee24c548ae2c6ffa33c"
//         },
//         project_name: "Y Project",
//         client: [
//           {
//             client_name: "Client X",
//             client_contact: "+91-1234567890",
//             client_email: "ab123@gmail.com"
//           }
//         ],
//         project_id: "COLP-441799",
//         project_type: "Residential",
//         description: "This is residential  project",
//         files: [
//           "https://interior-design1.s3.ap-south-1.amazonaws.com/441799/1707290337730Screenshot%202024-01-04%20114858.png"
//         ],
//         mom: [
//           {
//             mom_id: "COl-M-822588",
//             meetingdate: "01/02/2024",
//             source: " Online",
//             attendees: {
//               client_name: "Kushagra",
//               organisor: null,
//               architect: null,
//               consultant_name: "Naveen"
//             },
//             remark: "This code snippet is configuring CORS (Cross-Origin Resource Sharing) for an Express.js application using the cors middleware. \nIt allows requests from specified origins and defines the allowed methods.",
//             imaportant_note: "origin: An array containing the allowed origins for requests. In this case, requests are allowed from both \"http://localhost:5173\" and ",
//             files: [
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-822588/1707298405509Screenshot%202024-01-04%20114858.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-822588/1707298405516Screenshot%202024-01-09%20121252.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-822588/1707298405521Screenshot%202024-01-11%20141616.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-822588/1707298405528Screenshot%202024-01-11%20145830.png"
//             ]
//           },
//           {
//             mom_id: "COl-M-968845",
//             meetingdate: "01/02/2024",
//             source: " Online",
//             attendees: {
//               client_name: "Sid",
//               organisor: null,
//               architect: null,
//               consultant_name: "Naveen"
//             },
//             remark: "This code snippet is configuring CORS (Cross-Origin Resource Sharing) for an Express.js application using the cors middleware. \nIt allows requests from specified origins and defines the allowed methods.",
//             imaportant_note: "origin: An array containing the allowed origins for requests. In this case, requests are allowed from both \"http://localhost:5173\" and ",
//             files: [
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-968845/1707298419399Screenshot%202024-01-04%20114858.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-968845/1707298419403Screenshot%202024-01-09%20121252.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-968845/1707298419407Screenshot%202024-01-11%20141616.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-968845/1707298419412Screenshot%202024-01-11%20145830.png"
//             ]
//           },
//           {
//             mom_id: "COl-M-101530",
//             meetingdate: "01/02/2024",
//             source: " Online",
//             attendees: {
//               client_name: "Siddhant",
//               organisor: null,
//               architect: null,
//               consultant_name: "Naveen"
//             },
//             remark: "This code snippet is configuring CORS (Cross-Origin Resource Sharing) for an Express.js application using the cors middleware. \nIt allows requests from specified origins and defines the allowed methods.",
//             imaportant_note: "origin: An array containing the allowed origins for requests. In this case, requests are allowed from both \"http://localhost:5173\" and ",
//             files: [
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-101530/1707298440337Screenshot%202024-01-04%20114858.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-101530/1707298440345Screenshot%202024-01-09%20121252.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-101530/1707298440350Screenshot%202024-01-11%20141616.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-101530/1707298440357Screenshot%202024-01-11%20145830.png"
//             ]
//           },
//           {
//             mom_id: "COl-M-892888",
//             meetingdate: "01/02/2024",
//             source: "In Office",
//             attendees: {
//               client_name: "Abhi",
//               organisor: null,
//               architect: null,
//               consultant_name: "Naveen"
//             },
//             remark: "This code snippet is configuring CORS (Cross-Origin Resource Sharing) for an Express.js application using the cors middleware. \nIt allows requests from specified origins and defines the allowed methods.",
//             imaportant_note: "origin: An array containing the allowed origins for requests. In this case, requests are allowed from both \"http://localhost:5173\" and ",
//             files: [
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-892888/1707298467596Screenshot%202024-01-04%20114858.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-892888/1707298467601Screenshot%202024-01-09%20121252.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-892888/1707298467605Screenshot%202024-01-11%20141616.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-892888/1707298467608Screenshot%202024-01-11%20145830.png"
//             ]
//           },
//           {
//             mom_id: "COl-M-735109",
//             meetingdate: "02/02/2024",
//             source: "In Office",
//             attendees: {
//               client_name: "Abhi Singh",
//               organisor: null,
//               architect: null,
//               consultant_name: "Naveen"
//             },
//             remark: "This code snippet is configuring CORS (Cross-Origin Resource Sharing) for an Express.js application using the cors middleware. \nIt allows requests from specified origins and defines the allowed methods.",
//             imaportant_note: "origin: An array containing the allowed origins for requests. In this case, requests are allowed from both \"http://localhost:5173\" and ",
//             files: [
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-735109/1707298481611Screenshot%202024-01-04%20114858.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-735109/1707298481615Screenshot%202024-01-09%20121252.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-735109/1707298481619Screenshot%202024-01-11%20141616.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-735109/1707298481624Screenshot%202024-01-11%20145830.png"
//             ]
//           },
//           {
//             mom_id: "COl-M-314182",
//             meetingdate: "02/02/2024",
//             source: "In Office",
//             attendees: {
//               client_name: "Abhi Singh",
//               organisor: null,
//               architect: null,
//               consultant_name: "Naveen"
//             },
//             remark: "This code snippet is configuring CORS (Cross-Origin Resource Sharing) for an Express.js application using the cors middleware. \nIt allows requests from specified origins and defines the allowed methods.",
//             imaportant_note: "origin: An array containing the allowed origins for requests. In this case, requests are allowed from both \"http://localhost:5173\" and ",
//             files: [
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-314182/1707298504393Screenshot%202024-01-04%20114858.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-314182/1707298504397Screenshot%202024-01-09%20121252.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-314182/1707298504401Screenshot%202024-01-11%20141616.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-314182/1707298504405Screenshot%202024-01-11%20145830.png"
//             ]
//           },
//           {
//             mom_id: "COl-M-848282",
//             meetingdate: "02/02/2024",
//             source: "In Office",
//             attendees: {
//               client_name: "Abhishek",
//               organisor: null,
//               architect: null,
//               consultant_name: "Naveen"
//             },
//             remark: "This code snippet is configuring CORS (Cross-Origin Resource Sharing) for an Express.js application using the cors middleware. \nIt allows requests from specified origins and defines the allowed methods.",
//             imaportant_note: "origin: An array containing the allowed origins for requests. In this case, requests are allowed from both \"http://localhost:5173\" and ",
//             files: [
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-848282/1707298513877Screenshot%202024-01-04%20114858.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-848282/1707298513882Screenshot%202024-01-09%20121252.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-848282/1707298513888Screenshot%202024-01-11%20141616.png",
//               "https://interior-design1.s3.ap-south-1.amazonaws.com/COLP-441799/COl-M-848282/1707298513895Screenshot%202024-01-11%20145830.png"
//             ]
//           }
//         ],
//         leadmanager: "Roj",
//         designers: [
//           {
//             junior_designer: [
//               {
//                 name: "Grecy",
//                 status: "working",
//                 id: 874925
//               }
//             ],
//             senior_designer: [
//               {
//                 name: "Daneil",
//                 status: "working",
//                 id: 670055
//               }
//             ]
//           }
//         ],
//         superviser: "Lady",
//         visualizer: "Evil",
//         project_status: "design",
//         project_start_date: {
//           $date: "2023-12-31T18:30:00.000Z"
//         },
//         timeline_date: {
//           $date: "2024-01-30T18:30:00.000Z"
//         },
//         project_end_date: {
//           $date: "2024-01-30T18:30:00.000Z"
//         },
//         project_budget: "50000 ₹",
//         project_location: "Delhi",
//         createdAt: {
//           $date: "2024-02-07T07:18:58.060Z"
//         },
//         __v: 0
//       }
      
// ]

// const response = await fetch('https://col-u3yp.onrender.com/v1/api/admin/getall/lead/');
// const jsonData = await response.json();
// console.log(jsonData.data);
// export const userDetailData=jsonData.data
// console.log(userDetailData);



export const userDetailData = 
[
    {
        id: "8",
        name: "Devashish Gupta",
        lead_id: "833500",
        email: "Devashishgupta20102000@gmail.com",
        phone: "+916389707199",
        location: "delhi",
        status: "Follow Up",
        source: "Online",
        notes: [
          {
            content: "this is candidate refered by arvind",
            createdBy: "Admin",
            _id: "65c35bd30bd5c3b0ec1ed5bc",
            createdAt: "2024-02-07T10:30:43.883Z"
          }
        ],
        createdAt: "2024-02-07T10:30:43.883Z",
        __v: 0
      },
      {
        id: "65c364b51ffbd8a3f13b3771",
        name: "Ratnesh",
        lead_id: "510161",
        email: "ashish@gmail.com",
        phone: "+91 1234567890",
        location: "Delhi",
        status: "cancel",
        source: "website",
        date: "07/02/2024",
        notes: [
          {
            content: "this is lead management of crm",
            createdBy: "ADMIN",
            _id: "65c364b51ffbd8a3f13b3772",
            createdAt: "2024-02-07T11:08:37.729Z"
          },
          {
            content: "this is lead management of crm for hd bgfb bsdb bsd",
            createdBy: "Client",
            _id: "65c364ff1ffbd8a3f13b3779",
            createdAt: "2024-02-07T11:09:51.919Z"
          }
        ],
        createdAt: "2024-02-07T11:08:37.732Z",
        __v: 0
      }
   
]
