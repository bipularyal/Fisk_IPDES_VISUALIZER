const individualQueries = {
  TwelveMonthEnrollment: {
    "Degree Stats":"SELECT malehc AS 'Male', femalehc AS 'Female' FROM TwelveMonthEnrollment WHERE year = ?;",
    "Gender Stats":"SELECT undergradhc AS 'Undergrad Head Count', gradhc AS 'Grad Head Count' FROM TwelveMonthEnrollment WHERE year = ?;"
  },
  CompletionStats:{
    "Completion Stats by Gender": "SELECT men AS 'Men', women AS 'Women' FROM CompletionStats WHERE year = ?;",
    "Completion Stats by Degree Type": "SELECT bacholers AS 'Bachelors', postbaccalaureate AS 'Postbaccalaureate', masters AS 'Masters' FROM CompletionStats WHERE year = ?;",
    "Bacholers Completion Stats by Major": "SELECT total as 'value', major as 'key' from CompletionByMajor where year = ? and degreeType = \"Bachelor's degree\""
},
  Expenses:{
    "Expenses by Value":"SELECT expense_function as 'key' , reported_values as 'value' FROM Expenses WHERE year = ? AND expense_function NOT IN ('Total core expenses', 'Total expenses');",
    "Expenses by Percentage":"SELECT expense_function  as 'key', percent_of_total_core_expenses as 'value' FROM Expenses WHERE year = ? AND expense_function NOT IN ('Total core expenses', 'Total expenses');",
    "Expenses per FTE":"SELECT expense_function as 'key', core_expenses_per_fte_enrollment as 'value' FROM Expenses WHERE year = ? AND expense_function NOT IN ('Total core expenses', 'Total expenses');",
  },
  FallEnrollmentByRace:{
    "Enrollment by Race":"SELECT * FROM FallEnrollmentByRace WHERE year = ?"
  },

  FallEnrollmentStats:{
    "Enrollment by Degree":"SELECT undergradEnrollment as 'Undergraduate Enrollment',gradEnrollment as 'Graduate Enrollment' FROM FallEnrollmentStats WHERE year = ?;"
  },
  GraduationRateEightYears:{
    "Graduation Percentage":"SELECT four_year_graduation_rate AS 'Four Year Graduation Rate', six_year_graduation_rate AS 'Six Year Graduation Rate', eightyearsgradrate AS 'Eight Year Graduation Rate' FROM GraduationRateEightYears WHERE year = ?;",
    "Graduation Count":"SELECT cohort AS 'Cohort', four_year_graduation_count AS 'Four Year Graduation Count', six_year_graduation_count AS 'Six Year Graduation Count', eightyearsgradcount AS 'Eight Year Graduation Count' FROM GraduationRateEightYears WHERE year = ?;"
  },
  GraduationRates:{
    "Cohort to Completors":"SELECT total_cohort AS 'Total Cohort', totalcohorttogradcount AS 'Grad Count' FROM GraduationRates WHERE year = ?;"
  },
  Revenues:{
    "Revenue by Value": "SELECT revenue_source AS 'key', reported_values AS 'value' FROM Revenues WHERE year = ? AND revenue_source NOT IN ('Total core revenues', 'Total revenues');",
    "Revenue by Percentage": "SELECT revenue_source AS 'key', percent_of_total_core_revenues AS 'value' FROM Revenues WHERE year = ? AND revenue_source NOT IN ('Total core revenues', 'Total revenues');",
    "Revenue per FTE": "SELECT revenue_source AS 'key', core_revenues_per_fte_enrollment AS 'value' FROM Revenues WHERE year = ? AND revenue_source NOT IN ('Total core revenues', 'Total revenues');"
  }
}

const rangeQueries = {
  TwelveMonthEnrollment: {
    malefemalehc: "SELECT year, malehc as MaleCount, femaleHC as FemaleCount FROM TwelveMonthEnrollment WHERE year BETWEEN ? AND ?",
  },
  AdmissionsData: {

  },
  CompletionByMajor:{
    all:"SELECT year, total FROM CompletionByMajor WHERE year BETWEEN ? AND ? AND major = ? And degreeType = \"Bachelor's degree\";",
  },
  CompletionStats:{

  },
  CostOfAttendence:{
    total: "SELECT year, total FROM CostOfAttendence WHERE year BETWEEN ? AND ?"
  },
  FallEnrollmentByRace:{

  },
  FallEnrollmentStats:{

  },
  Library:{
    physicalBooksCount:"Select year,books as Count from LibraryPhysical WHERE year BETWEEN ? AND ?;",
    digitalBooksCount:"Select year,books as Count from LibraryDigital WHERE year BETWEEN ? AND ?;",
    totalPhysicalCollectionCount:"Select year,total_collection as Count from LibraryPhysical WHERE year BETWEEN ? AND ?;",
    totalDigitalCollectionCount:"Select year,total_collection as Count from LibraryDigital WHERE year BETWEEN ? AND ?;",
  }
  ,
  GraduationRateEightYears:{
    cohortToGradCount:"SELECT year, cohort as Cohort, eightYearsGradCount as GradCount FROM GraduationRateEightYears WHERE year BETWEEN ? AND ?"
  },
  GraduationRates:{
    malecohortToGradCount:"SELECT year, male_cohort as Cohort, male_completers_six_years as GradCount FROM GraduationRates WHERE year BETWEEN ? AND ?",
    femaleCohortToGradCount:"SELECT year, female_cohort as Cohort, female_completers_six_years as GradCount FROM GraduationRates WHERE year BETWEEN ? AND ?",
    totalCohortToGradCount:"SELECT year, total_cohort as Cohort, totalCohortToGradCount as GradCount FROM GraduationRates WHERE year BETWEEN ? AND ?"
  },
  StudentAid:{

  },
  TotalAssets:{

  },
  Expenses:{
    total:'SELECT year, reported_values as Total FROM Expenses WHERE year BETWEEN ? AND ? AND expense_function = "Total expenses";',
    moneySpentonInstruction:'SELECT year, reported_values as Total FROM Expenses WHERE year BETWEEN ? AND ? AND expense_function = "Instruction";',
    moneySpentonResearch:'SELECT year, reported_values as Total FROM Expenses WHERE year BETWEEN ? AND ? AND expense_function = "Research";',
    totalPerFTE:'SELECT year, core_expenses_per_fte_enrollment as Total FROM Expenses WHERE year BETWEEN ? AND ? AND expense_function = "Total expenses";',
    expensesToRevenue:"SELECT e.year AS Year, e.reported_values AS Expenses, r.reported_values AS Revenue FROM Expenses e JOIN Revenues r ON e.year = r.year WHERE e.year BETWEEN ? AND ? AND e.expense_function = 'Total expenses' AND r.revenue_source = 'Total revenues';"
  },
  Revenues:{
    total:'SELECT year, reported_values as Total FROM Revenues WHERE year BETWEEN ? AND ? AND revenue_source = "Total revenues";',
    revenueFromTuition:'SELECT year, reported_values as Total FROM Revenues WHERE year BETWEEN ? AND ? AND revenue_source = "Tuition and fees";',
    revenueFromGovernmentSources:'SELECT year, reported_values as Total FROM Revenues WHERE year BETWEEN ? AND ? AND revenue_source = "Government grants and contracts";',
    revenueFromPrivateSource:'SELECT year, reported_values as Total FROM Revenues WHERE year BETWEEN ? AND ? AND revenue_source = "Private gifts, grants, and contracts";',
    revenueperFTE:'SELECT year, core_revenues_per_fte_enrollment as Total FROM Revenues WHERE year BETWEEN ? AND ? AND revenue_source = "Total revenues";',
    revenuesToExpenses:"SELECT e.year AS Year, e.reported_values AS Expenses, r.reported_values AS Revenue FROM Expenses e JOIN Revenues r ON e.year = r.year WHERE e.year BETWEEN ? AND ? AND e.expense_function = 'Total expenses' AND r.revenue_source = 'Total revenues';"
  }
};


  // Export both objects
  module.exports = {individualQueries,rangeQueries}
  

                                  
                         
                                   
                         
                   