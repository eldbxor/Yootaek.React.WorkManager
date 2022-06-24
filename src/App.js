import React from "react";
import { Gantt, DefaultTheme, MaterialTheme } from "@dhtmlx/trial-react-gantt";

const scales = [
  { unit: "month", step: 1, format: "MMMM yyy" },
  { unit: "day", step: 1, format: "d" },
];

const columns = [
  { name: "text", label: "Task name", width: "100%" },
  { name: "start", label: "Start time", align: "center" },
  { name: "duration", label: "Duration", width: "70px", align: "center" },
  { name: "add-task", label: "", width: "50px", align: "center" },
];

const tasks = [
  {
    id: 1,
    open: true,
    start_date: "2020-11-06",
    duration: 8,
    text: "React Gantt Widget",
    progress: 60,
    type: "project",
  },
  {
    id: 2,
    parent: 1,
    start_date: "2020-11-06",
    duration: 4,
    text: "Lib-Gantt",
    progress: 80,
  },
];

const links = [{ source: 2, target: 1, type: 0 }];

const App = () => {
  return (
    <div>
      {/* <DefaultTheme /> */}
      <MaterialTheme />
      {/* 
      <div className="wx-default">
        <Gantt />
      </div> */}
      <div className="wx-material">
        <Gantt scales={scales} columns={columns} tasks={tasks} links={links} />
      </div>
    </div>
  );
};

export default App;
