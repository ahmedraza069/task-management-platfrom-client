const Benifits = () => {
  return (
    <div>
      <section className="bg-pink-50 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <div className=" py-12 ">
            <h4 className="text-5xl font-bold text-blue text-center mb-3 ">
              Audience & Beneficiaries
            </h4>
            <h3 className="border-b-4 max-w-2xl mx-auto border-blue"></h3>
          </div>


          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32  text-white">
            <div className="bg-blue p-6 rounded-lg">
              <h3 className="font-bold text-xl"> Developers & Tech Teams</h3>
              <p className="mt-1 dark:text-gray-400">
              <span className="font-bold">Benefit:</span> Streamline project workflows, manage sprints, track bugs, and collaborate seamlessly with team members.
              </p>
              <p className="mt-1 dark:text-gray-400">
              <span className="font-bold">Features they might love:</span> Integrated code repositories, developer-friendly task assignment, and real-time collaboration tools.
              </p>
            </div>
            {/* 1 */}
            <div className="bg-blue p-6 rounded-lg">
              <h3 className="font-bold text-xl">  Bankers & Financial Analysts</h3>
              <p className="mt-1 dark:text-gray-400">
              <span className="font-bold">Benefit:</span> Organize financial tasks, track reports, manage client portfolios, and ensure regulatory compliance.
              </p>
              <p className="mt-1 dark:text-gray-400">
              <span className="font-bold">Features they might love:</span> Secure data handling, audit trail, financial reporting tools, and customizable dashboards.
              </p>
            </div>
            {/* 1 */}
            <div className="bg-blue p-6 rounded-lg">
              <h3 className="font-bold text-xl"> Corporate Professionals & Teams</h3>
              <p className="mt-1 dark:text-gray-400">
              <span className="font-bold">Benefit:</span> Enhance productivity, manage deadlines, and ensure project milestones are met efficiently.
              </p>
              <p className="mt-1 dark:text-gray-400">
              <span className="font-bold">Features they might love:</span> Calendar integration, priority setting, document sharing, and automated reminders.
              </p>
            </div>
            {/* 1 */}
            <div className="bg-blue p-6 rounded-lg">
              <h3 className="font-bold text-xl"> Educators & Students</h3>
              <p className="mt-1 dark:text-gray-400">
              <span className="font-bold">Benefit:</span>Manage academic projects, assignments, group tasks, and research projects efficiently.
              </p>
              <p className="mt-1 dark:text-gray-400">
              <span className="font-bold">Features they might love:</span> Assignment submission portals, grading tools, collaborative workspace, and resource sharing.
              </p>
            </div>









        
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benifits;
