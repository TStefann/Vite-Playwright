Feature: Cache mechanism

  Scenario: Storing and retrieving a string from cache
    When I store a string value "Hello, World!" in cache with key "greeting"
    Then I retrieve the string from cache with key "greeting" and it should be "Hello, World!"

  Scenario: Storing and retrieving a number from cache
    When I store a number value 42 in cache with key "answer"
    Then I retrieve the number from cache with key "answer" and it should be 42


  Scenario: Retrieving a non-existent key from cache
    When I try to retrieve data from cache with key "unknown"
    Then I should get "undefined" as the value

  Scenario: Storing and retrieving objects from cache
    When I store an object in cache with key "test"
    Then I retrieve the object from cache with key "test"