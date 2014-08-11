Feature: Keep the team focused on a directive - a short sentence - and 
  help them sharpen it at the begining of each cycle.  Sharpening happens
  by allowing each member to join the discussion and offer his 
  version of the directive and rate the other directives.

  Scenario: A fox want's to start a quest
    Given the fox has his eye on a fresh prize
    When we select to start a new quest
    Then we are invited to login or register
     And we type a directive
     And we invite our fellows

  Scenario: A badger gets an invitation to join a quest
    Given a fox started a quest and invited the badger
    When we recieves an invitaion
    Then we click the invite button
    And we read the directive
    And we read the directive history
    And we join the quest
    And we are invited to login or register

  Scenario: A badger joins a quest
    Given a budger accepted an invitation
    When the budger clicks "join"
    Then we are presented with the list of directives
    And we are invited to grade the directives
    And we comment on a directive
    And we propose an improved directive

  Scenario: A user posts a comment
    Given the crow publishes an alternative directive
    When we publishes a comment on a directive
    Then a notification is sent to the crow
    Then a notification is sent to all the crows

  Scenario: A fox adapt a budger's suggestion
    Given we proposed a directive
    When the fox receives and email wth the budger's suggestion
    Then the fox is shown the directive
    And the fox can click accept and improve the directive


