Feature: Hints

    Scenario: Hints are displayed
        Given user navigates to home page
        When user clicks on show hints
        Then user should see hint "<hint>"

    Examples:
            | hint  |
            | Hint  |
            | Hint2 |
            | Hint3 |