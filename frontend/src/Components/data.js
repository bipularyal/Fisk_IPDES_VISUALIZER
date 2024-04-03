const rangeData = {
  TwelveMonthEnrollment: ["malehc", "femalehc", "totalhc", "gradhc", "undergradhc", "malefemalehc"],
  AdmissionsData: ["applicants", "percentageAdmitted", "percEnrolled", "admittedWhoEnrolled", "totalEnrolled"],
  CompletionByMajor: [
    "Computer and Information Sciences, General",
    "Special Education and Teaching, General",
    "Teacher Education and Professional Development, Specific Levels and Methods, Other",
    "Music Teacher Education",
    "Spanish Language and Literature",
    "English Language and Literature, General",
    "General Studies",
    "Biology/Biological Sciences, General",
    "Biochemistry and Molecular Biology",
    "Mathematics, General",
    "Data Science, General",
    "Philosophy and Religious Studies, Other",
    "Chemistry, General",
    "Physics, General",
    "Psychology, General",
    "Criminal Justice and Corrections, General",
    "Political Science and Government, General",
    "Political Science and Government, Other",
    "Sociology",
    "Sociology, General",
    "Drama and Dramatics/Theatre Arts, General",
    "Art/Art Studies, General",
    "Fine/Studio Arts, General",
    "Music, General",
    "Music Performance, General",
    "Community/Environmental/Socially-Engaged Art",
    "Registered Nursing/Registered Nurse",
    "Business/Commerce, General",
    "History, General"
  ],
  CompletionStats: ["men", "women", "bacholers", "masters", "total"],
  CostOfAttendence: ["tuitionandfees", "booksAndSupplies", "roomAndBoard", "other", "total"],
  Expenses: ["total", "moneySpentonInstruction", "moneySpentonResearch", "totalPerFTE"],
  FallEnrollmentByRace: [
    "american_indian_or_alaska_native",
    "asian",
    "black_or_african_american",
    "hispanic_latino",
    "native_hawaiian_or_pacific_islander",
    "white",
    "two_or_more_races",
    "race_and_ethnicity_unknown",
    "nonresident_alien"
  ],
  FallEnrollmentStats: ["totalEnrollment", "undergradEnrollment", "gradEnrollment", "studentFacultyRatio", "percentOfFemaleStudent"],
  GraduationRateEightYears: ["cohortToGradCount", "eightYearsGradCount", "eightYearsGradRate"],
  GraduationRates: ["malecohortToGradCount", "femaleCohortToGradCount", "totalCohortToGradCount", "gradRate"],
  Library: ["physicalBooksCount", "digitalBooksCount", "totalBooksCount", "totalCollectionCount", "totalPhysicalCollectionCount", "totalDigitalCollectionCount"],
  Revenues: ["total", "revenueFromTuition", "revenueperFTE", "revenueFromPrivateSource", "revenueFromGovernmentSources"],
  StudentAid: ["totalAid", "percentOfAidReceivers", "averageAid", "averageInstitutionalAid"],
  TotalAssets: ["totalNetAssets"]
    };

const individualData = {
    TwelveMonthEnrollment: ["Degree Stats", "Gender Stats"],
    CompletionStats: ["Completion Stats by Gender", "Completion Stats by Degree Type"],
    Expenses: ["Expenses by Value", "Expenses by Percentage", "Expenses per FTE"],
    FallEnrollmentByRace: ["Enrollment by Race"],
    FallEnrollmentStats: ["Enrollment by Degree", "Enrollment by Gender"],
    GraduationRateEightYears: ["Graduation Percentage", "Graduation Count"],
    GraduationRates: ["Cohort to Completors"],
    Revenues: ["Revenue by Value", "Revenue by Percentage", "Revenue per FTE"]
};
  
  // Export both objects
  export { rangeData, individualData };

                                  
                         
                                   
                         
                   