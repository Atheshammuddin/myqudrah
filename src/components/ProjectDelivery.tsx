function ProjectDelivery() {
  const extractedText = [
    {
      title: "Roles",
      detail:
        "Identify the entities and roles involved in the project delivery",
    },
    {
      title: "Processes",
      detail:
        "Identify the processes needed to manage the project delivery stages and the relation between processes",
    },
    {
      title: "Responsibility",
      detail:
        "Identify the team who will use the process and their roles in executing the process as per the Responsibility Assignment Matrix (RAM)",
    },
    {
      title: "Template",
      detail:
        "Create the document template and data fields needed to capture each process information",
    },
    {
      title: "Workflow",
      detail:
        "Identify the sequence of steps to perform the process including approval authorities and conditions",
    },
    {
      title: "Report",
      detail:
        "Identify the information needed to monitor, reevaluate and report the process performance",
    },
    {
      title: "Alerts",
      detail:
        "Identify the key performance indicator {KPI} to alert project team members favourable or unfavourable performance of a process",
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="row space">
          <div className="col-sm-12">
            <h1 className="text-center fw-bold">Project Delivery Process</h1>
          </div>
        </div>
        <div className="row">
          {extractedText.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
              <div className="projetdev">
                <div className="projectText">
                  <h4>{item.title}</h4>
                  <p>{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDelivery;
