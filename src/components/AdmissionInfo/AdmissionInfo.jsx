import React from "react";

const AdmissionInfo = () => {
  return (
    <div className="pt-28 pb-16">
      <div className="p-6 sm:p-8 lg:p-12 bg-slate-50">
        <h1 className="transform translate-x-3 text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 relative mb-6">
          <div className="group relative inline-block">
            <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-orange-500"></span>
            <span className="absolute bottom-0 right-0 h-5 w-5 animate-ping rounded-full bg-orange-500"></span>
          </div>
          <span className="ml-4">About Our School</span>
        </h1>
        <div className="lg:gap-6 grid lg:grid-cols-2 grid-cols-1">
          <div>
            <section className="mb-6">
              <h2 className="mb-5 text-orange-400 font-medium text-lg sm:text-xl">
                Admission Requirements
              </h2>
              <ul className="text-slate-700 list-inside space-y-3 list-disc">
                <li>
                  <span className="text-orange-400">
                    Completed application form:
                  </span>{" "}
                  Available on the Tled website.
                </li>
                <li>
                  <span className="text-orange-400">Proof of identity:</span>{" "}
                  National ID, passport, or driver’s license.
                </li>
                <li>
                  High school diploma or equivalent qualification certificate.
                </li>
                <li>
                  Minimum GPA of <span className="text-orange-400">2.5</span>{" "}
                  for undergraduate courses.
                </li>
                <li>
                  For international students,{" "}
                  <span className="text-orange-400">TOEFL</span> or{" "}
                  <span className="text-orange-400">IELTS</span> scores as proof
                  of English proficiency.
                </li>
                <li>Letter of recommendation from a teacher or employer.</li>
                <li>
                  Personal statement (
                  <span className="text-orange-400">500-700 words</span>)
                  outlining your goals and motivations.
                </li>
              </ul>
            </section>
            <section className="mb-6">
              <h2 className="font-medium mb-5 text-orange-400 text-lg sm:text-xl">
                Admission Deadlines
              </h2>
              <ul className="space-y-3 text-slate-700 list-disc list-inside">
                <li>
                  <span className="text-orange-400">Fall semester:</span>{" "}
                  Applications open{" "}
                  <span className="text-orange-400">January 1</span>, close{" "}
                  <span className="text-orange-400">May 31</span>.
                </li>
                <li>
                  <span className="text-orange-400">Spring semester:</span>{" "}
                  Applications open{" "}
                  <span className="text-orange-400">August 1</span>, close{" "}
                  <span className="text-orange-400">November 30</span>.
                </li>
                <li>
                  Late applications may be accepted with a fee (subject to
                  availability).
                </li>
              </ul>
            </section>
          </div>
          <div>
            <section className="mb-6">
              <h2 className="font-medium mb-5 text-orange-400 text-lg sm:text-xl">
                Program-Specific Requirements
              </h2>
              <p className="mb-4 text-slate-700">
                Additional requirements for specific programs include:
              </p>
              <ul className="space-y-3 text-slate-700 list-disc list-inside">
                <li>
                  <span className="text-orange-400">Portfolio submission:</span>{" "}
                  For design and creative arts programs.
                </li>
                <li>
                  <span className="text-orange-400">Entrance examination:</span>{" "}
                  For technical or science-related programs.
                </li>
                <li>
                  <span className="text-orange-400">Work experience:</span>{" "}
                  Required for MBA and executive-level programs.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg sm:text-xl mb-5 text-orange-400 font-medium">
                Admission Fees
              </h2>
              <ul className="list-disc list-inside space-y-3 text-slate-700">
                <li>
                  Application fee: <span className="text-orange-400">$50</span>{" "}
                  (non-refundable).
                </li>
                <li>
                  Enrollment fee: <span className="text-orange-400">$200</span>{" "}
                  (to confirm your spot after acceptance).
                </li>
                <li>
                  Late application fee:{" "}
                  <span className="text-orange-400">$75</span> (for applications
                  submitted after the deadline).
                </li>
                <li>
                  International student processing fee:{" "}
                  <span className="text-orange-400">$100</span>.
                </li>
              </ul>
              <p className="mt-5 text-slate-700">
                Payment can be made online via credit card, bank transfer, or
                PayPal. Please ensure all fees are paid before the deadlines to
                secure your admission.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionInfo;
