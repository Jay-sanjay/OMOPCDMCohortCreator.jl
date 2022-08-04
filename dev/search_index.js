var documenterSearchIndex = {"docs":
[{"location":"api/#OMOPCDMCohortCreator-API","page":"API","title":"OMOPCDMCohortCreator API","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"This is a list of documentation associated with every single exported function from OMOPCDMCohortCreator. There are a few different sections with a brief explanation of what these sections are followed by relevant functions.","category":"page"},{"location":"api/","page":"API","title":"API","text":"","category":"page"},{"location":"api/#Getters","page":"API","title":"Getters","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"This family of functions are dedicated to only getting information concerning a patient or OMOP CDM database.","category":"page"},{"location":"api/","page":"API","title":"API","text":"GetDatabasePersonIDs\nGetPatientState\nGetPatientGender\nGetPatientRace\nGetPatientAgeGroup\nGetPatientVisits\nGetMostRecentConditions\nGetMostRecentVisit\nGetVisitCondition","category":"page"},{"location":"api/#OMOPCDMCohortCreator.GetDatabasePersonIDs","page":"API","title":"OMOPCDMCohortCreator.GetDatabasePersonIDs","text":"GetDatabasePersonIDs(conn; tab::SQLTable = person)\n\nGet all unique person_id's from a database.\n\nArguments:\n\nconn - database connection using DBInterface\n\nKeyword Arguments:\n\ntab::SQLTable - the SQLTable representing the Person table; default person\n\nReturns\n\nids::Vector{Int64} - the list of persons\n\n\n\n\n\n","category":"function"},{"location":"api/#OMOPCDMCohortCreator.GetPatientState","page":"API","title":"OMOPCDMCohortCreator.GetPatientState","text":"GetPatientState(ids, conn; tab::SQLTable = location, join_tab::SQLTable = person)\n\nGiven a list of person IDs, find their home state.\n\nArguments:\n\nids - list of person_id's; each ID must be of subtype Integer conn - database connection using DBInterface\n\nKeyword Arguments:\n\ntab::SQLTable - the SQLTable representing the Location table; default location\njoin_tab::SQLTable - the SQLTable representing the Person table; default person\n\nReturns\n\ndf::DataFrame - a two column DataFrame comprised of columns: :person_id and :state\n\n\n\n\n\n","category":"function"},{"location":"api/#OMOPCDMCohortCreator.GetPatientGender","page":"API","title":"OMOPCDMCohortCreator.GetPatientGender","text":"GetPatientGender(ids, conn; tab::SQLTable = person)\n\nGiven a list of person IDs, find their gender.\n\nArguments:\n\nids - list of person_id's; each ID must be of subtype Integer conn - database connection using DBInterface\n\nKeyword Arguments:\n\ntab::SQLTable - the SQLTable representing the Person table; default person\n\nReturns\n\ndf::DataFrame - a two column DataFrame comprised of columns: :person_id and :gender_concept_id\n\n\n\n\n\n","category":"function"},{"location":"api/#OMOPCDMCohortCreator.GetPatientRace","page":"API","title":"OMOPCDMCohortCreator.GetPatientRace","text":"GetPatientRace(ids, conn; tab::SQLTable = person)\n\nGiven a list of person IDs, find their race.\n\nArguments:\n\nids - list of person_id's; each ID must be of subtype Integer conn - database connection using DBInterface\n\nKeyword Arguments:\n\ntab::SQLTable - the SQLTable representing the Person table; default person\n\nReturns\n\ndf::DataFrame - a two column DataFrame comprised of columns: :person_id and :race_concept_id\n\n\n\n\n\n","category":"function"},{"location":"api/#OMOPCDMCohortCreator.GetPatientAgeGroup","page":"API","title":"OMOPCDMCohortCreator.GetPatientAgeGroup","text":"GetPatientAgeGroup(     ids, conn;     agegroupings::Vector{Vector{T}} where {T<:Integer} = [         [0, 9],         [10, 19],         [20, 29],         [30, 39],         [40, 49],         [50, 59],         [60, 69],         [70, 79],         [80, 89],     ],     tab::SQLTable = person,     jointab::SQLTable = observation_period, )\n\nFinds all individuals in age groups as specified by age_groupings.\n\nArguments:\n\nids - list of person_id's; each ID must be of subtype Integer\n\nage_groupings - a vector of age groups of the form [[10, 19], [20, 29],] denoting an age group of 10 - 19 and 20 - 29 respectively; age values must subtype of Integer\n\nconn - database connection using DBInterface\n\nKeyword Arguments:\n\nage_groupings - a vector of age groups of the form [[10, 19], [20, 29],] denoting an age group of 10 - 19 and 20 - 29 respectively; age values must subtype of Integer\ntab::SQLTable - the SQLTable representing the Person table; default person\njoin_tab::SQLTable - the SQLTable representing the Observation Period table; default observation_period\n\nReturns\n\ndf::DataFrame - a two column DataFrame comprised of columns: :person_id and :age_group\n\n\n\n\n\n","category":"function"},{"location":"api/#OMOPCDMCohortCreator.GetPatientVisits","page":"API","title":"OMOPCDMCohortCreator.GetPatientVisits","text":"GetPatientVisits(ids, conn; tab::SQLTable = visit_occurrence)\n\nGiven a list of person IDs, find all their visits.\n\nArguments:\n\nids - list of person_id's; each ID must be of subtype Integer conn - database connection using DBInterface\n\nKeyword Arguments:\n\ntab::SQLTable - the SQLTable representing the Visit Occurrence table; default visit_occurrence\n\nReturns\n\ndf::DataFrame - a two column DataFrame comprised of columns: :person_id and :visit_occurrence_id\n\n\n\n\n\n","category":"function"},{"location":"api/#OMOPCDMCohortCreator.GetMostRecentConditions","page":"API","title":"OMOPCDMCohortCreator.GetMostRecentConditions","text":"GetMostRecentConditions(ids, conn; tab::SQLTable = condition_occurrence)\n\nGiven a list of person IDs, find their last recorded conditions.\n\nArguments:\n\nids - list of person_id's; each ID must be of subtype Integer conn - database connection using DBInterface\n\nKeyword Arguments:\n\ntab::SQLTable - the SQLTable representing the Condition Occurrence table; default condition_occurrence\n\nReturns\n\ndf::DataFrame - a two column DataFrame comprised of columns: :person_id and :condition_concept_id\n\n\n\n\n\n","category":"function"},{"location":"api/#OMOPCDMCohortCreator.GetMostRecentVisit","page":"API","title":"OMOPCDMCohortCreator.GetMostRecentVisit","text":"GetMostRecentVisit(ids, conn; tab::SQLTable = visit_occurrence)\n\nGiven a list of person IDs, find their last recorded visit.\n\nArguments:\n\nids - list of person_id's; each ID must be of subtype Integer conn - database connection using DBInterface\n\nKeyword Arguments:\n\ntab::SQLTable - the SQLTable representing the Visit Occurrence table; default visit_occurrence\n\nReturns\n\ndf::DataFrame - a two column DataFrame comprised of columns: :person_id and :visit_occurrence_id\n\n\n\n\n\n","category":"function"},{"location":"api/#OMOPCDMCohortCreator.GetVisitCondition","page":"API","title":"OMOPCDMCohortCreator.GetVisitCondition","text":"GetVisitCondition(visitids, conn; tab::SQLTable = visitoccurrence)\n\nGiven a list of visit IDs, find their corresponding conditions.\n\nArguments:\n\nvisit_ids - list of visit_id's; each ID must be of subtype Integer conn - database connection using DBInterface\n\nKeyword Arguments:\n\ntab::SQLTable - the SQLTable representing the Condition Occurrence table; default condition_occurrence\n\nReturns\n\ndf::DataFrame - a two column DataFrame comprised of columns: :visit_occurrence_id and :condition_concept_id\n\n\n\n\n\n","category":"function"},{"location":"api/#Filters","page":"API","title":"Filters","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"These functions accepts parameters to produce queries that look for specific subpopulations or information given specific patient identifier(s) (i.e. person_id). ","category":"page"},{"location":"api/","page":"API","title":"API","text":"VisitFilterPersonIDs\nConditionFilterPersonIDs\nRaceFilterPersonIDs\nGenderFilterPersonIDs\nStateFilterPersonIDs\nAgeGroupFilterPersonIDs","category":"page"},{"location":"api/#OMOPCDMCohortCreator.VisitFilterPersonIDs","page":"API","title":"OMOPCDMCohortCreator.VisitFilterPersonIDs","text":"VisitFilterPersonIDs(visitcodes; tab::SQLTable = visitoccurrence)\n\nGiven a list of visit concept IDs, visit_codes  return from the database individuals having at least one entry in the Visit Occurrence table matching at least one of the provided visit types.\n\nArguments:\n\nvisit_codes - a vector of visit_concept_id's; must be a subtype of Integer\n\nKeyword Arguments:\n\ntab::SQLTable - the SQLTable representing the Visit Occurrence table; default visit_occurrence\n\nReturns\n\nids::Vector{Int64} - the list of persons resulting from the filter\n\n\n\n\n\n","category":"function"},{"location":"api/#OMOPCDMCohortCreator.ConditionFilterPersonIDs","page":"API","title":"OMOPCDMCohortCreator.ConditionFilterPersonIDs","text":"ConditionFilterPersonIDs(conditioncodes; tab::SQLTable = conditionoccurrence)\n\nGiven a list of condition concept IDs, condition_codes, return from the database individuals having at least one entry in the Condition Occurrence table matching at least one of the provided condition types.\n\nArguments:\n\ncondition_codes - a vector of condition_concept_id's; must be a subtype of Integer\n\nKeyword Arguments:\n\ntab::SQLTable - the SQLTable representing the Condition Occurrence table; default condition_occurrence\n\nReturns\n\nids::Vector{Int64} - the list of persons resulting from the filter\n\n\n\n\n\n","category":"function"},{"location":"api/#OMOPCDMCohortCreator.RaceFilterPersonIDs","page":"API","title":"OMOPCDMCohortCreator.RaceFilterPersonIDs","text":"RaceFilterPersonIDs(race_codes; tab::SQLTable = person)\n\nGiven a list of condition concept IDs, race_codes, return from the database individuals having at least one entry in the Person table matching at least one of the provided race types.\n\nArguments:\n\nrace_codes - a vector of race_concept_id's; must be a subtype of Integer\n\nKeyword Arguments:\n\ntab::SQLTable - the SQLTable representing the Person table; default person\n\nReturns\n\nids::Vector{Int64} - the list of persons resulting from the filter\n\n\n\n\n\n","category":"function"},{"location":"api/#OMOPCDMCohortCreator.GenderFilterPersonIDs","page":"API","title":"OMOPCDMCohortCreator.GenderFilterPersonIDs","text":"GenderFilterPersonIDs(gendercodes; tab::SQLTable = visitoccurrence)\n\nGiven a list of visit concept IDs, gender_codes return from the database individuals having at least one entry in the Person table matching at least one of the provided gender types.\n\nArguments:\n\nvisit_codes - a vector of gender_concept_id's; must be a subtype of Integer\n\nKeyword Arguments:\n\ntab::SQLTable - the SQLTable representing the Person table; default person\n\nReturns\n\nids::Vector{Int64} - the list of persons resulting from the filter\n\n\n\n\n\n","category":"function"},{"location":"api/#OMOPCDMCohortCreator.StateFilterPersonIDs","page":"API","title":"OMOPCDMCohortCreator.StateFilterPersonIDs","text":"StateFilterPersonIDs(states; tab::SQLTable = location, join_tab::SQLTable = person)\n\nGiven a list of states, states, return from the database individuals found in the provided state list.\n\nArguments:\n\nstates - a vector of state abbreviations; must be a subtype of AbstractString\n\nKeyword Arguments:\n\ntab::SQLTable - the SQLTable representing the Location table; default location\njoin_tab::SQLTable - the SQLTable representing the Person table; default person\n\nReturns\n\nids::Vector{Int64} - the list of persons resulting from the filter\n\n\n\n\n\n","category":"function"},{"location":"api/#OMOPCDMCohortCreator.AgeGroupFilterPersonIDs","page":"API","title":"OMOPCDMCohortCreator.AgeGroupFilterPersonIDs","text":"AgeGroupFilterPersonIDs(agegroupings; tab::SQLTable = location, jointab::SQLTable = observation_period)\n\nFinds all individuals in age groups as specified by age_groupings.\n\nArguments:\n\nage_groupings - a vector of age groups of the form [[10, 19], [20, 29],] denoting an age group of 10 - 19 and 20 - 29 respectively; age values must subtype of Integer\n\nKeyword Arguments:\n\ntab::SQLTable - the SQLTable representing the Person table; default person\njoin_tab::SQLTable - the SQLTable representing the Observation Period table; default observation_period\n\nReturns\n\nids::Vector{Int64} - the list of persons resulting from the filter\n\n\n\n\n\n","category":"function"},{"location":"api/#Generators","page":"API","title":"Generators","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"The generator functions are to set generate initial connections to an OMOP CDM database or to finalize resulting data from queries into various outputs. ","category":"page"},{"location":"api/","page":"API","title":"API","text":"# GenerateCohorts\nGenerateDatabaseDetails\nGenerateGroupCounts\n# GenerateStudyPopulation \nGenerateTables","category":"page"},{"location":"api/#OMOPCDMCohortCreator.GenerateDatabaseDetails","page":"API","title":"OMOPCDMCohortCreator.GenerateDatabaseDetails","text":"GenerateDatabaseDetails(dialect::Symbol, schema::String)\n\nGenerates the dialect and schema details for accessing a given OMOP CDM database.\n\nArguments:\n\ndialect::Symbol - the dialect used for SQL queries (to see what is dialects are available, see here: https://mechanicalrabbit.github.io/FunSQL.jl/stable/reference/#FunSQL.SQLDialect)\nschema::String - the name of the database schema being used.\n\n\n\n\n\n","category":"function"},{"location":"api/#OMOPCDMCohortCreator.GenerateGroupCounts","page":"API","title":"OMOPCDMCohortCreator.GenerateGroupCounts","text":"GenerateGroupCounts(data::DataFrame)\n\nGiven data in a DataFrame, get group counts based on each feature found in the DataFrame and removes person_id for privacy aggregation purposes.\n\nArguments:\n\ndata::DataFrame - a DataFrame that must have at least a person_id column\n\nReturns:\n\ndf::DataFrame - a DataFrame that contains the group counts based on each feature found in data with the person_id field removed for privacy\n\n\n\n\n\n","category":"function"},{"location":"api/#OMOPCDMCohortCreator.GenerateTables","page":"API","title":"OMOPCDMCohortCreator.GenerateTables","text":"GenerateTables(conn; inplace = true, exported = false)\n\nGenerates Julia representations of all tables found in a given OMOP CDM database.\n\nArguments:\n\ndialect::Symbol - the dialect used for SQL queries (to see what is dialects are available, see here: https://mechanicalrabbit.github.io/FunSQL.jl/stable/reference/#FunSQL.SQLDialect)\nschema::String - the name of the database schema being used.\n\n\n\n\n\n","category":"function"},{"location":"api/#Executors","page":"API","title":"Executors","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"These functions perform quality assurance checks on data extracts genereated from OMOPCDMCohortCreator queries.","category":"page"},{"location":"api/","page":"API","title":"API","text":"ExecuteAudit","category":"page"},{"location":"api/#OMOPCDMCohortCreator.ExecuteAudit","page":"API","title":"OMOPCDMCohortCreator.ExecuteAudit","text":"TODO: Add docs when ready\n\n\n\n\n\n","category":"function"},{"location":"tutorials/#Tutorials","page":"Tutorials","title":"Tutorials","text":"","category":"section"},{"location":"tutorials/","page":"Tutorials","title":"Tutorials","text":"","category":"page"},{"location":"tutorials/#Beginner-Tutorial","page":"Tutorials","title":"Beginner Tutorial","text":"","category":"section"},{"location":"tutorials/#Environment-Set-Up","page":"Tutorials","title":"Environment Set-Up","text":"","category":"section"},{"location":"tutorials/","page":"Tutorials","title":"Tutorials","text":"For this tutorial, you will need to activate an environment:","category":"page"},{"location":"tutorials/","page":"Tutorials","title":"Tutorials","text":"pkg> activate TUTORIAL","category":"page"},{"location":"tutorials/#Packages","page":"Tutorials","title":"Packages","text":"","category":"section"},{"location":"tutorials/","page":"Tutorials","title":"Tutorials","text":"You will need the following packages for this tutorial:","category":"page"},{"location":"tutorials/","page":"Tutorials","title":"Tutorials","text":"TUTORIAL> add OMOPCDMCohortCreator\nTUTORIAL> add OMOPCDMDatabaseConnector\nTUTORIAL> add DataDeps","category":"page"},{"location":"tutorials/#Data","page":"Tutorials","title":"Data","text":"","category":"section"},{"location":"tutorials/","page":"Tutorials","title":"Tutorials","text":"For this tutorial, we will work with data from Eunomia","category":"page"},{"location":"tutorials/","page":"Tutorials","title":"Tutorials","text":"NOTE: In a later release, this step should no longer be required or at least be automated in another package","category":"page"},{"location":"#Welcome-to-the-OMOPCDMCohortCreator.jl-Docs!","page":"Home","title":"Welcome to the OMOPCDMCohortCreator.jl Docs!","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"These docs are a work in progress! 😀","category":"page"}]
}
