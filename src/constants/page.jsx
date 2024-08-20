export const sideBarMenu = [
  {
    label: "Dashboard",
    active: require("@/assets/images/dashboardActive.png"),
    inactive: require("@/assets/images/dashboardInactive.png"),
    destination: "/",
  },
  {
    label: "API",
    active: require("@/assets/images/apiActive.png"),
    inactive: require("@/assets/images/apiInactive.png"),
    destination: "/api",
  },
  // {
  //   label: "Employee",
  //   active: require("@/assets/images/employeeActive.png"),
  //   inactive: require("@/assets/images/employeeInactive.png"),
  //   destination: "/employee",
  // },
];

export const serviceBox = {
  type: "table",
  title: "Service",
  headerData: [
    {
      size: "large",
      label: "Name",
    },
    {
      size: "medium",
      label: "Restart",
    },
    {
      size: "medium",
      label: "Instances",
    },
    {
      size: "medium",
      label: "Uptime",
    },
    {
      size: "medium",
      label: "Status",
    },
    {
      size: "medium",
      label: "Switch",
    },
  ],
};

export const cpuBox = {
  type: "chart",
  title: "CPU Usage",
};

export const memoryBox = {
  type: "chart",
  title: "Memory Usage",
};
