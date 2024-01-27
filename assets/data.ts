import {
    MdDashboard,
    MdOutlineSettings,
    MdHelpCenter,
    MdOutlineVideoCameraFront,

  } from "react-icons/md";
  import { RiVideoAddLine } from "react-icons/ri";

  
  export const IndMenuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: MdDashboard,
        },
        {
          title: "Meetings",
          path: "/dashboard/meetings",
          icon: MdOutlineVideoCameraFront,
        },
        {
          title: "Join",
          path: "/dashboard/join",
          icon: RiVideoAddLine,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: MdOutlineSettings ,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: MdHelpCenter ,
        },
      ],
    },
  ]
  
  
  
