@Search @Regression
Feature: Search

    Scenario Outline: User should be able to search through transactions by company name
        When User logs in
        And User searches for "<company_name>"
        Then User should get "<search_results>"

        Examples:
            | company_name | search_results |
            | liftago      | liftago        |

    Scenario: User should get no search results
        When User logs in
        When User searches for "not_existing_brand"
        Then User should get no search results

    Scenario: User should be able to search and see no transactions in my results
        When User logs in
        When User searches for ""
        Then User should get no transactions in search results